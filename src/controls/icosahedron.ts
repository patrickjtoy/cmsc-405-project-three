import { Dispatch } from "redux"
import { State } from "../state/reducer"
import { checkbox, div, heading, input, label, text } from "../elements"
import * as ActionCreators from "../state/actions"

const padColor = (hex: string): string => {
  if (hex.length == 6) return hex

  return padColor(`0${hex}`)
}

const IcosahedronControls = (state: State) => (dispatch: Dispatch) => {
  return div({ classList: ["control", "icosahedron_controls"] })([
    heading({ size: 3 })([text("Icosahedron")]),
    label({
      classList: ["icosahedron_control", "icosahedron_visibility_label"]
    })([
      checkbox({
        checked: state.icosahedron.isVisible,
        className: "icosahedron_visibility_checkbox",
        onChange: () => dispatch(ActionCreators.toggleIcosahedronVisibility())
      }),
      text("Show icosahedron")
    ]),
    div({ classList: ["icosahedron_control", "icosahedron_color"] })([
      label({
        className: "icosahedron_color_label",
        for: "icosahedron_color_input"
      })([text("Icosahedron color (hex)")]),
      input({
        className: "icosahedron_color_input",
        id: "icosahedron_color_input",
        onChange: (e: Event) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch(
              ActionCreators.setIcosahedronColor(Number(`0x${e.target.value}`))
            )
          }
        },
        value: padColor(state.icosahedron.color.toString(16))
      })
    ])
  ])
}

export default IcosahedronControls
