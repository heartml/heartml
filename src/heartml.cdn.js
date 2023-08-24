import Heartml, * as HeartmlExports from "./heartml.js"
import DeclarativeHeartElement from "./DeclarativeHeartElement.js"
import HeartModule from "./utils/HeartModule.js"
import { signal, computed, effect, batch, Signal } from "@preact/signals-core"

globalThis.Heartml = Heartml

Object.assign(globalThis, {
  HeartElement: HeartmlExports.HeartElement,
  HeartLifecycle: HeartmlExports.HeartLifecycle,
  DeclarativeHeartElement,
  HeartModule
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
