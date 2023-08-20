import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import React, {useRef} from "react";


interface ParallaxTitleComponentParams {
    backgroundImage: string;
    logoImage: string;
}

export function ParallaxTitleComponent({ backgroundImage, logoImage }: ParallaxTitleComponentParams) {
    const target = useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["start start", "end start"] } );
    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <div ref={target}
            style={{
            overflow: 'hidden',
            height: `110vh`,
            position: "relative",
        }}>
            <motion.div
                style={{
                    position: "absolute",
                    height: "110vh",
                    width: "100vw",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "center",
                    y: scrollY,
                    overflow: 'hidden',
                }} >
            </motion.div>
            <div
                style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}>
                <Image
                    src={logoImage}
                    alt="Deuxième image"
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "auto", height: "auto"}}
                />
            </div>
        </div>
    );
}