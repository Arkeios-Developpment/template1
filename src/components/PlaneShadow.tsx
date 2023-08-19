import React, {useRef} from "react";
import {Mesh} from "three";

export function PlaneShadow() {
    const mesh = useRef<Mesh>(null!);

    return (
        <mesh ref={mesh} receiveShadow={true} position={[0, 0, -10]}>
            <planeGeometry args={[1000,1000,1000]} />
            <meshStandardMaterial color="white" />
        </mesh>
    );
}
