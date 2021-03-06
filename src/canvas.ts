import * as THREE from "three"
import { State } from "./state/reducer"
import * as Shapes from "./shapes"
import { div } from "./elements"
import { anyVisible } from "./state/reducer"

interface Canvas {
  domElement: Element
  width: number
  height: number
}

interface ResizeProps {
  canvas: Canvas
  renderer: THREE.WebGLRenderer
}

const resize = ({ canvas, renderer }: ResizeProps) => {
  canvas.width = canvas.domElement.clientWidth
  canvas.height = canvas.domElement.clientHeight
  renderer.setSize(canvas.width, canvas.height)
}

interface Shapes {
  cone: THREE.Mesh
  cube: THREE.Mesh
  cylinder: THREE.Mesh
  dodecahedron: THREE.Mesh
  icosahedron: THREE.Mesh
  octahedron: THREE.Mesh
}

interface AnimateProps {
  camera: THREE.Camera
  canvas: Canvas
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  shapes: Shapes
}

const animate = (props: AnimateProps) => {
  const { camera, canvas, renderer, scene, shapes } = props

  requestAnimationFrame(() => {
    animate(props)
  })

  if (
    canvas.domElement.clientWidth != canvas.width ||
    canvas.domElement.clientHeight != canvas.height
  ) {
    resize({ canvas, renderer })
  }

  Shapes.Cone.animate(shapes.cone)
  Shapes.Cube.animate(shapes.cube)
  Shapes.Cylinder.animate(shapes.cylinder)
  Shapes.Dodecahedron.animate(shapes.dodecahedron)
  Shapes.Icosahedron.animate(shapes.icosahedron)
  Shapes.Octahedron.animate(shapes.octahedron)

  renderer.render(scene, camera)
}

const Canvas = (state: State) => {
  // Shapes
  const shapes: Shapes = {
    cone: Shapes.Cone.from(
      new THREE.MeshLambertMaterial({ color: state.cone.color })
    ),
    cube: Shapes.Cube.from(
      new THREE.MeshLambertMaterial({ color: state.cube.color })
    ),
    cylinder: Shapes.Cylinder.from(
      new THREE.MeshLambertMaterial({ color: state.cylinder.color })
    ),
    dodecahedron: Shapes.Dodecahedron.from(
      new THREE.MeshLambertMaterial({ color: state.dodecahedron.color })
    ),
    icosahedron: Shapes.Icosahedron.from(
      new THREE.MeshLambertMaterial({ color: state.icosahedron.color })
    ),
    octahedron: Shapes.Octahedron.from(
      new THREE.MeshLambertMaterial({ color: state.octahedron.color })
    )
  }

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })

  const canvas = {
    domElement: div({ className: "canvas" })([renderer.domElement]),
    width: 0,
    height: 0
  }

  renderer.setClearColor(0x333333)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.width, canvas.height)

  // Camera
  const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.position.set(0, 0, 10)

  // Scene
  const scene = new THREE.Scene()

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const spotlight = new THREE.SpotLight(0xffffff, 4.0, 3000)
  spotlight.position.y = 100
  spotlight.target = shapes.cube
  scene.add(spotlight)

  shapes.cone.position.set(-10, 3, 0)
  shapes.cube.position.set(0, 3, 0)
  shapes.cylinder.position.set(10, 3, 0)
  shapes.dodecahedron.position.set(-10, -3, 0)
  shapes.icosahedron.position.set(0, -3, 0)
  shapes.octahedron.position.set(10, -3, 0)

  state.cone.isVisible && scene.add(shapes.cone)
  state.cube.isVisible && scene.add(shapes.cube)
  state.cylinder.isVisible && scene.add(shapes.cylinder)
  state.dodecahedron.isVisible && scene.add(shapes.dodecahedron)
  state.icosahedron.isVisible && scene.add(shapes.icosahedron)
  state.octahedron.isVisible && scene.add(shapes.octahedron)

  if (anyVisible(state)) {
    animate({ camera, canvas, renderer, scene, shapes })
  }

  return canvas.domElement
}

export default Canvas
