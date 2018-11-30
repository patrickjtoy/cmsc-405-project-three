import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.DodecahedronBufferGeometry(1, 0)
  return new THREE.Mesh(geometry, material)
}

export const animate = (dodecahedron: THREE.Mesh) => {
  dodecahedron.rotation.x += 0.01
  dodecahedron.rotation.y += 0.01
}
