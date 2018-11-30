import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.IcosahedronBufferGeometry(1, 0)
  return new THREE.Mesh(geometry, material)
}

export const animate = (icosahedron: THREE.Mesh) => {
  icosahedron.rotation.x += 0.01
  icosahedron.rotation.y += 0.01
}
