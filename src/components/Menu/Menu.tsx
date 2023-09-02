import { MenuCross } from "@/components/Menu/Cross";
import { MenuBackground } from "@/components/Menu/Background";
import { MenuButton } from "@/components/Menu/Button";
import { motion } from "framer-motion";
import { useState } from "react";

export function Menu() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div style={{position: "fixed", right: "0", top: "0"}}>
            <MenuBackground isClicked={isClicked}>
                <MenuButton isClicked={isClicked} text={"Accueil"} route={"/"}/>
                <MenuButton isClicked={isClicked} text={"InsertElementHere"} route={"/"}/>
                <MenuButton isClicked={isClicked} text={"A propos de nous"} route={"/about"}/>
                <MenuButton isClicked={isClicked} text={"Nous contacter"} route={"/contact"}/>
            </MenuBackground>
            <motion.div
                onClick={() => setIsClicked(!isClicked)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "7px",
                    padding: "20px",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0px",
                    right: "0px"
                }} >
                <motion.span style={{
                    fontSize: "26px",
                    color: "white",
                    fontFamily: "Dosis, Arial, sans-serif"
                }}
                 animate={isClicked ? "click" : ""}
                 transition={{duration: 0.3}}
                 variants={{
                     click: {
                         color: "black"
                     }
                 }} >
                    Menu
                </motion.span>
                <MenuCross isClicked={isClicked} isHovered={isHovered}/>
            </motion.div>
        </div>
    )
}