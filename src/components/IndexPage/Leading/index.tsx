'use client';
import Image from 'next/image'
import styles from './style.module.scss'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {motion, useScroll, useTransform} from "framer-motion";
export default function Home() {

    const firstText = useRef<HTMLParagraphElement>(null!);
    const secondText = useRef<HTMLParagraphElement>(null!);
    const slider = useRef<HTMLDivElement>(null!);
    let xPercent = 0;
    let direction = -1;


    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if(xPercent < -100){
            xPercent = 0;
        }
        else if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    const target = React.useRef<HTMLDivElement>(null!);
    const { scrollYProgress } = useScroll({ target: target, offset: ["start start", "0.1 start"] } );
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className={styles.main} ref={target}>
            <Image
                src="/images/test46.png"
                fill={true}
                alt="background"
            />
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>AMK Development -</p>
                    <p ref={secondText}>AMK Development -</p>
                </div>
            </div>
            <motion.div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    background: "linear-gradient(to top, #000 0%, transparent 50%)",
                    opacity: opacity,
                }}
            >

            </motion.div>
        </div>
    )
}