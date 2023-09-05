import {useRef, useEffect, useState} from "react";
import {Euler, TextureLoader} from "three";
import {motion} from "framer-motion-3d";
import {useMotionValue, useTransform} from "framer-motion";
import {MeshProps} from "@react-three/fiber";
import {randFloat} from "three/src/math/MathUtils.js";

export function Skill({ Path, position }: { Path: string, position: [number, number, number] }) {
    const mesh = useRef<MeshProps>(null!);
    const Texture = new TextureLoader().load(Path);
    const [localMousePos, setLocalMousePos] = useState({x: 0, y:  0});

    const handleMouseMove = (event: any) => {
        console.log(mesh.current.position);
        // console.log(event.current.getBoundingClientRect());
        // console.log(event.currentTarget.getBoundingClientRect());
        const rect = event.target.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;

        setLocalMousePos({ x: localX, y: localY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const rotateY = useTransform(useMotionValue(localMousePos.x), [-100, 100], [-(Math.PI / 2), Math.PI / 2]);
    const rotateX = useTransform(useMotionValue(localMousePos.y), [-100, 100], [-(Math.PI / 2), Math.PI / 2]);

    useTransform(useMotionValue(localMousePos.x), input => console.log(input));


    return (
        <motion.mesh
            ref={mesh}
            rotation={[rotateX, rotateY, 0]}
            position={position}
            receiveShadow={true}
            castShadow={true}
            animate={{
                scale: [ 0, 1 ],
                rotateY: [ 10 * Math.PI, 0 ],
            }}
            transition={{
                type: "spring",
                mass: 5,
                stiffness: 100,
                damping: 50 + randFloat(-10, 10),
                restDelta: 0.001
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
            <mesh position={[0, 0, 0.201]}>
                <circleGeometry args={[1, 32, 0, Math.PI * 2]} />
                <meshPhongMaterial transparent={true} needsUpdate={true} specular="#61dafb" shininess={10} map={Texture} />
            </mesh>
            <mesh position={[0, 0, -0.201]} rotation={new Euler(0, Math.PI, 0)}>
                <circleGeometry args={[1, 32, 0, Math.PI * 2]} />
                <meshPhongMaterial transparent={true} needsUpdate={true} specular="#61dafb" shininess={10} map={Texture} />
            </mesh>
        </motion.mesh>
    );
}