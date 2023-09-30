import React from "react";
import {Wormhole3D} from "@/components/AnimationsAnd3D/Wormhole/Wormhole3D";
import {WormholeTransition} from "@/components/AnimationsAnd3D/WormholeTransition";
import {BallTransition} from "@/components/AnimationsAnd3D/BallTransition";
import {TopPage} from "@/components/AnimationsAnd3D/TopPage/TopPage";

export default function AnimationsAnd3D() {
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
                <TopPage />
            </div>
            <div ref={wormholeRef} style={{height: "50vh", width: "100%", backgroundColor: "black"}}>
                <Wormhole3D target={wormholeRef} />
            </div>
            <WormholeTransition actColor={"black"} newColor={"#a2a1a3"} />
            <div style={{height: "100vh", width: "100%", backgroundColor: "blue"}}>
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
    )
}