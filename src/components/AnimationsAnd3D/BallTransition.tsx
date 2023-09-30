import {motion} from "framer-motion";
import React from "react";

export function BallTransition({newColor} : {newColor: string}) {
    return (
        <motion.div
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: "block",
                alignItems: "end",
            }}
        >
            <motion.div
                initial="offScreen"
                whileInView="onScreen"
                style={{
                    background: newColor,
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    transform: "translateY(0px) translateX(-50px)",
                }}
                variants={{
                    onScreen: {
                        width: "100vw",
                        height: "100vw",
                        transform: "translateY(25vw) translateX(-50vw)",
                    }
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                }}
            />
        </motion.div>
    );
}