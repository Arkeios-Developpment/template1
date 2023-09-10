import { MenuCross } from "@/components/Menu/Cross";
import { MenuWindow } from "@/components/Menu/Background";
import { MenuButton } from "@/components/Menu/Button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useWidth, useHeight } from "@/components/WidthAndHeight";
import {SocialNetwork3D} from "@/components/SocialNetwork/SocialNetwork3D";


export function Menu() {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const colors = ["#000000", "#fffbf7"];
    const closedSizes = [150, 70];
    let sizes= [500, 470];
    let scale: number;


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
        <div style={{position: "fixed", right: "0", top: "0",  pointerEvents: "none"}}>
            <motion.div style={{
                backgroundColor: `${colors[0]}00`,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none"
            }}
            animate={isClicked ? "click" : ""}
            transition={{duration: 0.3}}
            onClick={() => setIsClicked(false)}
            variants={{
                click: {
                    display: "block",
                    backgroundColor: `${colors[0]}80`,
                    pointerEvents: "all",
                    onClick: () => setIsClicked(false)
                }
            }} />
            <div style={{pointerEvents: "painted"}}>
                <MenuWindow isClicked={isClicked} colors={colors} sizes={sizes} closedSizes={closedSizes} scale={scale}>
                    <MenuButton isClicked={isClicked} text={"Accueil"} route={"/"} colors={colors} scale={scale}/>
                    <MenuButton isClicked={isClicked} text={"InsertElementHere"} route={"/"} colors={colors} scale={scale}/>
                    <MenuButton isClicked={isClicked} text={"A propos de nous"} route={"/about"} colors={colors} scale={scale}/>
                    <MenuButton isClicked={isClicked} text={"Nous contacter"} route={"/contact"} colors={colors} scale={scale}/>
                </MenuWindow>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        gap: "7px",
                        position: "absolute",
                        top: "5px",
                        right: "155px",
                        pointerEvents: "all",
                        width: "100px",
                        height: "100px"
                    }} >
                    <SocialNetwork3D baseScale={2.75} scenePath={"/instagram_3d-icon/scene.gltf"} url={"https://www.instagram.com/klg.gaetan/"} baseRotation={1.5 * Math.PI} />
                    <SocialNetwork3D baseScale={2.6} scenePath={"/linkedin_logo/scene.gltf"} url={"https://www.linkedin.com/in/gaetankling"} />
                </div>
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
                        right: "0px",
                        pointerEvents: "all"
                    }} >
                    <motion.span style={{
                        fontSize: "26px",
                        color: "white",
                        fontFamily: "Dosis, Arial, sans-serif",
                        marginRight: "5px",
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
        </div>
    )
}