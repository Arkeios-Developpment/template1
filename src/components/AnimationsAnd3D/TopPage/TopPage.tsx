import React from "react";
import { motion } from "framer-motion-3d";
import {motion as motionF, MotionConfig, useScroll, useTransform} from "framer-motion";
import {Canvas,  useFrame, useThree} from "@react-three/fiber";
import {Vector3} from "three";

const transition = {
    type: "spring",
    duration: 1.5,
    bounce: 0.2
};

function Rig() {
    const { camera, pointer } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(pointer.x, pointer.y, camera.position.z), 0.05);
        // camera.lookAt(0, 0, 0);
    });
}

export function Lights() {
    return (
        <>
            <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={50} castShadow={true} />
            <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={200} castShadow={true} />
            <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={125} castShadow={true} />
            <spotLight color="#f2056f" position={[15, 10, -2]} intensity={500} castShadow={true} />
            <spotLight color="#f2056f" position={[15, 10, 5]} intensity={250} castShadow={true} />
            <spotLight color="#b107db" position={[5, -10, 5]} intensity={200} castShadow={true} />
        </>
    );
}

function Material() {
    return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

function Box() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-1.5, 1.5, 0]}
            variants={{
                rest: {
                    x: -1.5,
                    y: 2,
                    z: 0,
                    rotateX: 0.2,
                    rotateY: 0.2
                }
            }}
        >
            <boxGeometry args={[1, 1, 1]} />
            <Material />
        </motion.mesh>
    );
}

function Cylinder() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-1, -0.5, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: -1,
                    y: -1,
                    z: 0,
                    rotateY: -0.5
                }
            }}
        >
            <cylinderGeometry args={[0.5, 0.5, 1, 20]} />
            <Material />
        </motion.mesh>
    );
}

function Tetrahedron() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-3.5, 1, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: -4.2,
                    y: 1,
                    z: 0,
                    rotateY: -0.5
                }
            }}
        >
            <tetrahedronGeometry args={[0.5, 0]} />
            <Material />
        </motion.mesh>
    );
}

function Octahedron() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[2.5, -1.5, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: 3.5,
                    y: 1.5,
                    z: 1,
                    rotateY: -0.5
                }
            }}
        >
            <octahedronGeometry args={[0.5, 0]} />
            <Material />
        </motion.mesh>
    );
}

function TorusKnot() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-1.5, 0.5, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: -4,
                    y: -1.5,
                    z: -0.5,
                    rotateY: -0.5
                }
            }}
        >
            <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
            <Material />
        </motion.mesh>
    );
}

function Tetrahedron2() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[0.5, -0.5, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: 0.5,
                    y: 0.5,
                    z: 0,
                    rotateY: -0.5
                }
            }}
        >
            <tetrahedronGeometry args={[0.5, 0]} />
            <Material />
        </motion.mesh>
    );
}

function Octahedron2() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[1.5, -1.5, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: 1.5,
                    y: -1.5,
                    z: 0,
                    rotateY: -0.5
                }
            }}
        >
            <octahedronGeometry args={[0.5, 0]} />
            <Material />
        </motion.mesh>
    );
}

function TorusKnot2() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-1.5, -1, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: 1.5,
                    y: 2.5,
                    z: 0,
                    rotateY: -0.5
                }
            }}
        >
            <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
            <Material />
        </motion.mesh>
    );
}

function Sphere() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-0.5, -0.5, 0]}
            variants={{ rest: { z: 2 } }}
        >
            <sphereGeometry args={[0.4]} />
            <Material />
        </motion.mesh>
    );
}

function Cone() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[-0.8, 0.4, 0]}
            rotation={[-0.5, 0, -0.3]}
            variants={{
                rest: {
                    z: 1.1,
                    x: -1.5,
                    rotateX: -0.2,
                    rotateZ: 0.4
                }
            }}
        >
            <coneGeometry args={[0.3, 0.6, 20]} />
            <Material />
        </motion.mesh>
    );
}

function Torus() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[0.1, 0.4, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    y: 0.5,
                    z: 2,
                    rotateY: -0.2
                }
            }}
        >
            <torusGeometry args={[0.2, 0.1, 10, 50]} />
            <Material />
        </motion.mesh>
    );
}

function Icosahedron() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[1.1, 0, 0]}
            rotation-z={0.5}
            variants={{
                rest: {
                    x: 1.8,
                    z: 0.6,
                    y: 0.6,
                    rotateZ: -0.5
                }
            }}
        >
            <icosahedronGeometry args={[0.7, 0]} />
            <Material />
        </motion.mesh>
    );
}

function Dodecahedron() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[2.4, -1.8, 0]}
            rotation={[-0.5, 0.5, 0]}
            variants={{
                rest: {
                    x: 4.2,
                    z: -0.6,
                    y: -1.6,
                    rotateY: -0.5
                }
            }}
        >
            <dodecahedronGeometry args={[0.7, 0]} />
            <Material />
        </motion.mesh>
    );
}

function Plane() {
    return (
        <motion.mesh
            receiveShadow={true}
            castShadow={true}
            position={[0, 0, -5]}
        >
            <planeGeometry args={[100, 100]} />
            <meshPhongMaterial color="#ffffff" />
        </motion.mesh>
    );
}

export function Shapes() {
    return (
        <Canvas shadows={"soft"} resize={{ scroll: false, offsetSize: true }} camera={{ position: [0, 0, 3.5] }}>
            <Rig />
            <MotionConfig transition={transition}>
                <motion.group
                    position={[0, 0, 0]}
                >
                    <Lights />
                </motion.group>
                <motion.group
                    initial={"hidden"}
                    animate={"rest"}
                    dispose={null}
                    variants={{
                        rest: { z: 0 }
                    }}
                >
                    <Plane />
                    <Sphere />
                    <Cone />
                    <Torus />
                    <Icosahedron />
                    <Dodecahedron />
                    <Box />
                    <Cylinder />
                    <Tetrahedron />
                    <Octahedron />
                    <TorusKnot />
                    <Tetrahedron2 />
                    <Octahedron2 />
                    <TorusKnot2 />
                </motion.group>
            </MotionConfig>
        </Canvas>
    );
}

export function TopPage()
{
    const target = React.useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["start start", "0.1 start"] } );
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div
            ref={target}
            style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "110%",
                }}
            >
                <MotionConfig transition={transition}>
                    <Shapes />
                </MotionConfig>
            </div>
            <div
                style={{
                    width: "70%",
                    height: "100%",
                    position: "absolute",
                    pointerEvents: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span style={{
                    fontFamily: "Formula Condensed Light, sans-serif",
                    fontWeight: "700",
                    fontSize: "10em",
                    opacity: 0.9,
                    textAlign: "center",
                }}>
                    ANIMATION
                    <br/>
                    &
                    <br/>
                    3D
                </span>
            </div>
            <motionF.div
                style={{
                    width: "100%",
                    height: "110%",
                    position: "absolute",
                    background: "linear-gradient(to top, #000 0%, transparent 50%)",
                    opacity: opacity,
                    pointerEvents: "none"
                }}
            />
        </div>
    );
}
