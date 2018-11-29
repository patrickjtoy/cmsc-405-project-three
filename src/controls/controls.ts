import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, label, text } from "../elements"
import CubeControls from "./cube"

const Controls = (state: State) => (dispatch: Dispatch) => {
  return div({ className: "controls" })([CubeControls(state)(dispatch)])
}

export default Controls
