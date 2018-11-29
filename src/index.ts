import Canvas from "./canvas"
import Controls from "./controls/controls"
import store from "./state/store"
import { appendChildren, removeChildren } from "./elements"
import { State } from "./state/reducer"

const init = (state: State) => {
  const App = document.getElementById("app")

  // Empty the node
  removeChildren(App)

  // Rebuild the DOM
  appendChildren([Canvas(state), Controls(state)(store.dispatch)])(App)
}

store.subscribe(() => {
  // Get the latest state
  const state = store.getState()

  init(state)
})

init(store.getState())
