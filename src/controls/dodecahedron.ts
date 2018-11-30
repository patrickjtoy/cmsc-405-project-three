import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const DodecahedronControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "dodecahedron_controls"] })([
    heading({ size: 3 })([text("Dodecahedron")]),
    label({
      classList: ["dodecahedron_control", "dodecahedron_visibility_label"]
    })([
      checkbox({
        checked: state.dodecahedron.isVisible,
        className: "dodecahedron_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleDodecahedronVisibility())
      }),
      text("Show dodecahedron")
    ]),
    div({ classList: ["dodecahedron_control", "dodecahedron_color"] })([
      label({
        className: "dodecahedron_color_label",
        for: "dodecahedron_color_input"
      })([text("Dodecahedron color (hex)")]),
      input({
        className: "dodecahedron_color_input",
        id: "dodecahedron_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(
              ActionCreators.setDodecahedronColor(Number(`0x${e.target.value}`))
            )
          }
        },
        value: padColor(state.dodecahedron.color.toString(16))
      })
    ])
  ])
}

export default DodecahedronControls
