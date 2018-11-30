import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.CylinderBufferGeometry(1, 1, 1, 32)
  return new THREE.Mesh(geometry, material)
}

export const animate = (cylinder: THREE.Mesh) => {
  cylinder.rotation.x += 0.01
  cylinder.rotation.y += 0.01
}
