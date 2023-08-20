import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion';

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    return (
        <>
        <div>
            <div
                style={{
                   backgroundImage: 'url(Test.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: `110vh`,
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(Test.png)',
                        height: "110vh",
                        y: scrollY,
                    }}/>
            </div>
            <div style={{position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            }}>
                <Image
                    src="/Logo.png"
                    alt="Deuxième image"
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{width: "auto", height: "auto"}}
                />
            </div>
        </div>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
            <h1>aaaa</h1>
        </>
    );
};


export default HomePage;
