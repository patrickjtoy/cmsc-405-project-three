import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const CylinderControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "cylinder_controls"] })([
    heading({ size: 3 })([text("Cylinder")]),
    label({
      classList: ["cylinder_control", "cylinder_visibility_label"]
    })([
      checkbox({
        checked: state.cylinder.isVisible,
        className: "cylinder_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleCylinderVisibility())
      }),
      text("Show cylinder")
    ]),
    div({ classList: ["cylinder_control", "cylinder_color"] })([
      label({ className: "cylinder_color_label", for: "cylinder_color_input" })(
        [text("Cylinder color (hex)")]
      ),
      input({
        className: "cylinder_color_input",
        id: "cylinder_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(
              ActionCreators.setCylinderColor(Number(`0x${e.target.value}`))
            )
          }
        },
        value: padColor(state.cylinder.color.toString(16))
      })
    ])
  ])
}

export default CylinderControls
