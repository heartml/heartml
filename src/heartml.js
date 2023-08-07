//@ts-check
import { HeartElement, HeartLifecycle, Heartml } from "./core.js"
import { css, declarativeEffects, declarativeEvents, html, properties, queries, template } from "./core-plugins.js"

Heartml.plugins = {
  declarativeEffects,
  declarativeEvents,
  properties,
  queries,
  styles: {},
  template
}

export default Heartml
export {
  css,
  html,
  HeartElement,
  HeartLifecycle
}
