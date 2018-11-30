import * as THREE from "three"

export const from = (material: THREE.Material) => {
  const geometry = new THREE.OctahedronBufferGeometry(1, 0)
  return new THREE.Mesh(geometry, material)
}

export const animate = (octahedron: THREE.Mesh) => {
  octahedron.rotation.x += 0.01
  octahedron.rotation.y += 0.01
}
