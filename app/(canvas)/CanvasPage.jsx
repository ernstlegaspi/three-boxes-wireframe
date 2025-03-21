"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Boxes from "./Boxes"
import Lights from "./Light"

export default function CanvasPage() {
	return <>
		<Canvas shadows>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} />

			<Boxes />
			<Lights />

			<OrbitControls enableRotate={false} enableDamping dampingFactor={.03} />
		</Canvas>
	</>
}
