import { fixture, assert, html as testhtml } from "@open-wc/testing"
import { signal, computed } from "@preact/signals-core"

import { declarativeEffects } from "../src/core-plugins.js"
import HostEffects from "../src/HostEffects.js"

class TestElement extends HTMLElement {
  static {
    customElements.define("test-element", this)
  }

  static template = `
    <p host-effect="
      .count;
      $classMap(.paraClasses);
      $uniqId();
      styled ( 'color' , .textColor, )
    "></p>

    <output host-effect="$show(.textIsGreen); $styleMap(.outputStyles)">show if green</output>
  `

  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.innerHTML = this.constructor.template

    this.countSignal = signal(1)
    this.textColor = signal("red")
    this.textIsGreenSignal = computed(() => this.textColor.value === "green")
  }

  connectedCallback() {
    this.resumed = true
    this.effects = new HostEffects(this, {
      ...declarativeEffects.directives,
      uniqId: (_, node) => {
        node.id = "uniq123"
      }
    })

    this.effects.processShadowRoot("host-effect")
  }

  disconnectedCallback() {
    this.effects.dispose()
  }

  get count() {
    return this.countSignal.value
  }

  get textIsGreen() {
    return this.textIsGreenSignal.value
  }

  get paraClasses() {
    return {
      "some-class": this.countSignal.value < 5,
      "another-class": false
    }
  }

  get outputStyles() {
    return {
      fontWeight: this.textIsGreen ? "bold" : ""
    }
  }

  styled(el, name, color) {
    el.style[name] = color
  }
}

describe("HostEffects", () => {
  context("property assignment", () => {
    it("textContent", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.strictEqual(el.shadowRoot.firstElementChild.textContent, "1")
      el.countSignal.value = 5
      assert.strictEqual(el.shadowRoot.firstElementChild.textContent, "5")
    })
  })

  context("methods", () => {
    it("styled", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.strictEqual(el.shadowRoot.firstElementChild.style.color, "red")
      el.textColor.value = "green"
      assert.strictEqual(el.shadowRoot.firstElementChild.style.color, "green")
    })
  })

  context("directives", () => {
    it("show", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.isTrue(el.shadowRoot.querySelector("output").hidden, "output should be hidden")
      el.textColor.value = "green"
      assert.isNotTrue(el.shadowRoot.querySelector("output").hidden, "output shouldn't be hidden")
    })

    it("classMap", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.isTrue(el.shadowRoot.firstElementChild.classList.contains("some-class"), "some-class should be set")
      assert.isFalse(el.shadowRoot.firstElementChild.classList.contains("another-class"), "another-class shouldn't be set")
      el.countSignal.value = 10
      assert.isFalse(el.shadowRoot.firstElementChild.classList.contains("some-class"), "some-class should NOT be set after reactive update")
    })

    it("styleMap", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.equal(el.shadowRoot.querySelector("output").style.fontWeight, "")
      el.textColor.value = "green"
      assert.equal(el.shadowRoot.querySelector("output").style.fontWeight, "bold")
    })

    it("uniqId", async () => {
      const el = await fixture(testhtml`
        <test-element></test-element>
      `)
      assert.strictEqual(el.shadowRoot.firstElementChild.id, "uniq123")
    })
  })
})
