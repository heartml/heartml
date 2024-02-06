//@ts-check
import Heartml, { HeartElement } from "../../src/heartml.js"
import "./pluginsetup.js"
import "./BlahGoo.js"
import "../../src/utils/DeclarativeHeartElement.js"
import "../../src/utils/HeartModule.js"

const { directives } = Heartml.plugins.declarativeEffects

directives.checkedIfGreaterThan = (component, node, value, length) => {
  node.checked = value.length > length
}

/**
 * Woweee!
 */
export class TestMe extends HeartElement {
  static {
    this.properties = {
      foo: {},
      baR: {attribute: "ba-r"},
      baz: {memoize: true}
    }

    this.declarativeEffects = { light: true, shadow: true }

    this.queries = {
      light: {
        output: "output.texty"
      },
      shadow: {
        shadowOutput: "output"
      }
    }

    this.dashed = "orange"

    this.define("test-me")
  }

  start() {
    /** @type {string} - Totally rad, man! */
    this.foo = "I'm a string"

    /** @type {string} */
    this.baR = "lightyellow"

    /** @type {number} */
    this.baz

    /** @type {HTMLOutputElement} */
    this.output

    /** @type {HTMLOutputElement} */
    this.shadowOutput
  }

  connectedCallback() {
    this.lifecycle.mount(subscribe => {
      subscribe("foo", () => {
        this.output.textContent = this.foo
      })

      this.resumed = true

      subscribe("foo", "baR", () => {
        this.style.backgroundColor = this.baR
      })
    })
    this.shadowOutput.style.backgroundColor = "lightgreen"
  }

  get mirroredStyles() {
    return {
      backgroundColor: this.baR
    }
  }

  bazMemoizing() {
    return this.baR.length
  }

  get childHello() {
    this._blahGoo ??= this.querySelector("blah-goo")
    return this._blahGoo.hello
  }
}

export { HeartElement }

// setTimeout(() => {
//   document.body.innerHTML = "done!"
// }, 1000)
