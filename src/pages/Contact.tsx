import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as faRegularEnvelope} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

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
                <motion.div
                    style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', color: "#003056"}}
                    whileHover={{scale: 1.2, color: "#a2a1a3"}}
                >
                    <FontAwesomeIcon icon={faMobileScreenButton} size="lg" style={{color: 'inherit'}}/>
                <h6 style={{color: 'inherit'}}>07 89 61 16 00</h6>
                </motion.div>
                <motion.div
                    style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', color: "#003056"}}
                    whileHover={{scale: 1.2, color: "#a2a1a3"}}
                >
                    <FontAwesomeIcon icon={faRegularEnvelope} size="lg" style={{color: 'inherit'}}/>
                    <h6 style={{color: 'inherit'}}>07 89 61 16 00</h6>
                </motion.div>
                <motion.div
                     style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', color: "#003056"}}
                     whileHover={{scale: 1.2, color: "#a2a1a3"}}
                >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" style={{color: 'inherit'}}/>
                    <h6 style={{color: 'inherit'}}>07 89 61 16 00</h6>
                </motion.div>
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