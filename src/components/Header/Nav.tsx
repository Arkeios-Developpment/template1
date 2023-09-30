'use client';
import styles from '@/components/Header/Nav.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/components/Header/Anim';
import Body from '@/components/Header/Body';
import Footer from '@/components/Header/Footer';


const links = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Lookbook",
        href: "/lookbook",
    },
    {
        title: "Contact",
        href: "/contact",
    }
]

export default function Index() {

    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
                    <Footer />
                </div>
            </div>
        </motion.div>
    )
}
