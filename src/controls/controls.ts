import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { div } from "../elements"
import ConeControls from "./cone"
import CubeControls from "./cube"
import CylinderControls from "./cylinder"
import DodecahedronControls from "./dodecahedron"
import IcosahedronControls from "./icosahedron"
import OctahedronControls from "./octahedron"

const Controls = (state: State) => (dispatch: Dispatch) => {
  return div({ className: "controls" })([
    ConeControls(state)(dispatch),
    CubeControls(state)(dispatch),
    CylinderControls(state)(dispatch),
    DodecahedronControls(state)(dispatch),
    IcosahedronControls(state)(dispatch),
    OctahedronControls(state)(dispatch)
  ])
}

export default Controls
