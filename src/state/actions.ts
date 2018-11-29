export const SET_CUBE_COLOR = "SET_CUBE_COLOR"
export const TOGGLE_CUBE_VISIBILITY = "TOGGLE_CUBE_VISIBILITY"

export const setCubeColor = (color: number) => ({
  type: SET_CUBE_COLOR,
  payload: color
})

export const toggleCubeVisibility = () => ({
  type: TOGGLE_CUBE_VISIBILITY
})
