import Heartml, { HeartElement } from "./heartml.js"

class DeclarativeHeartElement extends HTMLElement {
  static {
    customElements.define("heart-ml", this)
  }

  camelCase(str) {
    // from: https://stackoverflow.com/a/46116986/551775
    return str
      .split('-')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
  }

  handleEvent(event) {
    const tagName = this.getAttribute("tag")

    if (!customElements.get(tagName)) {
      const scriptTag = this.querySelector("script")
      const globalName = scriptTag.textContent.match(/class (\w+) extends /)?.[1]

      if (!globalName) {
        console.warn(`A "class [Name] extends" pattern could not be found in the module script.`)
        console.debug(this)
        return
      }

      if (event.detail.globalClassName !== globalName) return;

      const newCE = globalThis[globalName]

      if (!newCE) {
        console.warn(`The "${globalName}" class could not be found in the global scope.`)
        console.debug(this)
        return
      }

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
  }

  connectedCallback() {
    document.addEventListener("heartml:hoist", this)
  }

  disconnectedCallback() {
    document.removeEventListener("heartml:hoist", this)
  }
}

export default DeclarativeHeartElement
