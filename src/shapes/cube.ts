import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
  return new THREE.Mesh(geometry, material)
}

export const animate = (cube: THREE.Mesh) => {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
}
