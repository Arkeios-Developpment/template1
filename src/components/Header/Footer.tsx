import styles from '@/components/Header/Footer.module.scss';
import { translate } from '@/components/Header/Anim';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Made by:</span> Us
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Typography:</span> Google Fonts
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    <span>Images:</span> Midjourney
                </motion.li>
            </ul>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Privacy Policy
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate} initial="initial"
                    animate="enter"
                    exit="exit">
                    Terms & Conditions
                </motion.li>
            </ul>
        </div>
    )
}