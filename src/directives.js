//@ts-check
/**
 * @typedef { import("./HostEffects.js").default } HostEffects
 */

/**
 * Set node `hidden` to false if value is true
 * 
 * @param {HTMLElement} component
 * @param {HTMLElement} node
 * @param {boolean} value
 */
export const show = (component, node, value) => {
  node.hidden = !value
}

/**
 * Set node `hidden` to true if value is true
 * 
 * @param {HTMLElement} component
 * @param {HTMLElement} node
 * @param {boolean} value
 */
export const hide = (component, node, value) => {
  node.hidden = !!value
}

/**
 * Toggle classes based on a key/value object
 * 
 * @param {HTMLElement} component
 * @param {HTMLElement} node
 * @param {Record<string, boolean>} obj
 */
export const classMap = (component, node, obj) => {
  Object.entries(obj).forEach(([k, v]) => {
    node.classList.toggle(k, v)
  })
}

/**
 * Set inline styles based on a key/value object
 * 
 * @param {HTMLElement} component
 * @param {HTMLElement} node
 * @param {Record<string, boolean>} obj
 */
export const styleMap = (component, node, obj) => {
  Object.assign(node.style, obj)
}

/**
 * Set an attribute value for the node
 * 
 * @param {HTMLElement} component
 * @param {HTMLElement} node
 * @param {string} name
 * @param {string} value
 */
export const attribute = (component, node, name, value) => {
  if (value == null) {
    node.removeAttribute(name)
  } else if (!name.startsWith("aria-") && !value) {
    node.removeAttribute(name)
  } else {
    node.setAttribute(name, value)
  }
}
