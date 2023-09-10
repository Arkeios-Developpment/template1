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
              <div style={{position: 'relative', paddingBottom: '30px'}}>
                <InputTextarea id='message' rows={8} required></InputTextarea>
                <InputLabel htmlFor='message'><FontAwesomeIcon style={{paddingRight: '5px'}} icon={faMessage} />Your Message</InputLabel>
              </div>
              <div style={{clear: 'both', float: 'none', width: '100%', textAlign: 'right'}}>
                  <Button type='submit'><FontAwesomeIcon style={{paddingRight: '5px'}} icon={faPaperPlane} />SUBMIT </Button>
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
  padding: 10px 0 0 10px;
  outline: 0;
  border: 1px solid black;
  color: black;
  background: transparent;
  font-size: 15px;
`;

const Button = styled.button`
  color: black;
  outline: none;
  background: transparent;
  border: 1px solid black;
  width: 100%;
  cursor: pointer;
`;

const InputLabel = styled.label`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
  color: black;
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