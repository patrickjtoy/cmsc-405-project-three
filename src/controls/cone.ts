import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const ConeControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "cone_controls"] })([
    heading({ size: 3 })([text("Cone")]),
    label({
      classList: ["cone_control", "cone_visibility_label"]
    })([
      checkbox({
        checked: state.cone.isVisible,
        className: "cone_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleConeVisibility())
      }),
      text("Show cone")
    ]),
    div({ classList: ["cone_control", "cone_color"] })([
      label({ className: "cone_color_label", for: "cone_color_input" })([
        text("Cone color (hex)")
      ]),
      input({
        className: "cone_color_input",
        id: "cone_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(ActionCreators.setConeColor(Number(`0x${e.target.value}`)))
          }
        },
        value: padColor(state.cone.color.toString(16))
      })
    ])
  ])
}

export default ConeControls
