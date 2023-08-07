//@ts-check
import { effect } from "@preact/signals-core"

/**
 * @typedef { import("@preact/signals-core").Signal } Signal
 */

/**
 * @typedef { Record<string, (host: HTMLElement, element: HTMLElement, value: unknown) => void> | undefined } Directives
 */

class HostEffects {
  /**
   *
   * @param {HTMLElement} host element
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

  /**
   * Only attempt this if you know what you're doing!
   */
  processElementChildren(attr) {
    this.processNodes(attr, this.element.querySelectorAll(`[${attr}]`), true)
  }

  /**
   * `host-effect="@textContent = .count"`
   * `host-effect="someMethod(.count)"`
   * `host-effect="$directive(.count)"`
   * `host-effect="@textContent = .count; $directive(.count)"`
   * 
   * @param {string}
   * @param {Array<Node>} effectNodes
   */
  processNodes(attr, effectNodes, elementsBoundary = false) {
    effectNodes.forEach(node => {
      let firstMatch = null

      // We want to create a boundary so light DOM effects don't "bleed" into other components
      if (elementsBoundary) {
        let nodeWalking = node
        while (!firstMatch && nodeWalking) {
            if (nodeWalking.constructor.declarativeEffects) {
              firstMatch = nodeWalking
            } else {
              nodeWalking = nodeWalking.parentNode
            }
        }
      } else {
        firstMatch = this.element
      }

      if (firstMatch === this.element) {
        const syntax = node.getAttribute(attr).replace(/\n/g, " ")
        const statements = syntax.split(";").map(item => item.trim())
        statements.forEach(statement => {
          if (statement.startsWith("@")) {
            // property assignment
            const expression = statement.split("=").map(item => item.trim())
            expression[0] = expression[0].substring(1)

            this.effectDisposals.push(effect(() => {
              const value = this.element[expression[1].substring(1)]

              if (this.element.resumed) node[expression[0]] = value
            }))
          } else if (statement.startsWith("$")) {
            // directive
            const [, directiveName, argsStr] = statement.trim().match(/(.*)\((.*)\)/)
            const argStrs = argsStr.split(",").map(item => item.trim())
            argStrs.unshift("@")

            if (this.directives && this.directives[directiveName.trim().substring(1)]) {
              this.effectDisposals.push(effect(() => {
                const args = argStrs.map(argStr => {
                  if (argStr === "@") {
                    return node
                  }

                  if (argStr.startsWith("'")) { // string literal
                    return argStr.substring(1, argStr.length -1)
                  }

                  return this.element[argStr.substring(1)]
                })

                if (this.element.resumed) this.directives[directiveName.trim().substring(1)]?.(this, ...args)
              }))
            }
          } else {
            // method call
            const [, methodName, argsStr] = statement.trim().match(/(.*)\((.*)\)/)
            const argStrs = argsStr.split(",").map(item => item.trim())
            argStrs.unshift("@")

            this.effectDisposals.push(effect(() => {
              const args = argStrs.map(argStr => {
                if (argStr === "@") {
                  return node
                }

                if (argStr.startsWith("'")) { // string literal
                  return argStr.substring(1, argStr.length -1)
                }

                return this.element[argStr.substring(1)]
              })

              if (this.element.resumed) this.element[methodName.trim()]?.(...args)
            }))
          }
        })
      }
    })
  }
}

export default HostEffects
