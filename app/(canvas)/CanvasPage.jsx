"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Boxes from "./Boxes"
import Lights from "./Light"
import { useEffect, useState } from "react"

export default function CanvasPage() {
	const [innerWidth, setInnerWidth] = useState(0)

	useEffect(() => {
		if(!window) return

		setInnerWidth(window.innerWidth)
	}, [])

	if(innerWidth < 1024) return <div className="flex items-center justify-center px-4 text-center text-white h-[100vh] w">
		<p>This app is best viewed on a larger screen.</p>
		<p>Please use a desktop for the best experience.</p>
	</div>
	
	return <>
		<Canvas shadows>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} />

			<Boxes />
			<Lights />

			<OrbitControls enableRotate={false} enableDamping dampingFactor={.03} />
		</Canvas>
	</>
}
