import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export function MenuBackground({ children, isClicked }: { children: ReactNode, isClicked: boolean}) {

    return (
        <div style={{overflow: "hidden"}}>
            <motion.div style={{
                width: "0px",
                height: "70px",
                position: "fixed",
                display: "inline-block",
                borderStyle: "solid",
                borderWidth: "0 500px 240px 0",
                borderColor: "transparent #bf9a57 transparent transparent",
                right: "-350px"
            }}
             animate={isClicked ? "click" : ""}
             transition={{duration: 0.3}}
             variants={{
                 click: {
                     x: -350,
                     y: 400,
                     borderColor: "transparent #fffbf7 transparent transparent"
                 }
             }} />
            <motion.div style={{
                width: "500px",
                height: "470px",
                backgroundColor: "#bf9a57",
                position: "fixed",
                display: "inline-block",
                top: "-400px",
                right: "-350px"
            }}
             animate={isClicked ? "click" : ""}
             transition={{duration: 0.3}}
             variants={{
                 click: {
                     x: -350,
                     y: 400,
                     backgroundColor: "#fffbf7"
                 }
             }} >
                <div style={{
                    padding: "100px 50px 50px 50px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }} >
                    { children }
                </div>
            </motion.div>
        </div>
    )
}