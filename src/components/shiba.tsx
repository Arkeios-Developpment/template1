import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {Mesh} from "three";

export function Shiba() {
    const fileUrl = "/shiba/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    gltf.scene.traverse( function( child: any) {

        if ( child.isMesh ) {
            child.castShadow = true;
            child.receiveShadow = true;
        }

    } );

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 1]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}
