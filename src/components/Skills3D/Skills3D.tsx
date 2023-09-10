import {Canvas, useThree, useFrame} from "@react-three/fiber";
import { Vector3 } from "three";
import { Skill } from "@/components/Skills3D/Skill";
import {Stats} from "@react-three/drei";
import React from "react";

const Scene = () => {
    return (
        <group>
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."}  position={[0, 0, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[0, 2.5, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[0, -2.5, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[2.5, 0, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[2.5, 2.5, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[2.5, -2.5, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[-2.5, 0, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[-2.5, 2.5, 0]} />
            <Skill Path={"/cpp.png"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor," +
                "dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa," +
                "varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi," +
                "non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a," +
                "enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor."} position={[-2.5, -2.5, 0]} />
        </group>
    );
};

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

export function Skills3D() {
    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <Canvas shadows={"basic"} style={{backgroundColor: "gray"}} camera={{ position: [0, 0, 6] }}>
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

                <Rig />
                <Stats />
            </Canvas>
        </div>
    );
}