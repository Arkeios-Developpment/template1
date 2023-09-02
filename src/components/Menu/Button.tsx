import React, {useState} from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

export function MenuButton({ text, route, isClicked }: { text: string, route: string, isClicked: boolean}) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        router.push(route);
    };

    return (
        <div style={{overflow: "hidden", width: "auto"}}>
            <motion.div style={{
                opacity: 0,
                fontFamily: "Dosis, Arial, sans-serif",
                fontSize: "45px",
                color: "#333333",
                cursor: "pointer"
            }}
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
             animate={[isClicked ? "click" : "idle", isHovered ? "hover" : ""]}
             variants={{
                 idle: {
                     x: 50
                 },
                 click: {
                     x: 0,
                     opacity: 1,
                     transition: {
                         delay: 0.2,
                         duration: 0.2
                     }
                 },
                 hover: {
                     color: "#bf9a57",
                     transition: {
                         duration: 0.1
                     }
                 }
             }}>
                { text }
            </motion.div>
        </div>
    )
}