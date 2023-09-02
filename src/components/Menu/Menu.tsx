import { MenuCross } from "@/components/Menu/Cross";
import { MenuBackground } from "@/components/Menu/Background";
import { MenuButton } from "@/components/Menu/Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


export function Menu() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const colors = ["#cd5079", "#fffbf7"];
    const closedSizes = [150, 70];
    let sizes= [500, 470];
    let scale: number;

    const useWidth = () => {
        const [width, setWidth] = useState(0); // default width, detect on server.
        const handleResize = () => setWidth(window.innerWidth);
        useEffect(() => {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);
        return width;
    };
    const useHeight = () => {
        const [height, setHeight] = useState(0); // default width, detect on server.
        const handleResize = () => setHeight(window.innerHeight);
        useEffect(() => {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);
        return height;
    };
    const width = useWidth();
    const height = useHeight();

    if (width < sizes[0] || height < sizes[1]) {
        scale = width < height ? (width / sizes[0]) : (height / sizes[1]);
    }
    else {
        scale = width < height ? (width / sizes[0]) / 2 : (height / sizes[1]) / 2;
    }
    sizes[0] *= scale;
    sizes[1] *= scale;

    return (
        <div style={{position: "fixed", right: "0", top: "0"}}>
            <MenuBackground isClicked={isClicked} colors={colors} sizes={sizes} closedSizes={closedSizes} scale={scale}>
                <MenuButton isClicked={isClicked} text={"Accueil"} route={"/"} colors={colors} scale={scale}/>
                <MenuButton isClicked={isClicked} text={"InsertElementHere"} route={"/"} colors={colors} scale={scale}/>
                <MenuButton isClicked={isClicked} text={"A propos de nous"} route={"/about"} colors={colors} scale={scale}/>
                <MenuButton isClicked={isClicked} text={"Nous contacter"} route={"/contact"} colors={colors} scale={scale}/>
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