import {motion} from "framer-motion";
import React from "react";
import {Fuggles} from "next/font/google"
import {SocialNetwork3D} from "@/components/SocialNetwork/SocialNetwork3D";

const fuggles = Fuggles({
    weight: '400',
    subsets: ['latin'],
});

export function Title() {
    const primaryColor = "#FFDDDD";

    return (
        <motion.div
            style={{
                display: "flex",
                position: "absolute",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div
                style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "5vw",
                    }}
                >
                    <motion.span
                        style={{
                            fontSize: "25vw",
                            color: primaryColor,
                            marginRight: "auto",
                            marginLeft: "auto"
                        }}
                        className={fuggles.className}
                    >
                        A
                    </motion.span>
                    <motion.span
                        style={{
                            fontSize: "25vw",
                            color: primaryColor,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                        className={fuggles.className}
                    >
                        M
                    </motion.span>
                    <motion.span
                        style={{
                            fontSize: "25vw",
                            color: primaryColor,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                        className={fuggles.className}
                    >
                        K
                    </motion.span>
                </div>
                {/*<div*/}
                {/*    style={{*/}
                {/*        display: "flex",*/}
                {/*        flexDirection: "row",*/}
                {/*        marginRight: "auto",*/}
                {/*        marginLeft: "auto",*/}
                {/*        scale: 1*/}
                {/*    }}*/}
                {/*>*/}
                    <SocialNetwork3D baseScale={2} scenePath={"/linkedin_logo/scene.gltf"} url={"https://www.linkedin.com/in/gaetankling"} />
                    {/*<SocialNetwork2D imagePath={"/linkedin.png"} imageAlt={"Linkedin"} url={"https://www.linkedin.com/in/gaetankling"} hoverFilter={primaryFilter} />*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    style={{*/}
                {/*        display: "flex",*/}
                {/*        flexDirection: "row",*/}
                {/*        marginRight: "auto",*/}
                {/*        marginLeft: "auto",*/}
                {/*        scale: 1*/}
                {/*    }}*/}
                {/*>*/}
                    <SocialNetwork3D baseScale={2} scenePath={"/instagram_3d-icon/scene.gltf"} url={"https://www.instagram.com/klg.gaetan/"} baseRotation={-Math.PI / 2}/>
                    {/*<SocialNetwork2D imagePath={"/instagram.png"} imageAlt={"Instagram"} url={"https://www.instagram.com/klg.gaetan/"} hoverFilter={primaryFilter} />*/}
                {/*</div>*/}
            </div>
        </motion.div>
    );
}