import {motion} from "framer-motion";
import React from "react";

export function BallTransition({newColor} : {newColor: string}) {
    return (
        <motion.div
            style={{
                width: "100px",
                height: "100px"
            }}
            whileInView={"inView"}
        >
            <motion.div
                style={{
                    background: newColor,
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    transform: "translateY(-50px) translateX(-50px)",
                }}
                variants={{
                    inView: {
                        width: "300vw",
                        height: "300vw",
                        transform: "translateY(-150vw) translateX(-150vw)",
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