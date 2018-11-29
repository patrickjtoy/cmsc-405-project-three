import { checkbox, div, label, text } from "./elements"

const Controls = () => {
  return div({ className: "controls" })([
    label({
      className: "cube_display_label"
    })([
      checkbox({
        className: "cube_display_checkbox",
        id: "cube_display_checkbox",
        name: "cube_display_checkbox"
      }),
      text("Show cube")
    ])
  ])
}

export default Controls
