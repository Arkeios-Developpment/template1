import React, {useEffect, useRef, useState} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import styled from "styled-components";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {rgba} from "@react-spring/shared";

const HomePage = () => {
    const target = useRef<HTMLDivElement>(null!);
    const scrollOpacity = useScroll({ target: target, offset: ["start start", "end start"] } ).scrollYProgress;
    const { scrollYProgress } = useScroll();

    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 560]);
    const opacity = useTransform(scrollOpacity, [0, 1], [0.7, 0]);

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                <div
                    style={{
                        backgroundImage: 'url(test46.png)',
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
                            backgroundImage: 'url(test46.png)',
                            height: "110vh",
                            y: scrollY,
                        }}>
                        <motion.div
                            ref={target}
                            style={{width: '100%',
                                    height: '100%',
                                    opacity: opacity,
                                    backgroundColor: `black`}}/>
                    </motion.div>
                </div>
                <div style={{position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    gap: "80px",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}>
                    <h1 style={{fontSize: "120px", color: "#ffffff", fontFamily: "Roboto"}}>AMK</h1>
                    <div style={{display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
                        <Button>ENSEIGNES</Button>
                        <Button>SIGNALETIQUES</Button>
                        <Button>OBJECT & DECO</Button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"}}>
                        <h3 style={{fontSize: "26px", color: "white"}}>
                            CONTACT
                        </h3>
                        <Phone href="tel:0000000000">
                            <FontAwesomeIcon icon={faPhone} style={{paddingRight: "8px", color: 'white'}}/>
                            07 89 61 16 00
                        </Phone>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
                    <h1>
                        SOCIETE DE DEVELOPPMENT INFORMATIQUE
                    </h1>
                    <p>
                        A.M.K. Dev est votre solution globale en développement informatique. De la conception de logiciels à la création de sites web, notre equide experte donne vie a vos projets digitaux.
                    </p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}>
                    <StyledImage src="/Image.png"
                                 alt="Image"
                                 width={0}
                                 height={0}
                                 sizes='100vw'
                    />
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
                    <h1 style={{color: "#8b5543"}}>NOTRE METIER</h1>
                    <p style={{color: "#8b5543"}}>Créer <strong>des solutions numériques qui inspirent.</strong> Grâce à notre expertise diversifiée, nous développons <strong>des applications et des sites web innovants</strong>, façonnons <strong>des expériences utilisateur exceptionnelles</strong> et concrétisons vos ambitions technologiques.</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
                    <h1>NOTRE</h1>
                    <h1 style={{color: "#8b5543"}}>SAVOIR-FAIRE</h1>
                    <h1>S'EXPRIME DANS</h1>
                    <h1 style={{color: "#8b5543"}}>3 DOMAINES</h1>
                </div>
                <StyledWrapper>
                    <Container style={{backgroundImage: 'url(Image1.png)'}}>
                        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '5px', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            <h1 style={{}}>Développement d'Applications</h1>
                            <Content>
                                <div style={{overflow: "hidden"}}>
                                    <p style={{maxWidth: "100%", paddingBottom: '10px'}}>Some Description Some Description</p>
                                </div>
                                <Button>DÉCOUVRIR</Button>
                            </Content>
                        </div>
                    </Container>
                    <Container style={{backgroundImage: 'url(Image2.png)'}}>
                        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '5px', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            <h1 style={{}}>Conception Web</h1>
                            <Content>
                                <div style={{overflow: "hidden"}}>
                                    <p style={{maxWidth: "100%", paddingBottom: '10px'}}>Some Description Some Description</p>
                                </div>
                                <Button>DÉCOUVRIR</Button>
                            </Content>
                        </div>
                    </Container>
                    <Container style={{backgroundImage: 'url(Image3.png)'}}>
                        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '5px', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            <h1 style={{}}>Bases de Données</h1>
                            <Content>
                                <div style={{overflow: "hidden"}}>
                                    <p style={{maxWidth: "100%", paddingBottom: '10px'}}>Some Description Some Description</p>
                                </div>
                                <Button>DÉCOUVRIR</Button>
                            </Content>
                        </div>
                    </Container>
                </StyledWrapper>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3px', borderBottom: '1px black solid', borderTop: '1px black solid'}}>
                    <div style={{ maxWidth: '75px', width: '100%', height: 'auto' }}>
                        <Image src="/logo_prisme.png"
                               alt="Prisme image"
                               width={0}
                               height={0}
                               sizes='100vw'
                               layout='responsive'
                        />
                    </div>
                </div>
                <div style={{backgroundColor: '#003056', display: 'flex', flexDirection: 'column', gap: '5px', padding: '20px 20px 20px 20px'}}>
                    <h6>A.M.K. Development</h6>
                    <h6>Address</h6>
                    <h6>Adresse email</h6>
                    <h6>Numéro de telephone</h6>
                    <h6>Cree par nous</h6>
                </div>
            </div>
        </>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  position: relative;
  width: 33.3%;
  padding-bottom: 33.3%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  transition: grid-template-rows 500ms;
  
  &:hover div{
    grid-template-rows: 1fr;
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: 40%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms;
`;





const Phone = styled.a`
  color: #211426;
  text-decoration: none;
  font-size: 26px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  
  &:hover {
    color: white;
  }
`;

const StyledImage = styled(Image)`
  width: auto;
  height: auto;

  object-fit: cover;

  @media (max-width: 1024px) {
    width: 60%;
  }
`;

const StyledLogo = styled(Image)`
  width: auto;
  height: auto;

  @media (max-width: 1024px) {
    width: 60%;
  }
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
    background-color: #414143;
    color: white;
  }
`;

export default HomePage;

//<p>A.M.K. Dev, est votre partenaire de confiance en développement informatique.
//                     Spécialisés dans une large gamme de domaines, nous créons des solutions sur mesure pour répondre à vos besoins uniques.
//                     De la conception de logiciels à la création de sites web, en passant par la gestion de bases de données, notre équipe experte transforme vos idées en réalité technologique.</p>