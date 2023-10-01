import React, {ReactNode} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

export function FromDirection({leftRight, children} : {leftRight: boolean, children?: ReactNode}) {
    const target = React.useRef<HTMLDivElement>(null!);
    const {scrollYProgress} = useScroll({target: target, offset: ["start end", "end end", "0.25 start", "end start"]});
    const scrollY = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 50
    });
    const translate = useTransform(scrollY, [0, 0.33, 0.66, 1], leftRight ? ["100vw", "0vw", "0vw", "100vw"] : ["-100vw", "0vw", "0vw", "-100vw"]);
    const opacity = useTransform(scrollY, [0, 0.33, 0.66, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={target}
            style={{
                translateX: translate,
                opacity: opacity,
                height: "fit-content",
                width: "fit-content",
            }}
        >
            {children}
        </motion.div>
    )
}
