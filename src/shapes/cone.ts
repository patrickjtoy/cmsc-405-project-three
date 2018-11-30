import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.ConeBufferGeometry(0.5, 1.5, 32)
  return new THREE.Mesh(geometry, material)
}

export const animate = (cone: THREE.Mesh) => {
  cone.rotation.x += 0.01
  cone.rotation.y += 0.01
}
