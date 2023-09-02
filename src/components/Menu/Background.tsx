import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export function MenuBackground({ children, isClicked, colors, sizes, closedSizes, scale }:
                                   { children: ReactNode, isClicked: boolean, colors: string[], sizes: number[], closedSizes: number[], scale: number}) {

    return (
        <motion.div style={{
            backgroundColor: `${colors[0]}00`,
            width: "100vw",
            height: "100vh"
        }}
        animate={isClicked ? "click" : ""}
        transition={{duration: 0.3}}
        variants={{
            click: {
                backgroundColor: `${colors[0]}80`
            }
        }}>
            <motion.div style={{overflow: "hidden"}}>
                <motion.div style={{
                    width: "0px",
                    height: `${closedSizes[1]}px`,
                    position: "fixed",
                    display: "inline-block",
                    borderStyle: "solid",
                    borderWidth: `0 ${sizes[0]}px ${sizes[1] / 2}px 0`,
                    borderColor: `transparent ${colors[0]} transparent transparent`,
                    right: `-${sizes[0] - closedSizes[0]}px`
                }}
                 animate={isClicked ? "click" : ""}
                 transition={{duration: 0.3}}
                 variants={{
                     click: {
                         x: -(sizes[0] - closedSizes[0]),
                         y: sizes[1] - closedSizes[1],
                         borderColor: `transparent ${colors[1]} transparent transparent`
                     }
                 }} />
                <motion.div style={{
                    width: `${sizes[0]}px`,
                    height: `${sizes[1]}px`,
                    backgroundColor: colors[0],
                    position: "fixed",
                    display: "inline-block",
                    right: `-${sizes[0] - closedSizes[0]}px`,
                    top: `-${sizes[1] - closedSizes[1]}px`
                }}
                 animate={isClicked ? "click" : ""}
                 transition={{duration: 0.3}}
                 variants={{
                     click: {
                         x: -(sizes[0] - closedSizes[0]),
                         y: sizes[1] - closedSizes[1],
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
            </motion.div>
        </motion.div>
    )
}