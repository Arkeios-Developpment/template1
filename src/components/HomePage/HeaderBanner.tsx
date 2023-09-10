import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderBanner = () => {
    const target = useRef<HTMLDivElement>(null!);

    const scrollOpacity = useScroll({target: target, offset: ["start start", "end start"]}).scrollYProgress;
    const {scrollYProgress} = useScroll();

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 560]);
    const opacity = useTransform(scrollOpacity, [0, 1], [0.7, 0]);

    return (
        <>
            <BackgroundImage>
                <motion.div
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(test46.png)',
                        height: "110vh",
                        y: scrollY,
                    }}>
                    <motion.div
                        ref={target}
                        style={{
                            width: '100%',
                            height: '100%',
                            opacity: opacity,
                            backgroundColor: `black`
                        }}/>
                </motion.div>
            </BackgroundImage>
            <ContentContainer>
                <HeaderTitle>AMK</HeaderTitle>
                <ButtonContainer>
                    <Button>ENSEIGNES</Button>
                    <Button>SIGNALETIQUES</Button>
                    <Button>OBJECT & DECO</Button>
                </ButtonContainer>
                <ContactContainer>
                    <ContactTitle>CONTACT</ContactTitle>
                    <ContactPhone href="tel:0789611600">
                        <FontAwesomeIcon icon={faPhone} style={{paddingRight: "8px", color: 'white'}}/>
                        07 89 61 16 00
                    </ContactPhone>
                </ContactContainer>
            </ContentContainer>
        </>
    );
}

const BackgroundImage = styled.div`
  background-image: url('test46.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 110vh;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 120px;
  color: #ffffff;
  font-family: Roboto, sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: white 1px solid;
  padding: 10px 15px;
  text-align: center;
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 22px;
  vertical-align: baseline;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #bf9a57;
    color: white;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const ContactTitle = styled.h3`
  font-size: 26px;
  color: white;
`;

const ContactPhone = styled.a`
  color: white;
  text-decoration: none;
  font-size: 26px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: #f46d19;
  }
`;

export default HeaderBanner;
