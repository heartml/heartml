//@ts-check
import Heartml, { HeartElement, css, html } from "./heartml.js"
import { signal, computed, effect, batch, Signal } from "@preact/signals-core"

class DeclarativeHeartElement extends HeartElement {
  static {
    Object.assign(this, {
      css,
      html,
      signal,
      computed,
      effect,
      batch,
      Signal
    })

    customElements.define("heart-ml", this)
  }

  static modulePromises = {}

  static async define(tagName = null) {
    if (!tagName) {
      let modulePromise
      
      // We'll either save a promise now to be resolved later, or get a promise to resolve now
      // that was supplied by the connectedCallback of the declarative instance.
      if (!DeclarativeHeartElement.modulePromises[this.name]) {
        let callback;
        modulePromise = DeclarativeHeartElement.modulePromises[this.name] = new Promise((resolve, reject) => {
          callback = resolve
        })
        DeclarativeHeartElement.modulePromises[this.name] = callback
      } else {
        modulePromise = DeclarativeHeartElement.modulePromises[this.name]
      }

      const el = await modulePromise

      /** @type {HTMLTemplateElement} */
      const template = el.querySelector("template[data-html]")
      /** @type {HTMLTemplateElement} */
      const stylesTemplate = el.querySelector("template[data-css]")
      if (template) this.template = template.content
      if (stylesTemplate) this.styles = stylesTemplate.content.querySelector("style")
      
      for (const attribute of el.attributes) {
        const pluginName = this.camelCase(attribute.name)
        if (pluginName in Heartml.plugins) {
          this[pluginName] = JSON.parse(attribute.value)
        }
      }
      
      super.define(el.getAttribute("tag-name"))
    } else {
      super.define(tagName)
    }
  }

  static camelCase(str) {
    // from: https://stackoverflow.com/a/46116986/551775
    return str
      .split('-')
      .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1))
  }

  connectedCallback() {
    if (this.localName === "heart-ml") {
      // Code path for declarative elements
      setTimeout(() => {
        // Find the class name within the module script
        const scriptTag = this.querySelector("script[type=module]")
        const globalName = scriptTag.textContent.match(/class\s+(\w+)\s+extends\s+/)?.[1]

        if (!globalName) {
          console.warn(`A "class [Name] extends" pattern could not be found in the module script.`)
          console.debug(this)
          return
        }

        this.setAttribute("global-name", globalName)

        // We either resolve a promise already created by the component's `complete` static
        // method, or save a promise to be resolved later:
        if (DeclarativeHeartElement.modulePromises[globalName]) {
          // This is likely the route taken
          DeclarativeHeartElement.modulePromises[globalName](this)
        } else {
          // This only happens if there's some delay within the module script
          DeclarativeHeartElement.modulePromises[globalName] = new Promise((resolve, reject) => {
            resolve(this)
          })
        }
      })
    } else {
      super.connectedCallback()
    }
  }
}

export default DeclarativeHeartElement
