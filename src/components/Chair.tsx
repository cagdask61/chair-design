import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import ChairLeatherTexture from './ChairLeatherTexture';
import ChairFabricTexture from './ChairFabricTexture';
import useLeatherTextureStore from '../store/leather-texture.store';
import useFabricTextureStore from '../store/fabric-texture.store';

type GLTFResult = GLTF & {
  nodes: {
    chair_chair_0: THREE.Mesh
    chair_wood_0: THREE.Mesh
    cushion_cushion_0: THREE.Mesh
  }
  materials: {
    chair: THREE.MeshStandardMaterial
    wood: THREE.MeshStandardMaterial
    cushion: THREE.MeshStandardMaterial
  }
};

export default function Chair(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/chair.glb') as GLTFResult;

  const leatherTextureStore = useLeatherTextureStore();
  const fabricTextureStore = useFabricTextureStore();

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.009}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 31.066, 0]}>
            <mesh geometry={nodes.chair_chair_0.geometry}>
              <ChairLeatherTexture leatherKey={leatherTextureStore.key} />
            </mesh>
            <mesh geometry={nodes.chair_wood_0.geometry} >
              <meshStandardMaterial color={'#000'} />
            </mesh>
          </group>
          <mesh geometry={nodes.cushion_cushion_0.geometry} position={[0, -0.176, 3.056]}>
            <ChairFabricTexture fabricKey={fabricTextureStore.key} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./model/chair.glb')