//@ts-check
import Heartml, { css, html, HeartElement } from "../../src/heartml.js"

Heartml.element("blah-goo", class extends HeartElement {
  static template = html`
    <p host-effect="@textContent = .hello">. . .</p>
    <fieldset host-event="input#updateHello">
      <input type="text" host-effect="@value = .hello" />
    </fieldset>
  `
  static styles = css`
    :host {
      color: blue;
      font-weight: bold;
    }
  `
  static declarativeEffects = { shadow: true }
  static declarativeEvents = ["input"]
  static properties = { hello: {} }
  // static poll = {
  //   interval: 1000,
  //   run() {
  //     this.hello = this.hello + "x"
  //   }
  // }

  start() {
    this.hello = ""
  }

  updateHello(e) {
    this.hello = e.target.value
  }
})
