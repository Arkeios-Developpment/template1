import React, { useRef } from "react";
import {Mesh, MeshStandardMaterial} from "three";
import { Text3D as Text3DBase } from "@react-three/drei";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import roboto from "three/examples/fonts/helvetiker_regular.typeface.json";

interface Text3DParams {
    text: string;
}

export function Text3D({ text } : Text3DParams) {
    const mesh = useRef<Mesh>(null!);
    const font = new FontLoader().parse(roboto);

    return (
        <mesh ref={mesh}>
            <Text3DBase
                font={font.data}
                scale={[5, 5, 5]}
                castShadow={true}
                receiveShadow={true}
                material={new MeshStandardMaterial({ color: "black" })}
            >
                {text}
            </Text3DBase>
        </mesh>
    );
}
