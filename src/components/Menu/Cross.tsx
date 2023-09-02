import { motion } from "framer-motion";

export function MenuCross({ isClicked, isHovered }: { isClicked: boolean, isHovered: boolean }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            justifyContent: "center"
        }}>
            <motion.span style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                display: "inline-block"
            }}
             animate={isClicked ? "click" : isHovered ? "hover" : ""}
             transition={{duration: 0.2, background: {delay: 0.1}}}
             variants={{
                hover: {
                    y: -3
                },
                click: {
                    rotateZ: 45,
                    y: 11,
                    backgroundColor: "black"
                }
             }} />
            <motion.span style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                display: "inline-block"
            }}
             animate={isClicked ? "click" : ""}
             transition={{duration: 0.2}}
             variants={{
                 click: {
                     opacity: 0,
                     backgroundColor: "black"
                 }
             }} />
            <motion.span style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                display: "inline-block"
            }}
            animate={isClicked ? "click" : isHovered ? "hover" : ""}
            transition={{duration: 0.2, background: {delay: 0.15}}}
            variants={{
                hover: {
                    y: 3
                },
                click: {
                    rotateZ: -45,
                    y: -11,
                    backgroundColor: "black"
                }
            }} />
        </div>
    )
}