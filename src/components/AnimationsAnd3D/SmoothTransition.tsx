import React from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

export function SmoothTransition({newColor} : {newColor: string}) {
    const target = React.useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["end end", "start start"] } );
    const scrollY = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 50
    });
    const opacity = useTransform(scrollY, [0, 1], [0, 1]);

    return (
        <div
            ref={target}
            style={{
                height: "50vh",
                width: "100vw",
            }}
        >
            <motion.div
                style={{
                    height: "150vh",
                    width: "100%",
                    transform: "translateY(-50vh)",
                    backgroundColor: newColor,
                    opacity: opacity,
                    top: 0,
                }}
            />
        </div>
    );
}
