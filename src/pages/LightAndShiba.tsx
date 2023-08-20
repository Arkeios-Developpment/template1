import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import { Shiba } from '@/components/LightAndShiba/shiba';
import { Text3D } from '@/components/LightAndShiba/Text3D';
import { PlaneShadow } from '@/components/LightAndShiba/PlaneShadow';

const Scene = () => {
    return (
        <group>
            <Text3D text={"Website"} />
            <Shiba />
            <PlaneShadow />
        </group>
    );
};

const LightAndShibaPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center' style={{height: "100vh", width: "100vw"}}>
                <Canvas shadows={"basic"} style={{backgroundColor: "black"}}>
                    <pointLight position={[0, 2, 20]} intensity={10000} castShadow={true }/>

                    <Scene />

                    <OrbitControls />
                    <Stats />
                </Canvas>
            </div>
        </div>
    );
};

export default LightAndShibaPage;
