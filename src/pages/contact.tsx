import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreenButton, faUser, faSquarePhone, faEnvelope as faSolidEnvelope, faMessage, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faRegularEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import FormContainer from "@/components/ContactPage/FormContainer";


const Contact = () => {
    return (
        <PageContainer>
            <div style={{paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{fontSize: '44px'}}>CONTACTEZ</h2>
                <h1 style={{fontSize: '44px'}}>AMK</h1>
            </div>
            <div style={{
                display: 'flex',
                gap: '250px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faMobileScreenButton} size="lg" style={{color: 'black'}}/>
                <h6 style={{color: 'black'}}>07 89 61 16 00</h6>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faRegularEnvelope} size="lg" style={{color: 'black'}}/>
                    <h6 style={{color: 'black'}}>07 89 61 16 00</h6>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: 'black'}}/>
                    <h6 style={{color: 'black'}}>07 89 61 16 00</h6>
                </div>
            </div>
            <FormContainer/>
        </PageContainer>
    );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default Contact;