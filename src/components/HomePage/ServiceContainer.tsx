import React from "react";
import styled from "styled-components";

interface ServiceContainerProps {
    title: string;
    description: string;
    backgroundImage: string;
}

const ServiceContainer: React.FC<ServiceContainerProps> = ({ title, description, backgroundImage }) => {
    return (
        <Container style={{backgroundImage: `url(${backgroundImage})`}}>
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '5px', position: 'absolute' , top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h3>{title}</h3>
            <Content>
                <div style={{overflow: "hidden"}}>
                    <p style={{maxWidth: "100%", paddingBottom: '10px'}}>{description}</p>
                </div>
                <Button>DÉCOUVRIR</Button>
            </Content>
        </div>
    </Container>
    );
}

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

export default ServiceContainer;
