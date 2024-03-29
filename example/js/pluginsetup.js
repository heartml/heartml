//@ts-check
import Heartml from "../../src/heartml.js"

Heartml.plugins.dashed = {
  connected(element) {
    const { dashed } = element.constructor
    setTimeout(() => {
      Object.assign(element.style, {
        display: "block",
        padding: "1.25rem",
        border: `8px dashed ${dashed}`
      })
    }, 700)
  }
}

Heartml.plugins.poll = {
  connected(element) {
    element._pollTimer = setInterval(
      element.constructor.poll.run.bind(element),
      element.constructor.poll.interval
    )
  },
  cleanup(element) {
    clearInterval(element._pollTimer)
  }
}
