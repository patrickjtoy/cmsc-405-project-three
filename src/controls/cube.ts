import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const CubeControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "cube_controls"] })([
    heading({ size: 3 })([text("Cube")]),
    label({
      classList: ["cube_control", "cube_visibility_label"]
    })([
      checkbox({
        checked: state.cube.isVisible,
        className: "cube_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleCubeVisibility())
      }),
      text("Show cube")
    ]),
    div({ classList: ["cube_control", "cube_color"] })([
      label({ className: "cube_color_label", for: "cube_color_input" })([
        text("Cube color (hex)")
      ]),
      input({
        className: "cube_color_input",
        id: "cube_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(ActionCreators.setCubeColor(Number(`0x${e.target.value}`)))
          }
        },
        value: padColor(state.cube.color.toString(16))
      })
    ])
  ])
}

export default CubeControls
