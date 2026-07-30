"use client"

import { useGLTF } from "@react-three/drei"

export default function HoodieModel() {
  const { scene } = useGLTF("/models/hoodie.glb")

  return <primitive object={scene} scale={2} />
}
