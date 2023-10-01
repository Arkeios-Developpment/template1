import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import React from "react";

export function BallTransition({newColor} : {newColor: string}) {
    const target = React.useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["end end", "start start"] } );
    const scrollY = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 50
    });
    const size = useTransform(scrollY, [0, 1], ["0vmax", "200vmax"]);

    return (
        <div
            ref={target}
            style={{
                height: "50vh",
                width: "100vw",
            }}
        >
            <div
                style={{
                    height: "150.1vh",
                    width: "100%",
                    transform: "translateY(-50vh)",
                    overflow: "hidden",
                    clipPath: "inset(0 0 0 0)",
                }}
            >
                <motion.div
                    style={{
                        background: newColor,
                        borderRadius: "50%",
                        width: size,
                        height: size,
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                />
            </div>
        </div>
    );
}