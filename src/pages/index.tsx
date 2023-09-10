import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import HeaderBanner from "@/components/HomePage/HeaderBanner";
import AboutSection from "@/components/HomePage/AboutSection";
import ServiceContainer from "@/components/HomePage/ServiceContainer";
import Footer from "@/components/HomePage/Footer";

const HomePage = () => {
    return (
        <PageContainer>
            <HeaderBanner/>
            <AboutSection/>
            <ServiceWrapper>
                <ServiceContainer title={"Développement d'Applications"}
                                  description={"Some Description Some Description"} backgroundImage={"Image1.png"}/>
                <ServiceContainer title={"Conception Web"} description={"Some Description Some Description"}
                                  backgroundImage={"Image2.png"}/>
                <ServiceContainer title={"Bases de Données"} description={"Some Description Some Description"}
                                  backgroundImage={"Image3.png"}/>
            </ServiceWrapper>
            <Footer/>
        </PageContainer>
    );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: initial;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default HomePage;

//<p>A.M.K. Dev, est votre partenaire de confiance en développement informatique.
//                     Spécialisés dans une large gamme de domaines, nous créons des solutions sur mesure pour répondre à vos besoins uniques.
//                     De la conception de logiciels à la création de sites web, en passant par la gestion de bases de données, notre équipe experte transforme vos idées en réalité technologique.</p>