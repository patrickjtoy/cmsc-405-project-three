import * as Actions from "./actions"

export interface State {
  cube: {
    color: number
    isVisible: boolean
  }
}

type Payload = number

interface Action {
  type: string
  payload: Payload
}

const initialState: State = {
  cube: {
    color: 0xffffff,
    isVisible: false
  }
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Actions.SET_CUBE_COLOR:
      return {
        ...state,
        cube: { ...state.cube, color: action.payload }
      }

    case Actions.TOGGLE_CUBE_VISIBILITY:
      return {
        ...state,
        cube: { ...state.cube, isVisible: !state.cube.isVisible }
      }

    default:
      return state
  }
}
