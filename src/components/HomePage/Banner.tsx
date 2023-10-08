import React from "react";
import styles from "@/components/HomePage/Banner.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {motion, useScroll, useTransform} from "framer-motion";

const Banner = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = useRef(-1);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.07 * direction.current;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, [animate]);


  const target = useRef<HTMLDivElement>(null!);

  const scrollOpacity = useScroll({
    target: target,
    offset: ["start start", "end start"],
  }).scrollYProgress;
  const { scrollYProgress } = useScroll();

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const opacity = useTransform(scrollOpacity, [0, 1], [0.7, 0]);

  return (
    <div className={styles.main}>
      <motion.div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(/images/test46.png)",
          height: "110vh",
          y: scrollY,
        }}
      >
        <motion.div
          ref={target}
          style={{
            width: "100%",
            height: "100%",
            opacity: opacity,
            backgroundColor: `black`,
          }}
        />
      </motion.div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>AMK Development -</p>
          <p ref={secondText}>AMK Development -</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
