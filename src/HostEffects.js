//@ts-check
import { effect } from "@preact/signals-core"

/**
 * @typedef { import("@preact/signals-core").Signal } Signal
 */

/**
 * @typedef { Record<string, (component: HTMLElement, node: HTMLElement, ...args: unknown[]) => void> | undefined } Directives
 */

class HostEffects {
  /**
   *
   * @param {HTMLElement} element
   * @param {Directives} directives
   */
  constructor(element, directives) {
    /** @type {HTMLElement} */
    this.element = element
    /** @type {Directives} */
    this.directives = directives

    this.effectDisposals = []
  }

  dispose() {
    this.effectDisposals.forEach(disposal => disposal())
    this.effectDisposals = []
  }

  processShadowRoot(attr) {
    this.processNodes(attr, this.element.shadowRoot.querySelectorAll(`[${attr}]`))
  }

  processElementChildren(attr) {
    this.processNodes(attr, this.element.querySelectorAll(`[${attr}]`), true)
  }

  /**
   * `host-effect="@textContent = .count"`
   * `host-effect="someMethod(.count)"`
   * `host-effect="$directive(.count)"`
   * `host-effect="@textContent = .count; $directive(.count)"`
   * 
   * @param {string} attr
   * @param {NodeListOf<Element>} effectNodes
   */
  processNodes(attr, effectNodes, elementsBoundary = false) {
    effectNodes.forEach(node => {
      let firstMatch = null

      // We want to create a boundary so light DOM effects don't "bleed" into other components
      if (elementsBoundary) {
        let nodeWalking = node
        while (!firstMatch && nodeWalking) {
            if ("declarativeEffects" in nodeWalking.constructor) {
              firstMatch = nodeWalking
            } else {
              nodeWalking = /** @type {Element} */ (nodeWalking.parentNode)
            }
        }
      } else {
        firstMatch = this.element
      }

      if (firstMatch === this.element) {
        const syntax = node.getAttribute(attr).replace(/\n/g, " ")
        const statements = syntax.split(";").map(item => item.trim())
        statements.forEach(statement => {
          if (statement.startsWith(".")) {
            // shortcut for text content
            statement = `@textContent=${statement}`
          }

          if (statement.startsWith("@")) {
            // property assignment
            const expression = statement.split("=").map(item => item.trim())
            expression[0] = expression[0].substring(1)

            this.effectDisposals.push(effect(() => {
              const value = this.element[expression[1].substring(1)]

              if (this.element["resumed"]) node[expression[0]] = value
            }))
          } else if (statement.startsWith("$")) {
            // directive
            const [, directiveName, argsStr] = statement.trim().match(/(.*)\((.*)\)/)
            const argStrs = argsStr.split(",").map(item => item.trim())
            argStrs.unshift("@")

            if (this.directives && this.directives[directiveName.trim().substring(1)]) {
              this.effectDisposals.push(effect(() => {
                const args = argStrs.map(argStr => this.convertArgToValue(argStr, node))

                // @ts-ignore
                if (this.element["resumed"]) this.directives[directiveName.trim().substring(1)]?.(this.element, ...args)
              }))
            }
          } else {
            // method call
            const [, methodName, argsStr] = statement.trim().match(/(.*)\((.*)\)/)
            const argStrs = argsStr.split(",").map(item => item.trim())
            argStrs.unshift("@")

            this.effectDisposals.push(effect(() => {
              const args = argStrs.map(argStr => this.convertArgToValue(argStr, node))

              if (this.element["resumed"]) this.element[methodName.trim()]?.(...args)
            }))
          }
        })
      }
    })
  }

  convertArgToValue(argStr, node) {
    if (argStr === "@") {
      return node
    }

    if (argStr.startsWith("'")) { // string literal
      return argStr.substring(1, argStr.length -1)
    }

    if (argStr.match(/^[0-9]/)) {
      return Number(argStr)
    }

    return this.element[argStr.substring(1)]
  }
}

export default HostEffects
