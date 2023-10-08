import React from "react";
import { motion } from "framer-motion";

export default function DAElement({title, description, image, leftRight} : {title: string, description: string, image: string, leftRight: boolean}) {
    return (
        <motion.div
            style={{
                height: "100vh",
                width: "100%",
                opacity: 0,
            }}
            whileInView={{opacity: 1}}
            viewport={{amount: 0.5}}
        >
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: leftRight ? "row-reverse" : "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    position: "fixed",
                    top: 0,
                    left: 0,
                }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "470px",
                }}>
                    <span
                        style={{
                            color: "white",
                            fontSize: "100px",
                            fontFamily: "fantasy",
                        }}
                    >
                        {title}
                    </span>
                    <span
                        style={{
                            color: "white",
                            fontSize: "40px",
                            fontFamily: "fantasy",
                            fontWeight: "500",
                        }}
                    >
                            {description}
                        </span>
                </div>
                <img color={"white"} src={image} alt={"logo"} style={{
                    objectFit: "contain",
                    width: "50%",
                    height: "100%",
                }} />
            </div>
        </motion.div>
    );
}