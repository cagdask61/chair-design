import { Canvas } from "@react-three/fiber";
import { MeshReflectorMaterial, OrbitControls, Stage } from "@react-three/drei";

import Configuration from "./components/Configuration";
import Navigation from "./components/Navigation";
import Chair from "./components/Chair";

export default function App() {
  return (
    <div className='w-full h-full'>
      <Navigation />
      <Configuration />
      <Canvas shadows>
        <color attach={'background'} args={['#303030']} />
        <fog attach={'fog'} args={['#202020', 10, 20]} />
        <OrbitControls />
        <Stage adjustCamera={1.5} intensity={20} castShadow={false} shadows={'contact'} environment={"city"} >
          <Chair />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
          <planeGeometry args={[30, 30]} />
          <MeshReflectorMaterial
            mirror={0}
            blur={[300, 100]}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </Canvas>
    </div>
  )
}