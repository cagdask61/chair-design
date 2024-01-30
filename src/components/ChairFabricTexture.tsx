import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import fabrics from '../data/fabrics';

export default function ChairFabricTexture({ fabricKey }: { fabricKey: string }) {

    const texture = useTexture(fabrics.find(t => t.key === fabricKey)!.path);

    texture.map.repeat.set(1, 1);
    texture.displacementMap.repeat.set(1, 1);
    texture.normalMap.repeat.set(1, 1);
    texture.roughnessMap.repeat.set(1, 1);
    texture.aoMap.repeat.set(1, 1);

    texture.map.wrapS = texture.map.wrapT = THREE.RepeatWrapping;
    texture.displacementMap.wrapS = texture.displacementMap.wrapT = THREE.RepeatWrapping;
    texture.normalMap.wrapS = texture.normalMap.wrapT = THREE.RepeatWrapping;
    texture.roughnessMap.wrapS = texture.roughnessMap.wrapT = THREE.RepeatWrapping;
    texture.aoMap.wrapS = texture.aoMap.wrapT = THREE.RepeatWrapping;

    return (
        <meshStandardMaterial {...texture} />
    )
}