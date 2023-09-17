import React from 'react';
import {Wormhole3D} from "@/components/IndexPage/Wormhole/Wormhole3D";

const AboutPage = () => {
    const ref = React.useRef<HTMLDivElement>(null!);
    return (
        <div>
            <div style={{height: "400vh", width: "100vw", backgroundColor: "black"}}>
                <Wormhole3D target={ref} />
            </div>
        </div>
    );
};

export default AboutPage;