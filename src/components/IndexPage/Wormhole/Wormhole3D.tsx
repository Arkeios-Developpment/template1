import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import React, {useRef} from "react";
import {Mesh} from "three";
import {motion, useScroll, useTransform} from "framer-motion";


function Wormhole() {
    const fileUrl = "/wormhole_concept/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.z -= 0.01;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

const Scene = () => {
    return (
        <group>
            <Wormhole />
        </group>
    );
};

function Rig({target}: {target: React.RefObject<HTMLElement>}) {
    const { camera} = useThree();
    const { scrollYProgress } = useScroll({ target: target, offset: ["start start", "end start"] } );
    const cameraZ = useTransform(scrollYProgress, [0, 1], [3.25, -6]);

    const startScroll = useScroll({ target: target, offset: ["start end", "start start"] } ).scrollYProgress;
    const cameraY = useTransform(startScroll, [0, 1], [-9, 0]);
    const rotationX = useTransform(startScroll, [0, 1], [Math.PI, 0]);


    return useFrame(() => {
        camera.position.z = cameraZ.get();
        camera.position.y = cameraY.get();
        camera.rotation.x = rotationX.get();
    });
}

export function Wormhole3D({target}: {target: React.RefObject<HTMLElement>}) {
    const { scrollYProgress } = useScroll({ target: target, offset: ["end center", "end start"] } );
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div
            style={{
                height: "200%",
                width: "100%",
                overflow: "hidden",
                clipPath: "inset(0 0 0 0)",
            }}>
            <motion.div
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    opacity: opacity,
                    zIndex: 1
                }}
            >
                <Canvas camera={{position: [0, 0, 3.25]}}>
                    <spotLight color="white" position={[-10, -10, -10]} intensity={400}/>
                    <spotLight color="white" position={[-10, 0, 15]} intensity={800}/>
                    <spotLight color="pink" position={[-5, 20, 2]} intensity={1000}/>
                    <spotLight color="pink" position={[15, 10, -2]} intensity={1000}/>
                    <spotLight color="blue" position={[15, 10, 5]} intensity={500}/>
                    <spotLight color="blue" position={[5, -10, 5]} intensity={800}/>

                    <Scene/>

                    <Rig target={target}/>
                </Canvas>
            </motion.div>
        </div>
    );
}
