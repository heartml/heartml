import Heartml, { HeartElement, HeartLifecycle } from "./heartml.js"
import DeclarativeHeartElement from "./utils/DeclarativeHeartElement.js"
import HeartModule from "./utils/HeartModule.js"

Object.assign(globalThis, {
  Heartml,
  HeartElement,
  HeartLifecycle,
  DeclarativeHeartElement,
  HeartModule
})
