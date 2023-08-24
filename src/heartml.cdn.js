import Heartml, * as HeartmlExports from "./heartml.js"
import DeclarativeHeartElement from "./DeclarativeHeartElement.js"
import HeartModules from "./utils/HeartModules.js"
import { signal, computed, effect, batch, Signal } from "@preact/signals-core"

globalThis.Heartml = Heartml

Object.assign(globalThis, {
  HeartElement: HeartmlExports.HeartElement,
  HeartLifecycle: HeartmlExports.HeartLifecycle,
  DeclarativeHeartElement,
  HeartModules
})

Object.assign(globalThis.Heartml, {
  css: HeartmlExports.css,
  html: HeartmlExports.html,
  signal,
  computed,
  effect,
  batch,
  Signal
})
