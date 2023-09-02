import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export function MenuWindow({ children, isClicked, colors, sizes, closedSizes, scale }:
                                   { children: ReactNode, isClicked: boolean, colors: string[], sizes: number[], closedSizes: number[], scale: number}) {

    return (
        <motion.div style={{overflow: "hidden", pointerEvents: "none"}}>
            <motion.div style={{
                position: "fixed",
                right: `-${sizes[0] - closedSizes[0]}px`,
                top: `-${sizes[1] - closedSizes[1]}px`
            }}
             animate={isClicked ? "click" : ""}
             transition={{duration: 0.3}}
             variants={{
                click: {
                    x: -(sizes[0] - closedSizes[0]),
                    y: sizes[1] - closedSizes[1]
                }
             }} >
                <motion.div style={{
                    width: `${sizes[0]}px`,
                    height: `${sizes[1]}px`,
                    backgroundColor: colors[0],
                    pointerEvents: "auto"
                }}
                 variants={{
                     click: {
                         backgroundColor: colors[1]
                     }
                 }} >
                    <div style={{
                        padding: "20% 10% 10% 10%",
                        display: "flex",
                        flexDirection: "column",
                        gap: `${20 * scale}px`
                    }} >
                        { children }
                    </div>
                </motion.div>
                <motion.div style={{
                    width: `${sizes[0]}px`,
                    height: `${sizes[1] / 2}px`,
                    backgroundColor: colors[0],
                    clipPath: "polygon(100% 100%, 0 0, 100% 0)",
                    translateY: "-0.5px",
                    pointerEvents: "auto"
                 }}
                 variants={{
                     click: {
                         backgroundColor: colors[1]
                     }
                 }} />
            </motion.div>
        </motion.div>
    )
}