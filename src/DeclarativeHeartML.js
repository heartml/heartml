import { Heartml, HeartElement } from "./core.js"

class DeclarativeHeartML extends HTMLElement {
  static {
    customElements.define("heart-ml", this)
  }

  camelCase(str) {
    // from: https://stackoverflow.com/a/46116986/551775
    return str
      .split('-')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
  }

  connectedCallback() {
    setTimeout(() => {
      const tagName = this.getAttribute("tag")
      if (!customElements.get(tagName)) {
        const newCE = this.extend ? this.extend(HeartElement) : class extends HeartElement {}

        const template = this.querySelector("template[data-html]")
        const stylesTemplate = this.querySelector("template[data-css]")
        if (template) newCE.template = template.content
        if (stylesTemplate) newCE.styles = stylesTemplate.content.querySelector("style")

        for (const attribute of this.attributes) {
          const pluginName = this.camelCase(attribute.name)
          if (pluginName in Heartml.plugins) {
            newCE[pluginName] = JSON.parse(attribute.value)
          }
        }

        newCE.define(tagName)
      }
    })
  }
}

export default DeclarativeHeartML
