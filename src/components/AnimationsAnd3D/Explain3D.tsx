import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import React, {useRef} from "react";
import {Euler, Mesh, Vector3} from "three";
import {motion, useScroll, useTransform} from "framer-motion";


function ELement() {
    const fileUrl = "/voxel_web_development/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

const Scene = () => {
    return (
        <group rotation={new Euler(0, - Math.PI / 2, 0)} position={[-1.5, -1.5, 0]}>
            <ELement />
        </group>
    );
};

function Rig() {
    const { camera, pointer } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(pointer.x, pointer.y, camera.position.z), 0.05);
        camera.lookAt(0, 0, 0);
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
                    top: "10%",
                    marginBottom: "auto",
                    left: "5%",
                    marginRight: "auto",
                }}
            >
                <motion.div
                    style={{
                        width: "500px",
                        color: "black",
                        fontSize: "100px",
                        position: "relative",
                        x: x1
                    }}
                >
                    <span>Imergez vous dans votre site</span>
                </motion.div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "45%",
                    marginBottom: "auto",
                    right: "10%",
                    marginLeft: "auto",
                }}
            >
                <motion.div
                    style={{
                        width: "600px",
                        color: "black",
                        fontSize: "100px",
                        position: "relative",
                        x: x2
                    }}
                >
                    <span>A l'aide d'element 3D époustoufflants</span>
                </motion.div>
            </div>
        </>
    );
}
export function Explain3D() {
    const target = React.useRef<HTMLDivElement>(null!);

    return (
        <div style={{height: "100%", width: "100%"}} ref={target}>
            <div
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    zIndex: 1,
                    pointerEvents: "none",
                }}>
                <FloatingElements target={target} />
            </div>
            <Canvas  style={{width: "100%", height: "100%"}} camera={{position: [0, 0, 6]}}>
                <spotLight color="white" position={[-10, -10, -10]} intensity={400}/>
                <spotLight color="white" position={[-10, 0, 15]} intensity={800}/>
                <spotLight color="pink" position={[-5, 20, 2]} intensity={1000}/>
                <spotLight color="pink" position={[15, 10, -2]} intensity={1000}/>
                <spotLight color="blue" position={[15, 10, 5]} intensity={500}/>
                <spotLight color="blue" position={[5, -10, 5]} intensity={800}/>

                <Scene/>

                <Rig/>
            </Canvas>
        </div>
    );
}
