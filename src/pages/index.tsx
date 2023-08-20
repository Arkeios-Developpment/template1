import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {motion, useScroll, useTransform} from 'framer-motion';
import styled from "styled-components";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 960]);

    return (
        <>
        <div>
            <div
                style={{
                    backgroundImage: 'url(Background.jpg)',
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
                        backgroundImage: 'url(Background.jpg)',
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
                height: "100%",
                flexDirection: "column",
                gap: "80px"
            }}>
                <StyledLogo
                    src="/Logo.png"
                    alt="Deuxième image"
                    width={0}
                    height={0}
                    sizes='100vw'
                />
                <div style={{display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
                    <Button>ENSEIGNES</Button>
                    <Button>SIGNALETIQUES</Button>
                    <Button>OBJECT & DECO</Button>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
                    <h1 style={{fontSize: "26px", color: "white"}}>CONTACT</h1>
                    <Phone href="tel:0000000000">
                        <FontAwesomeIcon icon={faPhone} style={{paddingRight: "8px"}}/>
                        00 00 00 00 00</Phone>
                </div>
            </div>
            <div>
                <h1>Entreprise de Developpment Informatqiue</h1>
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

const Phone = styled.a`
  color: black;
  text-decoration: none;
  font-size: 26px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  
  &:hover {
    color: white;
  }
`;

const StyledLogo = styled(Image)`
  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    width: 60%;
  }
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: white 1px solid;
  padding: 10px 15px;
  text-align: center;
  color: white;
  font-size: 22px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #414143;
    color: white;
  }
`;

export default HomePage;
