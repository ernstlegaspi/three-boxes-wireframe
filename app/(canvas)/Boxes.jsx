export default function Boxes() {
	const Box = ({ pos, rotation, scale }) => {
		return <mesh castShadow receiveShadow scale={scale} position={pos} rotation={rotation}>
			<boxGeometry />
			<meshStandardMaterial />
		</mesh>
	}
	
	return <group position={[0.5, -.2, 0]}>
		<Box pos={[-1, 0, 0]} />
		<Box pos={[0.2, 0, -.4]} rotation={[0, 10, 0]} />
		<Box pos={[-.5, 1, 0]} rotation={[0, 20, 0]} />
		<Box pos={[1, -.35, 0]} scale={[.3, .3, .3]} />
		<Box pos={[.5, -.35, .3]} scale={[.3, .3, .3]} rotation={[0, 15, 0]} />
	</group>

}
