import React, {useState} from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ServiceContainerProps {
    type: string;
    id: string;
    htmlFor: string;
    icon: IconDefinition;
    label: string;
}

const InputContainer: React.FC<ServiceContainerProps> = ({type, id, htmlFor, icon, label}) => {
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newString = event.target.value;
        setIsValid(newString === '');
    };

    return (
        <Container>
            <InputField type={type} id={id} onChange={handleChange} required/>
            <InputLabel htmlFor={htmlFor} isValid={isValid}><FontAwesomeIcon style={{paddingRight: '5px'}} icon={icon} />{label}</InputLabel>
        </Container>
    );
}

const Container = styled.div`
  position: relative;
  padding-bottom: 30px;
  flex-basis: 46%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 0 0 10px;
  outline: 0;
  border: 1px solid black;
  color: black;
  background: transparent;
  font-size: 15px;
`;

const InputLabel = styled.label<{ isValid: Boolean }>`
  height: 100%;
  position: absolute;
  left: 0;
  top: ${props => (props.isValid ? 0 : -30)}px;
  font-size: ${props => (props.isValid ? 16 : 14)}px;
  padding: 5px;
  color: black;
  cursor: text;
  transition: 0.2s;

  ${InputField}:focus + & {
    top: -30px;
    font-size: 14px;
  }
`;

export default InputContainer;
