//@ts-check
import { effect } from "@preact/signals-core"

export const Heartml = {}

/**
 * Groovy!
 */
export class HeartLifecycle {
  constructor(element) {
    this.element = element
  }

  /**
   * Kicks it all off!
   */
  start() {
    this.element.start?.()

    Reflect.ownKeys(this.element.constructor).forEach(key => {
      if (Heartml.plugins[key]) Heartml.plugins[key].instance?.(this.element)
    })

    return this
  }

  /**
   * @param {(subscribe: (...propertyNamesAndEffect: (string | (() => void))[]) => void) => void} fn
   */
  mount(fn = null) {
    Reflect.ownKeys(this.element.constructor).forEach(key => {
      if (Heartml.plugins[key]) Heartml.plugins[key].connected?.(this.element)
    })

    if (fn) {
      fn((...args) => {
        effect(() => {
          args.forEach(arg => {
            if (typeof arg === "string") this[arg]
          })
          // @ts-ignore
          if (this.element.resumed) args[args.length - 1]()
        })
      })
    }

    this.element.resumed = true

    Reflect.ownKeys(this.element.constructor).forEach(key => {
      if (Heartml.plugins[key]) Heartml.plugins[key].resumed?.(this.element)
    })
  }

  cleanup() {
    Reflect.ownKeys(this.element.constructor).forEach(key => {
      if (Heartml.plugins[key]) Heartml.plugins[key].cleanup?.(this.element)
    })
  }

  attributeChanged(...args) {
    Reflect.ownKeys(this.element.constructor).forEach(key => {
      if (Heartml.plugins[key]) Heartml.plugins[key].attributeChanged?.(this.element, ...args)
    })
  }
}

export class HeartElement extends HTMLElement {
  /**
   * Set up a custom element to hook into the Heartml lifecycle and get registered
   * 
   * @param {string} tagName - the custom element's tag to register
   */
  static define(tagName) {
    const reservedKeys = ["length", "name", "prototype"]

    Reflect.ownKeys(this).forEach(key => {
      if (!reservedKeys.includes(key.toString()) && Heartml.plugins[key]) {
        Heartml.plugins[key].static?.(this)
      } else if (!reservedKeys.includes(key.toString())) {
        console.warn(`The "${key.toString()}" Heartml plugin hasn't been initialized.`)
        console.debug(this)
      }
    })

    customElements.define(tagName, this)
  }

  constructor() {
    super()

    this.lifecycle = new HeartLifecycle(this).start()
  }

  connectedCallback() {
    this.lifecycle.mount()
  }

  disconnectedCallback() {
    this.lifecycle.cleanup()
  }

  attributeChangedCallback(...args) {
    this.lifecycle.attributeChanged(...args)
  }
}
