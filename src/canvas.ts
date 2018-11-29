import * as THREE from "three"
import { div } from "./elements"

const Canvas = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer()
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const cube = new THREE.Mesh(geometry, material)
  const canvas = {
    domElement: div({ className: "canvas" })([renderer.domElement]),
    width: 640,
    height: 480
  }

  renderer.setClearColor(0xffffff)
  renderer.setSize(canvas.width, canvas.height)

  scene.add(cube)
  camera.position.z = 5

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

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()

  return canvas.domElement
}

export default Canvas
