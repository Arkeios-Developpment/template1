import React from "react";
import styled from "styled-components";
import Image from "next/image";

const AboutSection = () => {
    return (
        <>
            <Container>
                <h1>
                    SOCIETE DE DEVELOPPMENT INFORMATIQUE
                </h1>
                <p>
                    A.M.K. Dev est votre solution globale en développement informatique. De la conception de logiciels à
                    la création de sites web, notre equide experte donne vie a vos projets digitaux.
                </p>
            </Container>
            <ImageContainer>
                <StyledImage src="/Image.png"
                             alt="Image"
                             width={0}
                             height={0}
                             sizes='100vw'
                />
            </ImageContainer>
            <Container>
                <h1>NOTRE METIER</h1>
                <p>Créer <strong>des solutions numériques qui inspirent.</strong> Grâce à notre expertise diversifiée, nous développons <strong>des applications et des sites web innovants</strong>, façonnons <strong>des expériences utilisateur exceptionnelles</strong> et concrétisons vos ambitions technologiques.</p>
            </Container>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "8px"}}>
                <h1>NOTRE</h1>
                <h1>SAVOIR-FAIRE</h1>
                <h1>S&apos;EXPRIME DANS</h1>
                <h1>3 DOMAINES</h1>
            </div>
        </>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: auto;
  height: auto;

  object-fit: cover;

  @media (max-width: 1024px) {
    width: 60%;
  }
`;

export default AboutSection;