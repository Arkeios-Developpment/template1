import InputContainer from "@/components/ContactPage/InputContainer";
import {
    faEnvelope as faSolidEnvelope,
    faMessage,
    faPaperPlane,
    faSquarePhone,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const FormContainer = () => {
  return (
      <Container>
          <form style={{width: '90%', maxWidth: '600px'}}>
              <InputWrapper>
                <InputContainer type='text' id='name' htmlFor='name' icon={faUser} label='Your Name'/>
                <InputContainer type='text' id='number' htmlFor='number' icon={faSquarePhone} label='Phone No.'/>
              </InputWrapper>
              <InputContainer type='email' id='email' htmlFor='email' icon={faSolidEnvelope} label='Email Id'/>
              <div style={{position: 'relative', paddingBottom: '29px'}}>
                <InputTextarea id='message' rows={8} required></InputTextarea>
                <InputLabel htmlFor='message'><FontAwesomeIcon style={{paddingRight: '5px'}} icon={faMessage} />Your Message</InputLabel>
              </div>
              <div style={{float: 'right', paddingRight: '5px'}}>
                <Button type='submit'><FontAwesomeIcon style={{paddingRight: '5px'}} icon={faPaperPlane} />SUBMIT</Button>
              </div>
              </form>
      </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputTextarea = styled.textarea`
  width: 100%;
  padding: 0;
  outline: 0;
  border: 1px solid black;
  color: #003056;
  background: transparent;
  font-size: 15px;
`;

const Button = styled.button`
  background-color: transparent;
  border: #003056 1px solid;
  padding: 10px 15px;
  text-align: center;
  color: #003056;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 22px;
  vertical-align: baseline;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  
  &:hover {
    background-color: #003056;
    color: white;
  }
  
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  color: #003056;
  cursor: text;
  transition: 0.2s;
  
  ${InputTextarea}:focus ~ &, ${InputTextarea}:valid ~ & {
    top: -35px;
    font-size: 14px;
  }
`;

const InputWrapper = styled.div`
  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default FormContainer