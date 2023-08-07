//@ts-check
import ReactiveProperty from "./ReactiveProperty.js"
import HostEffects from "./HostEffects.js"
import { show, classMap, styleMap } from "./directives.js"
import { signal, computed } from "@preact/signals-core"

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
      classMap,
      styleMap,
      uniqId: (_, el) => {
        el.id = "uniq123"
      }
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
        const node = /** @type {Element} */ (event.target)
        let eventSyntax = node.getAttribute("host-event")
        if (!eventSyntax) {
          const eventParent = node.closest("[host-event]") || element
          if (element.contains(eventParent) || element.shadowRoot?.contains(eventParent)) {
            eventSyntax = eventParent.getAttribute("host-event")
          }
        }
        if (eventSyntax) {
          const [eventType, methodName] = eventSyntax.split("#")
          if (event.type == eventType && element[methodName.trim()]) {
            element[methodName.trim()](event)
          }
        } else {
          // TODO: DRY it up?
          const eventTypeCleaned = event.type
            .replace(":", "-")
            .split('-')
            .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))

          if (element[`handle${eventTypeCleaned}`]) element[`handle${eventTypeCleaned}`](event)
        }
      }.bind(element)
    }
  },
  connected(element) {
    for (const eventName of element.constructor.declarativeEvents) {
      const eventRoot = element.shadowRoot || element
      eventRoot.addEventListener(eventName, element)
    }
  },
  cleanup(element) {
    for (const eventName of element.constructor.declarativeEvents) {
      const eventRoot = element.shadowRoot || element
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
    element.reactiveProperties = {}

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
        const signalObject = signal(element[key])
        element.reactiveProperties[value.attribute || key] = new ReactiveProperty(element, signalObject, { name: key, attribute: value.attribute })
        element[`${key}Signal`] = signalObject
      }
    }
  },
  attributeChanged(element, ...args) {
    [attr, oldValue, newValue] = args

    element.reactiveProperties?.[attr]?.refreshFromAttribute(newValue)
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
      element.shadowRoot.append(element.constructor.template.cloneNode(true))
      if (element.constructor.styles) {
        element.shadowRoot.append(element.constructor.styles.cloneNode(true))
      }
    }
  }
}
