class HeartModule extends HTMLElement {
  static modules = {}

  static import(unqualifiedURL, triggeringElement = null) {
    const fullURL = new URL(unqualifiedURL, window.location).toString()
    const loadedModule = this.modules[fullURL]
    if (loadedModule) {
      if (loadedModule instanceof Promise) {
        return loadedModule
      } else {
        return new Promise((resolve, reject) => {
          resolve(loadedModule)
        })
      }
    }

    // Construct a new promise
    const importPromise = new Promise(async (resolve, reject) => {
      const response = await fetch(fullURL)
      const text = await response.text()

      const htmlDoc = new DOMParser().parseFromString(`<body>${text}</body>`, "text/html")
      const scriptTags = htmlDoc.body.querySelectorAll("script[type=module]")
      const scripts = []
      scriptTags.forEach(tag => {
        scripts.push(tag.textContent.trimStart())
        tag.remove()
      })

      const blobSource = `const __import_meta_document = new DocumentFragment();const __htmlFrag = "<body>" + ${JSON.stringify(htmlDoc.body.innerHTML)} + "</body>";const __fragment = new DOMParser().parseFromString(__htmlFrag, 'text/html');__import_meta_document.append(...__fragment.body.childNodes);import.meta.document = __import_meta_document;import.meta.url=${JSON.stringify(fullURL)};${scripts.join("")}
export default __import_meta_document
`

      const blob = new Blob([blobSource], {type: 'application/javascript'})
      const blobURL = window.URL.createObjectURL(blob)
      const importedModule = await import(blobURL)
      this.modules[fullURL] = importedModule
      resolve(importedModule)
      if (triggeringElement) {
        triggeringElement.dispatchEvent(new CustomEvent("heartml:import", { bubbles: true }))
      }
    })

    // Associate the promise with this qualified URL so we don't ever attempt multiple fetches/parses
    this.modules[fullURL] = importPromise
    return importPromise
  }

  static {
    customElements.define("heart-module", HeartModule)
  }

  connectedCallback() {
    this.constructor.import(this.getAttribute("src"), this)
  }
}

export default HeartModule
