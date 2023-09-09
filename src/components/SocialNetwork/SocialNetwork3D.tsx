import {Canvas} from "@react-three/fiber";
import React, {useRef} from "react";
import {motion} from "framer-motion-3d";
import {Mesh} from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Link from "next/link";

function SocialNetwork({ baseScale, scenePath, baseRotation } : {baseScale: number, scenePath: string, baseRotation: number}) {
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, scenePath);

    return (
        <motion.group
            receiveShadow={true}
            castShadow={true}
            initial={{ scale: 0, rotateY: 2 * Math.PI + baseRotation  }}
            animate={{ scale: baseScale, rotateY: baseRotation}}
            whileHover={{ scale: baseScale * 1.2}}
            whileTap={{ scale: baseScale * 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <mesh ref={mesh}>
                <primitive object={gltf.scene} />
            </mesh>
        </motion.group>
    );
}

export function SocialNetwork3D({baseScale, scenePath, url, baseRotation = 0 } : {baseScale: number, scenePath: string, url: string, baseRotation?: number}) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <Canvas style={{width: "64px", height: "64px"}}>
                <ambientLight intensity={2.5} />
                <SocialNetwork baseScale={baseScale} scenePath={scenePath} baseRotation={baseRotation} />
            </Canvas>
        </Link>
    );
}