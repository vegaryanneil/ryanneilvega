import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import{ init } from '@emailjs/browser';
init("user_srKxIcRK5RrQrHJAYCr3I");

export const EmailUsForm= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k12vzlc', 'template_9cy56jf', form.current, 'user_srKxIcRK5RrQrHJAYCr3I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </Form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div
`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
`
const Form = styled.form
`
display: flex;
flex-direction: column;
font-size: calc(24px + (50 - 42) * (100vw - 640px) / (1439 - 640));
`
const FormLabel = styled.span
`
  display: block;
  text-align: left;
`
export default EmailUsForm;