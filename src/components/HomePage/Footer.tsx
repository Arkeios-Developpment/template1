import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {useRouter} from "next/router";

const Footer = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/contact');
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', paddingBottom: '20px'}}>
                <div style={{maxWidth: '60px', width: '100%', height: 'auto', display: 'flex'}}>
                    <Image src="/logo_prisme.png"
                       alt="Prisme image"
                       width={0}
                       height={0}
                       sizes='100vw'
                       layout='responsive'/>
                </div>
            </div>
            <Container>
                <div style={{padding: "20px 0 15px 0"}}>
                    <Button onClick={handleClick}>Contactez Nous</Button>
                </div>
                <h6>A.M.K. Development</h6>
                <h6>Address</h6>
                <h6>Adresse email</h6>
                <h6>07 89 61 16 00</h6>
                <h6>Crée par nous</h6>
            </Container>
        </div>
    );
}

const Container = styled.div`
  background-color: #bf9656;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 0 20px 20px;
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
  max-width: fit-content;

  &:hover {
    background-color: white;
    color: #bf9656;
  }
`;

export default Footer;
