import * as THREE from "three"
import { State } from "./state/reducer"
import * as Cube from "./shapes/cube"
import { div } from "./elements"

const Canvas = (state: State) => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer()
  const canvas = {
    domElement: div({ className: "canvas" })([renderer.domElement]),
    width: 0,
    height: 0
  }
  const cube = Cube.from(
    new THREE.MeshPhongMaterial({ color: state.cube.color })
  )

  renderer.setClearColor(0x333333)
  renderer.setSize(canvas.width, canvas.height)

  const resize = () => {
    canvas.width = canvas.domElement.clientWidth
    canvas.height = canvas.domElement.clientHeight
    renderer.setSize(canvas.width, canvas.height)
  }

  const animate = () => {
    requestAnimationFrame(animate)

    if (
      canvas.domElement.clientWidth != canvas.width ||
      canvas.domElement.clientHeight != canvas.height
    ) {
      resize()
    }

    Cube.animate(cube)

    renderer.render(scene, camera)
  }

  const ambientLight = new THREE.AmbientLight(0x404040) // soft white light
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(0xff0000, 1, 100)
  pointLight.position.set(50, 50, 50)
  scene.add(pointLight)

  if (state.cube.isVisible) {
    scene.add(cube)
    camera.position.z = 5
    animate()
  }

  return canvas.domElement
}

export default Canvas
