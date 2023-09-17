import { fixture, assert, aTimeout, html as testhtml } from "@open-wc/testing"

import { HeartElement, html } from "../src/heartml.js"

// Fixtures

class TestElement extends HeartElement {
  static template = html`
    <slot></slot>
    <test-msg></test-msg>
    <button host-event="click#shadowClick">Shadow Click</button>
  `
  static declarativeEvents = ["click"]

  clickMe(event) {
    event.stopPropagation()
    this.shadowRoot.querySelector("test-msg").textContent = "clicked!"
  }

  shadowClick() {
    this.shadowRoot.querySelector("test-msg").textContent = "via shadow"
  }
}
customElements.define("test-element", TestElement)

// Tests

describe("declarativeEvents", () => {
  it("handles click properly", async () => {
    const el = await fixture(testhtml`
      <test-element>
        <article>
          <button host-event="click#clickMe">Button</button>
        </article>
      </test-element>
    `)

    el.querySelector("button").click()
    assert.equal(el.shadowRoot.querySelector("test-msg").textContent, "clicked!")
  })

  it("handles click in the shadow DOM", async () => {
    const el = await fixture(testhtml`
      <test-element></test-element>
    `)

    await aTimeout(100)

    el.shadowRoot.querySelector("button").click()
    assert.equal(el.shadowRoot.querySelector("test-msg").textContent, "via shadow")
  })

  it("handles mutations properly", async () => {
    const el = await fixture(testhtml`
      <test-element>
        <article></article>
      </test-element>
    `)

    await aTimeout(100)

    el.querySelector("article").innerHTML = '<button host-event="click#clickMe">Button</button>'
    await aTimeout(50) // ensure mutation handlers are run
    el.querySelector("button").click()

    assert.equal(el.shadowRoot.querySelector("test-msg").textContent, "clicked!")
  })

  it("handles nesting properly", async () => {
    const el = await fixture(testhtml`
      <test-element>
        <article>
          <button host-event="click#clickMe">Button</button>
        </article>

        <test-element id="nested">
          <button host-event="click#clickMe">Button 2</button>
        </test-element>
      </test-element>
    `)

    el.querySelector("#nested button").click()
    assert.equal(el.querySelector("#nested").shadowRoot.querySelector("test-msg").textContent, "clicked!")
    assert.notEqual(el.shadowRoot.querySelector("test-msg").textContent, "clicked!")
  })
})
