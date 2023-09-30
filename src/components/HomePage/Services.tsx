import {useEffect, useRef, useState} from "react";
import styles from "@/components/HomePage/Services.module.scss";
import {motion, MotionValue, useScroll, useSpring, useTransform} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Card({id, inSection}: { id: number; inSection: boolean }) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, 300);

    return (
        <div className={styles.cardContainer} style={{scrollSnapAlign: inSection ? 'center' : 'none'}}>
            <div ref={ref} style={{borderRadius: "1.5vw", backgroundColor: "red"}}>
                <motion.h2
                    style={{
                        y,
                        color: "black",
                        position: "absolute",
                        top: "5%",
                        left: "5%"
                    }}
                >{`#00${id}`}</motion.h2>
                <div style={{height: "7OOpx", width: "1050px"}}></div>
            </div>
        </div>
    );
}

const FixedText = ({showText}: { showText: boolean }) => {
    return (
        <motion.div
            className="fixed-text"
            style={{
                position: "fixed",
                width: "50%",
                left: "0",
                top: "0",
                height: "100%",
                padding: "20px",
                color: "black",
                opacity: showText ? 1 : 0,
                pointerEvents: showText ? "auto" : "none"
            }}
            animate={{opacity: showText ? 1 : 0}}
            transition={{duration: 0.5}}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}
            >
                <h1>We can help you with ...</h1>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [inSection, setInSection] = useState(false);
    const [showText, setShowText] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                setInSection(rect.top <= windowHeight / 2);
                setShowText(rect.top <= 160);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollYProgress]);

    return (
        <>
            <div ref={ref} style={{scrollSnapAlign: inSection ? "center" : "none"}}></div>
            <div
                style={{
                    position: "absolute",
                    width: "50%",
                    right: "0",
                }}
            >
                <FixedText showText={showText}/>
                <div style={{width: "100%"}}>
                    {[1, 2, 3].map((image) => (
                        <Card
                            key={image}
                            id={image}
                            inSection={inSection}
                        />
                    ))}
                </div>
                <motion.div className="progress" style={{scaleX}}/>
            </div>
        </>
    );
}

export default Services;
