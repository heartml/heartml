//@ts-check
import Heartml, { HeartElement } from "../../src/heartml.js"
import "./pluginsetup.js"
import "./BlahGoo.js"
import "../../src/DeclarativeHeartElement.js"
import "../../src/utils/HeartModule.js"
HeartElement.hoist()

/**
 * Woweee!
 */
export class TestMe extends HeartElement {
  static {
    this.properties = {
      foo: {},
      baR: {attribute: "ba-r"},
      baz: {computed: true}
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

    this.confetti = "orange"

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

  get bazComputed() {
    return this.baR.length
  }

  get childHello() {
    this._blahGoo ??= this.querySelector("blah-goo")
    return this._blahGoo.hello
  }

  get childHelloMaxLength() {
    return this._blahGoo?.hello?.length > 10
  }
}

// setTimeout(() => {
//   document.body.innerHTML = "done!"
// }, 1000)
