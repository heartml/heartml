//@ts-check
import ReactiveProperty from "./ReactiveProperty.js"
import HostEffects from "./HostEffects.js"
import { show, hide, classMap, styleMap } from "./directives.js"
import { signal, computed, effect, Signal } from "@preact/signals-core"

export const css = (strAry, ...values) => {
  const strings = strAry.flatMap((item, index) => [item, values[index]])
  return Object.assign(document.createElement("style"), { textContent: strings.join("") })
}

export const html = (strAry, ...values) => {
  const strings = strAry.flatMap((item, index) => [item, values[index]])

  var tmpl = new DocumentFragment()
  const htmlFrag = `<body>${strings.join("")}</body>`
  const fragment = new DOMParser().parseFromString(htmlFrag, 'text/html')
  tmpl.append(...fragment.body.childNodes)

  return tmpl
}

export const declarativeEffects = {
  connected(element) {
    element.hostEffects = new HostEffects(element, {
      show,
      hide,
      classMap,
      styleMap
    })

    if (element.constructor.declarativeEffects.shadow) {
      element.hostEffects.processShadowRoot("host-lazy-effect")
    }

    if (element.constructor.declarativeEffects.light) {
      element.hostEffects.processElementChildren("host-lazy-effect")
    }
  },
  resumed(element) {
    setTimeout(() => {
      if (element.constructor.declarativeEffects.shadow) {
        element.hostEffects.processShadowRoot("host-effect")
      }
  
      if (element.constructor.declarativeEffects.light) {
        element.hostEffects.processElementChildren("host-effect")
      }
    })
  },
  cleanup(element) {
    element.hostEffects.dispose()
  }
}

export const declarativeEvents = {
  /**
   * @param {HTMLElement} element 
   */
  instance(element) {
    // @ts-ignore
    if (!element.handleEvent) {
      // @ts-ignore
      element.handleEvent = 
      /**
       * @param {Event} event
       */
      function(event) {
        let eventSyntax
        let node = /** @type {Element} */(event.target)

        // TODO: this should handle multiple events with ; between
        const composedNode = event.composedPath().find((el) => {
          if (
            // make sure we're dealing with Element, not Document/Window
            (el instanceof Element) &&
            // make sure the element is our component or a light DOM/shadow child
            (el === element || element.contains(el) || element.shadowRoot?.contains(el)) &&
            // and has the right attribute?
            el.hasAttribute("host-event")
          ) {
            return el
          }
        })

        if (composedNode) node = /** @type {Element} */(composedNode)
        if (node.hasAttribute("host-event")) eventSyntax = node.getAttribute("host-event")

        const [eventType, methodName] = (eventSyntax || "").split("#")

        if (event.type === eventType && element[methodName.trim()]) {
          element[methodName.trim()](event, node)
        } else {
          const eventTypeCleaned = `-${event.type}`
            .replace(":", "-")
            .split("-")
            .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))

          if (element[`handle${eventTypeCleaned}`])
            element[`handle${eventTypeCleaned}`](event)
        }
      }.bind(element)
    }
  },
  connected(element) {
    const eventRoot = element.shadowRoot || element
    for (const eventName of element.constructor.declarativeEvents) {
      eventRoot.addEventListener(eventName, element)
    }
  },
  cleanup(element) {
    const eventRoot = element.shadowRoot || element
    for (const eventName of element.constructor.declarativeEvents) {
      eventRoot.removeEventListener(eventName, element)
    }
  }
}

export const properties = {
  static(klass) {
    if (!klass.observedAttributes) klass.observedAttributes = []

    for (const [key, value] of Object.entries(klass.properties)) {
      if (!value.computed)
        klass.observedAttributes.push(value.attribute || key)
    }
  },
  instance(element) {
    element.reactiveAttributes = {}

    for (const [key, value] of Object.entries(element.constructor.properties || {})) {
      if (value.computed) {
        const computedSignal = computed(() => element[`${key}Computed`])
        Object.defineProperty(element, key, {
          get() {
            return computedSignal.value
          },
          enumerable: true,
          configurable: false
        })
        element[`${key}Signal`] = computedSignal
      } else {
        const signalValue = element[key]
        const signalObject = signalValue instanceof Signal ? signalValue : signal(signalValue)
        element.reactiveAttributes[value.attribute || key] = new ReactiveProperty(element, signalObject, { name: key, attribute: value.attribute })
        element[`${key}Signal`] = signalObject

        // Delayed signals
        if (value.delayed) {
          const delayedSignal = signal(signalObject.peek())
          Object.defineProperty(element, `${key}Delayed`, {
            get() {
              return delayedSignal.value
            },
            enumerable: true,
            configurable: false
          })
          element[`${key}DelayedSignal`] = delayedSignal
          effect(() => {
            const newValue = signalObject.value
            // TODO: allow listening to CSS animations rather than timeout
            setTimeout(() => {
              delayedSignal.value = newValue
            }, value.delayed)
          })
        }
      }
    }
  },
  attributeChanged(element, name, _, newValue) {
    element.reactiveAttributes?.[name]?.refreshFromAttribute(newValue)
  }
}

export const queries = {
  instance(element) {
    // Add queries as instance properties
    if (element.constructor.queries) {
      for (let scope of ["light", "shadow"]) {
        for (let [name, selector] of Object.entries(element.constructor.queries[scope] || {})) {
          if (Array.isArray(selector)) {
            Object.defineProperty(element, name, {
              get: () => {
                const queryScope = scope === "shadow" ? element.shadowRoot : element
                return Array.from(queryScope.querySelectorAll(selector)).filter(
                  (node) => scope === "shadow" || node.closest(element.localName) === element
                )
              },
              enumerable: false,
              configurable: false
            })
          } else {
            Object.defineProperty(element, name, {
              get: () => {
                const queryScope = scope === "shadow" ? element.shadowRoot : element
                const node = queryScope.querySelector(selector)
                return node && (scope === "shadow" || node.closest(element.localName) === element) ? node : null
              },
              enumerable: false,
              configurable: false
            })
          }
        }
      }
    }
  }
}

export const template = {
  connected(element) {
    if (!element.shadowRoot && !element.querySelector("template[shadowrootmode]")) {
      element.attachShadow({mode: "open"})

      const tmpl = element.constructor.template
      const foundTmpl = [...tmpl.children].find(node => node.localName === "template" && !node.id)?.content || tmpl
      element.shadowRoot.append(foundTmpl.cloneNode(true))

      const foundStyles = [...tmpl.children].find(node => node.localName === "style")
      if (foundStyles) element.shadowRoot.append(foundStyles.cloneNode(true))
      if (element.constructor.styles) {
        element.shadowRoot.append(element.constructor.styles.cloneNode(true))
      }
    }
  }
}
