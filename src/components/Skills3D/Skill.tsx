import {useRef, useState, useEffect } from "react";
import {Euler, TextureLoader} from "three";
import {motion} from "framer-motion-3d";
import {GroupProps, MeshProps, useFrame} from "@react-three/fiber";
import {randFloat} from "three/src/math/MathUtils.js";
import {Text} from "@react-three/drei";
import {AnimatePresence} from "framer-motion";

export function Skill({ Path, description, position }: { Path: string, description: string, position: [number, number, number] }) {
    const group = useRef<GroupProps>(null!);
    const mesh = useRef<MeshProps>(null!);
    const Texture = new TextureLoader().load(Path);
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useFrame(({ mouse, viewport }) => {
        const x = (mouse.x * viewport.width) / 2.5;
        const y = (mouse.y * viewport.height) / 2.5;
        if (!isClicked)
        {
            group.current.lookAt!(x, y, 10);
        }
    });

    useEffect(() => {
        document.body.style.cursor = isHovered ? 'pointer' : 'auto'
    }, [isHovered])

    return (
        <AnimatePresence>
            <motion.group
                ref={group}
                position={position}
                receiveShadow={true}
                castShadow={true}
                animate={isClicked ? "clicked" : ""}

                transition={{
                    type: "Spring",
                    mass: 5,
                    stiffness: 200,
                    damping: 50,
                    restDelta: 0.001,
                    duration: 0.4
                }}

                variants={{
                    clicked: {
                        x: 0,
                        y: 0,
                        z: 2
                    }
                }}
            >
                <motion.group
                    animate={"appear"}
                    exit={"disappear"}
                    variants={{
                        appear: {
                            scale: [0, 1],
                            rotateY: [10 * Math.PI, 0],
                            transition: {
                                duration: randFloat(0.5, 1.5),
                                delay: randFloat(0, 1),
                                type: "Spring",
                                mass: 5,
                                stiffness: 20,
                                damping: 5,
                                restDelta: 0.001
                            }
                        },
                        disappear: {
                            scale: [1, 0],
                            rotateY: [0, 10 * Math.PI],
                            transition: {
                                duration: randFloat(0.5, 1.5),
                                delay: randFloat(0, 1),
                                type: "Spring",
                                mass: 5,
                                stiffness: 20,
                                damping: 5,
                                restDelta: 0.001
                            }
                        },
                    }}
                >
                    <motion.mesh
                        ref={mesh}
                        receiveShadow={true}
                        castShadow={true}
                        animate={isClicked ? "clicked" : isHovered ? "hover" : ""}
                        onPointerOver={(e) => {e.stopPropagation(); setIsHovered(true);}}
                        onPointerOut={() => setIsHovered(false)}
                        onClick={(e) => {e.stopPropagation(); setIsClicked(!isClicked);}}
                        onPointerMissed={() => setIsClicked(false)}

                        transition={{
                            type: "Spring",
                            mass: 5,
                            stiffness: 200,
                            damping: 50,
                            restDelta: 0.001,
                            duration: 0.4
                        }}

                        variants={{
                            hover: {
                                scale: 1.2,
                                transition: {
                                    duration: 0.2,
                                }
                            },
                            clicked: {
                                rotateY: 3 * Math.PI,
                                scale: 1.5
                            }
                        }}
                    >
                        <mesh rotation={new Euler(Math.PI / 2, 0, 0)}>
                            <cylinderGeometry args={[1, 1, 0.4, 32, 100]} />
                            <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
                        </mesh>
                        <mesh>
                            <torusGeometry args={[1, 0.2, 32, 100]}/>
                            <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
                        </mesh>
                        <mesh position={[0, 0, 0.211]}>
                            <circleGeometry args={[1, 32, 0, Math.PI * 2]} />
                            <meshPhongMaterial transparent={true} needsUpdate={true} specular="#61dafb" shininess={10} map={Texture} />
                        </mesh>
                        {isClicked ?
                            <mesh position={[0, 0, -0.211]} rotation={new Euler(0, Math.PI, 0)}>
                                <Text scale={0.1} anchorX="center" anchorY="middle" textAlign={"center"} overflowWrap={"break-word"} maxWidth={20} color={"black"}>
                                    {description}
                                </Text>
                                <meshPhongMaterial transparent={true} needsUpdate={true} specular="#61dafb" shininess={10} map={Texture} />
                            </mesh>
                            :
                            <mesh position={[0, 0, -0.211]} rotation={new Euler(0, Math.PI, 0)}>
                                <circleGeometry args={[1, 32, 0, Math.PI * 2]} />
                                <meshPhongMaterial transparent={true} needsUpdate={true} specular="#61dafb" shininess={10} map={Texture} />
                            </mesh>
                        }
                    </motion.mesh>
                </motion.group>
            </motion.group>
        </AnimatePresence>
    );
}