import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

import leathers from '../data/leathers';

export default function ChairLeatherTexture({ leatherKey }: { leatherKey: string }) {

    const texture = useTexture(leathers.find(t => t.key === leatherKey)!.path);

    texture.map.repeat.set(2, 2);
    texture.displacementMap.repeat.set(2, 2);
    texture.normalMap.repeat.set(2, 2);
    texture.roughnessMap.repeat.set(2, 2);
    texture.aoMap.repeat.set(2, 2);

    texture.map.wrapS = texture.map.wrapT = THREE.RepeatWrapping;
    texture.displacementMap.wrapS = texture.displacementMap.wrapT = THREE.RepeatWrapping;
    texture.normalMap.wrapS = texture.normalMap.wrapT = THREE.RepeatWrapping;
    texture.roughnessMap.wrapS = texture.roughnessMap.wrapT = THREE.RepeatWrapping;
    texture.aoMap.wrapS = texture.aoMap.wrapT = THREE.RepeatWrapping;

    return (
        <meshStandardMaterial {...texture} />
    )
}