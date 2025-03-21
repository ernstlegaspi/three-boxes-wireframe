"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Boxes from "./Boxes"

export default function CanvasPage() {
	return <>
		<Canvas shadows>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} />

			<ambientLight  intensity={1} />

			<Boxes />

			<OrbitControls enableDamping dampingFactor={.03} />
		</Canvas>
	</>
}
