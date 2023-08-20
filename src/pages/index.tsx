import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Image from "next/image";
import {Parallax} from "react-parallax";


const HomePage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div>
            <div
                style={{
                    height: "100vh",
                    backgroundImage: `url("/Test.png")`,
                    backgroundPosition: `center ${scrollPosition * 0.5}px`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
            }}>
            </div>
            <div style={{position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", top: 0, left: 0, width: "100%", height: "100%"}}>
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
