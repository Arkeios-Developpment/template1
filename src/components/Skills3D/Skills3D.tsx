import {Canvas} from "@react-three/fiber";
import { Skill } from "@/components/Skills3D/Skill";
import {Stats} from "@react-three/drei";
import React from "react";

const Scene = () => {
    return (
        <group>
            <Skill Path={"/cpp.png"} position={[0, 0, 0]} />
            <Skill Path={"/cpp.png"} position={[0, 2.5, 0]} />
            <Skill Path={"/cpp.png"} position={[0, -2.5, 0]} />
            <Skill Path={"/cpp.png"} position={[2.5, 0, 0]} />
            <Skill Path={"/cpp.png"} position={[2.5, 2.5, 0]} />
            <Skill Path={"/cpp.png"} position={[2.5, -2.5, 0]} />
            <Skill Path={"/cpp.png"} position={[-2.5, 0, 0]} />
            <Skill Path={"/cpp.png"} position={[-2.5, 2.5, 0]} />
            <Skill Path={"/cpp.png"} position={[-2.5, -2.5, 0]} />
        </group>
    );
};

export function Skills3D() {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas shadows={"basic"} style={{backgroundColor: "gray"}}>
                {/*<ambientLight castShadow={true} />*/}
                {/*<pointLight intensity={1000} position={[10, 10, 10]} castShadow={true} />*/}
                {/*<pointLight intensity={100} position={[-10, -10, -10]} castShadow={true} />*/}
                <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={400} />
                <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={800} />
                <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={1000} />
                <spotLight color="#f2056f" position={[15, 10, -2]} intensity={1000} />
                <spotLight color="#f2056f" position={[15, 10, 5]} intensity={500} />
                <spotLight color="#b107db" position={[5, -10, 5]} intensity={800} />

                <Scene />

                {/*<OrbitControls />*/}
                <Stats />
            </Canvas>
        </div>
    );
}