import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"

export default function Lights() {
	const [pointer, setPointer] = useState({ x: 0, y: 0 })
	const ref = useRef()
	
	useEffect(() => {
		const pointerMove = e => {
			setPointer({
				x: (e.clientX / window.innerWidth) * 2 - 1,
				y: -(e.clientY / window.innerHeight) * 2 + 1
			})
		}

		window.addEventListener("pointermove", pointerMove)

		return () => {
			window.removeEventListener("pointermove", pointerMove)
		}
	}, [])
	
	
	useFrame(() => {
		ref.current.position.set(pointer.x * 5, pointer.y * 5, 1)
	})

	return <pointLight ref={ref} distance={10} />
}