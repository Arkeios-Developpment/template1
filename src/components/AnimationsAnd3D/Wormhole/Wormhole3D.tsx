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

function FloatingElements({target}: {target: React.RefObject<HTMLElement>}) {
    const { scrollYProgress } = useScroll({ target: target, offset: ["start 0.6", "start 0.25"] } );
    const x1 = useTransform(scrollYProgress, [0, 1], [-500, 0]);
    const x2 = useTransform(scrollYProgress, [0, 1], [500, 0]);

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    marginBottom: "auto",
                    left: "2%",
                    marginRight: "auto",
                }}
            >
                <motion.div
                    style={{
                        width: "500px",
                        color: "white",
                        fontSize: "100px",
                        position: "relative",
                        x: x1
                    }}
                >
                    <span>Voyagez dans l&apos;univers</span>
                </motion.div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    marginBottom: "auto",
                    right: "2%",
                    marginLeft: "auto",
                }}
            >
                <motion.div
                    style={{
                        width: "420px",
                        color: "white",
                        fontSize: "100px",
                        position: "relative",
                        x: x2
                    }}
                >
                    <span>Grace a notre expertise</span>
                </motion.div>
            </div>
        </>
    );
}

export function Wormhole3D({target}: {target: React.RefObject<HTMLElement>}) {
    const { scrollYProgress } = useScroll({ target: target, offset: ["end 0.1", "end start"] } );
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div
            style={{
                height: "200vh",
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
                <div
                    style={{
                        position: "absolute",
                        width: "100vw",
                        height: "100vh",
                    }}>
                    <FloatingElements target={target} />
                </div>
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
