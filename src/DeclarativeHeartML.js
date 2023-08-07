import { Heartml, HeartElement } from "./core.js"

class DeclarativeHeartML extends HTMLElement {
  static {
    customElements.define("heart-ml", this)
  }

  camelCase(str) {
    // from: https://stackoverflow.com/a/46116986/551775
    return str
      .split('-')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
  }

  connectedCallback() {
    setTimeout(() => {
      const tagName = this.getAttribute("tag")
      if (!customElements.get(tagName)) {
        const template = this.querySelector("template[data-html]")
        const styles = this.querySelector("template[data-css]")

        const newCE = class extends HeartElement {}

        if (template) newCE.template = template.content
        if (styles) newCE.styles = styles.content.querySelector("style")
        for (const attribute of this.attributes) {
          const pluginName = this.camelCase(attribute.name)
          if (Heartml.plugins[pluginName]) {
            newCE[pluginName] = JSON.parse(attribute.value)
          }
        }

        const startCallback = this.start
        newCE.prototype.start = function() {
          if (startCallback) {
            const mixin = startCallback.bind(this)()

            Object.keys(mixin).forEach(item => {
              const descriptor = Object.getOwnPropertyDescriptor(mixin, item)
              console.info(descriptor)
              Object.defineProperty(this, item, descriptor)
            })
          }
        }

        Heartml.element(tagName, newCE)
      }
    })
  }
}

export default DeclarativeHeartML
