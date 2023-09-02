import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import HeaderBanner from "@/components/HomePage/HeaderBanner";
import AboutSection from "@/components/HomePage/AboutSection";

const HomePage = () => {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                <HeaderBanner/>
                <AboutSection/>
                <StyledWrapper>
                    <Container style={{backgroundImage: 'url(Image1.png)'}}>
                        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '5px', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                            <h3 style={{}}>Développement d'Applications</h3>
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
                            <h3 style={{}}>Conception Web</h3>
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
                            <h3 style={{}}>Bases de Données</h3>
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