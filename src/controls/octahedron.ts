import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const OctahedronControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "octahedron_controls"] })([
    heading({ size: 3 })([text("Octahedron")]),
    label({
      classList: ["octahedron_control", "octahedron_visibility_label"]
    })([
      checkbox({
        checked: state.octahedron.isVisible,
        className: "octahedron_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleOctahedronVisibility())
      }),
      text("Show octahedron")
    ]),
    div({ classList: ["octahedron_control", "octahedron_color"] })([
      label({
        className: "octahedron_color_label",
        for: "octahedron_color_input"
      })([text("Octahedron color (hex)")]),
      input({
        className: "octahedron_color_input",
        id: "octahedron_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(
              ActionCreators.setOctahedronColor(Number(`0x${e.target.value}`))
            )
          }
        },
        value: padColor(state.octahedron.color.toString(16))
      })
    ])
  ])
}

export default OctahedronControls
