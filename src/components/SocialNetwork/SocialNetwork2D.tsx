import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function SocialNetwork({ imagePath, imageAlt, hoverFilter } : {imagePath: string, imageAlt: string, hoverFilter: string}) {
    let size = 50;

    return (
        <div style={{
            overflow: "hidden",
            width: `${size * 1.2}px`,
            height: `${size * 1.2}px`,
            display: "flex"
        }}>
            <motion.img
                src={imagePath}
                alt={imageAlt}
                width={64}
                height={64}
                initial={{ width: 0, height: 0 }}
                animate={{ width: size, height: size }}
                whileHover={{ width: 1.2 * size, height: 1.2 * size, filter: hoverFilter }}
                whileTap={{ width: 0.9 * size, height: 0.9 * size }}
                transition={{ type: "spring", stiffness: 200, damping: 20, filter: {duration: 0} }}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    display: "block",
                    margin: "auto"
                }}
            />
        </div>
    );
}

export function SocialNetwork2D({imagePath, imageAlt, url, hoverFilter } : {imagePath: string, imageAlt: string, url: string, hoverFilter: string}) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <SocialNetwork imagePath={imagePath} imageAlt={imageAlt} hoverFilter={hoverFilter} />
        </Link>
    );
}