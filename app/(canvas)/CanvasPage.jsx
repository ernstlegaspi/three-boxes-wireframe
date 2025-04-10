"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react"

import Lights from "./Light"
import Boxes from "./Boxes"
import gsap from "gsap"

export default function CanvasPage() {
	const [innerWidth, setInnerWidth] = useState(0)

	useEffect(() => {
		if(!window) return

		setInnerWidth(window.innerWidth)

		const interval = setInterval(() => {
			gsap.to(document.getElementById("text"), {
				opacity: "0",
				duration: .3
			})
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	if(innerWidth < 1024) return <div className="flex items-center justify-center px-4 text-center text-white h-[100vh] w">
		<p>This app is best viewed on a larger screen.</p>
		<p>Please use a desktop for the best experience.</p>
	</div>
	
	return <div className="relative w-full h-full">
		<div id="text" className="absolute text-white bottom-5 left-1/2 -translate-x-1/2 text-[25px] font-medium">Try moving your mouse</div>

		<Canvas shadows>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} />

			<Boxes />
			<Lights />

			<OrbitControls enableRotate={false} enableDamping dampingFactor={.03} />
		</Canvas>
	</div>
}
