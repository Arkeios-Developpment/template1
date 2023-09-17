import React from 'react';
import {Wormhole3D} from "@/components/IndexPage/Wormhole/Wormhole3D";
import {WormholeTransition} from "@/components/IndexPage/WormholeTransition";
import {BallTransition} from "@/components/IndexPage/BallTransition";
import Landing from '@/components/IndexPage/Leading';
import Home from '@/components/IndexPage/page';

export default function HomePage() {
    const wormholeRef = React.useRef<HTMLDivElement>(null!);

    return (
        <div
            style={{
                backgroundColor: "black",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            <div style={{height: "100vh", width: "100%", backgroundColor: "yellowgreen"}}>
                <Landing />
            </div>
            <div ref={wormholeRef} style={{height: "100vh", width: "100%", backgroundColor: "black"}}>
                <Wormhole3D target={wormholeRef} />
            </div>
             <WormholeTransition actColor={"black"} newColor={"#a2a1a3"} />
            <div style={{height: "100vh", width: "100%", backgroundColor: "blue"}}>
                <Home />
                <BallTransition newColor={"green"} />
            </div>
            <div style={{height: "100vh", width: "100%", backgroundColor: "green"}}>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
                <h1>SUITE ICI</h1>
            </div>
        </div>
    );
};
