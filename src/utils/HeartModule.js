const constructJavaScriptBlob = (contents, url, scripts) => {
  const blobSource = `const __import_meta_document = new DocumentFragment();const __htmlFrag = "<body>" + ${JSON.stringify(contents)} + "</body>";const __fragment = new DOMParser().parseFromString(__htmlFrag, 'text/html');__import_meta_document.append(...__fragment.body.childNodes);import.meta.document = __import_meta_document;import.meta.url=${JSON.stringify(url)};${scripts}
  export default __import_meta_document
  `
  const blob = new Blob([blobSource], {type: 'application/javascript'})
  return window.URL.createObjectURL(blob)
}

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
      const scripts = []
      // if we're loading a declarative custom element, we need to process the `heart-ml` tag specially
      let dce = false

      const htmlDoc = new DOMParser().parseFromString(`<body>${text}</body>`, "text/html")
      if (htmlDoc.body.querySelector("heart-ml")) {
        dce = true
      } else {
        const scriptTags = htmlDoc.body.querySelectorAll("script[type=module]")
        
        scriptTags.forEach(tag => {
          scripts.push(tag.textContent.trimStart())
          tag.remove()
        })
      }

      const blobURL = constructJavaScriptBlob(htmlDoc.body.innerHTML, fullURL, scripts.join(""))
      const importedModule = await import(blobURL)
      this.modules[fullURL] = importedModule
      resolve(importedModule)
      if (triggeringElement) {
        triggeringElement.dispatchEvent(new CustomEvent("heartml:import", { bubbles: true, detail: importedModule }))
      }

      if (dce) {
        const dceTag = importedModule.default.querySelector("heart-ml").cloneNode(true)
        document.body.append(dceTag)
        const tagScript = dceTag.querySelector("script")
        const tagBlobURL = constructJavaScriptBlob(htmlDoc.body.innerHTML, `${fullURL}#heart-ml`, tagScript.textContent)
        await import(tagBlobURL)
      }
    })

    // Associate the promise with this qualified URL so we don't ever attempt multiple fetches/parses
    this.modules[fullURL] = importPromise
    return importPromise
  }

  static {
    customElements.define("heart-module", this)
  }

  connectedCallback() {
    this.constructor.import(this.getAttribute("src"), this)
  }
}

export default HeartModule
