import {useEffect, useState} from "react";

export const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return width;
};
export const useHeight = () => {
    const [height, setHeight] = useState(0); // default width, detect on server.
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    return height;
};