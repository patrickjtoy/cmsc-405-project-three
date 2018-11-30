import * as Actions from "./actions"

interface Shape {
  color: number
  isVisible: boolean
}

export interface State {
  cone: Shape
  cube: Shape
  cylinder: Shape
  dodecahedron: Shape
  icosahedron: Shape
  octahedron: Shape
}

type Payload = number

interface Action {
  type: string
  payload: Payload
}

const initialShape = {
  color: 0xffffff,
  isVisible: false
}

const initialState: State = {
  cone: initialShape,
  cube: initialShape,
  cylinder: initialShape,
  dodecahedron: initialShape,
  icosahedron: initialShape,
  octahedron: initialShape
}

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    //Cone
    case Actions.SET_CONE_COLOR:
      return {
        ...state,
        cone: { ...state.cone, color: action.payload }
      }

    case Actions.TOGGLE_CONE_VISIBILITY:
      return {
        ...state,
        cone: { ...state.cone, isVisible: !state.cone.isVisible }
      }

    // Cube
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

    // Cylinder
    case Actions.SET_CYLINDER_COLOR:
      return {
        ...state,
        cylinder: { ...state.cylinder, color: action.payload }
      }

    case Actions.TOGGLE_CYLINDER_VISIBILITY:
      return {
        ...state,
        cylinder: { ...state.cylinder, isVisible: !state.cylinder.isVisible }
      }

    // Dodecahedron
    case Actions.SET_DODECAHEDRON_COLOR:
      return {
        ...state,
        dodecahedron: { ...state.dodecahedron, color: action.payload }
      }

    case Actions.TOGGLE_DODECAHEDRON_VISIBILITY:
      return {
        ...state,
        dodecahedron: {
          ...state.dodecahedron,
          isVisible: !state.dodecahedron.isVisible
        }
      }

    // Icosahedron
    case Actions.SET_ICOSAHEDRON_COLOR:
      return {
        ...state,
        icosahedron: { ...state.icosahedron, color: action.payload }
      }

    case Actions.TOGGLE_ICOSAHEDRON_VISIBILITY:
      return {
        ...state,
        icosahedron: {
          ...state.icosahedron,
          isVisible: !state.icosahedron.isVisible
        }
      }

    // Octahedron
    case Actions.SET_OCTAHEDRON_COLOR:
      return {
        ...state,
        octahedron: { ...state.octahedron, color: action.payload }
      }

    case Actions.TOGGLE_OCTAHEDRON_VISIBILITY:
      return {
        ...state,
        octahedron: {
          ...state.octahedron,
          isVisible: !state.octahedron.isVisible
        }
      }

    default:
      return state
  }
}

export const anyVisible = (state: State): boolean => {
  return (
    state.cone.isVisible ||
    state.cube.isVisible ||
    state.cylinder.isVisible ||
    state.dodecahedron.isVisible ||
    state.icosahedron.isVisible ||
    state.octahedron.isVisible
  )
}
