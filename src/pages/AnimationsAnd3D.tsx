import React from "react";
import {Wormhole3D} from "@/components/AnimationsAnd3D/Wormhole/Wormhole3D";
import {WormholeTransition} from "@/components/AnimationsAnd3D/WormholeTransition";
import {BallTransition} from "@/components/AnimationsAnd3D/BallTransition";
import {TopPage} from "@/components/AnimationsAnd3D/TopPage/TopPage";
import {SmoothTransition} from "@/components/AnimationsAnd3D/SmoothTransition";
import {FromDirection} from "@/components/AnimationsAnd3D/FromDirection";
import {Explain3D} from "@/components/AnimationsAnd3D/Explain3D";

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
            <div style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "#a2a1a3",
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 0.15em, transparent 0)",
                backgroundSize: "1.25em 1.25em",
                backgroundAttachment: "fixed",
            }}>
                <div style={{width: "100%", height: "100%", position: "absolute", zIndex: 1}}>
                    <Explain3D />
                </div>
                <SmoothTransition newColor={"white"} />
            </div>
            <div style={{height: "100vh", width: "100%", backgroundColor: "white", position: "relative", zIndex: 1}}>
                <div style={{width: "100%", height: "100%", position: "absolute", zIndex: 2}}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center",
                            justifyContent: "center",
                        }}>
                            <FromDirection leftRight={false}>
                                <div
                                    style={{
                                        width: "500px",
                                        color: "black",
                                        fontSize: "100px",
                                    }}
                                >
                                    <span>RETOUR</span>
                                </div>
                            </FromDirection>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            alignContent: "center",
                            justifyContent: "center",
                        }}>
                            <FromDirection leftRight={true}>
                                <div
                                    style={{
                                        width: "500px",
                                        color: "black",
                                        fontSize: "100px",
                                    }}
                                >
                                    <span>AU MENU</span>
                                </div>
                            </FromDirection>
                        </div>
                    </div>
                </div>
                <BallTransition newColor={"cornflowerblue"} />
            </div>
        </div>
    )
}