import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import React from "react";
import AnimationExplain from "@/components/AnimationsAnd3D/AnimationExplain";

export function WormholeTransition({actColor, newColor} : {actColor: string, newColor: string}) {
    const target = React.useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["start start", "0.9 start"] } );
    const scrollY = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 50
    });
    const progress1 = useTransform(scrollY, [0, 0.25, 0.5, 0.75, 1], ["100%", "60%", "40%", "10%", "0%"]);
    const progress2 = useTransform(scrollY, [0, 0.25, 0.5, 0.75, 1], ["100%", "70%", "60%", "20%", "0%"]);
    const progress3 = useTransform(scrollY, [0, 0.25, 0.5, 0.75, 1], ["100%", "90%", "80%", "25%", "0%"]);
    const progress4 = useTransform(scrollY, [0, 0.25, 0.5, 0.75, 1], ["100%", "95%", "95%", "60%", "0%"]);

    const opacityProgress = useScroll({ target: target, offset: ["start 0.1", "start start"] } ).scrollYProgress;
    const opacity = useTransform(opacityProgress, [0, 1], [0, 1]);


    return (
        <motion.div
            style={{
                height: "150vh",
                width: "100vw",
                backgroundColor: newColor,
                backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 0.15em, transparent 0)",
                backgroundSize: "1.25em 1.25em",
                backgroundAttachment: "fixed",
                overflow: "hidden",
                clipPath: "inset(0 0 0 0)",
                opacity: opacity,
            }}>
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                position: "fixed",
                top: 0,
            }}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    <AnimationExplain />
                </div>
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    <div
                        style={{
                            width: "600px",
                            color: "black",
                            fontSize: "100px",
                        }}
                    >
                        <span>Confiez nous vos idées d'animations web</span>
                    </div>
                </div>
            </div>
            <motion.div
                ref={target}
                style={{
                    height: "50vh",
                    width: "100vw",
                }}
            >
                 <motion.div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            height: "50%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress1,
                                width: "25%",
                                marginTop: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress2,
                                width: "25%",
                                marginTop: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress3,
                                width: "25%",
                                marginTop: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress4,
                                width: "25%",
                                marginTop: "auto"
                            }}
                        />
                    </div>
                    <div
                        style={{
                            height: "50%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress4,
                                width: "25%",
                                marginBottom: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress3,
                                width: "25%",
                                marginBottom: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress2,
                                width: "25%",
                                marginBottom: "auto"
                            }}
                        />
                        <motion.div
                            style={{
                                backgroundColor: actColor,
                                height: progress1,
                                width: "25%",
                                marginBottom: "auto"
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}