import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <h6>A.M.K. Development</h6>
            <h6>Address</h6>
            <h6>Adresse email</h6>
            <h6>07 89 61 16 00</h6>
            <h6>Crée par nous</h6>
        </Container>
    );
}

const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 20px 20px 20px;
`;

export default Footer;
