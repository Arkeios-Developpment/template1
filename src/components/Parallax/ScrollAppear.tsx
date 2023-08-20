import {motion, useScroll, useTransform} from 'framer-motion';
import React, { ReactNode, useRef } from "react";

interface ScrollAppearParams {
    children: ReactNode;
    direction?: "left" | "right" | "top" | "bottom";
}

export function ScrollAppear({children, direction}: ScrollAppearParams) {
    const target = useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["start end", "end end"] } );

    let xDirection = 0;
    let yDirection = 0;

    if (direction === "left") {
        xDirection = 1;
        yDirection = 0;
    }
    else if (direction === "right") {
        xDirection = -1;
        yDirection = 0;
    }
    else if (direction === "top") {
        xDirection = 0;
        yDirection = 1;
    }
    else if (direction === "bottom") {
        xDirection = 0;
        yDirection = -1;
    }

    let scrollX;
    let scrollY;

    if (typeof window !== "undefined") {
        scrollX = useTransform(scrollYProgress, [0, 1], [window.innerWidth * xDirection, 0]);
        scrollY = useTransform(scrollYProgress, [0, 1], [window.innerHeight * yDirection, 0]);
    }


    return (
        <div ref={target} style={{overflow: 'hidden'}}>
            <motion.div
                style={{
                    x: scrollX,
                    y: scrollY,
                }} >
                { children }
            </motion.div>
        </div>
    );
}