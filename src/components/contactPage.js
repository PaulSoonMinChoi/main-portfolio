import React from 'react';
import styled from "styled-components"
import './contactPage.css'

const Div = styled.div`
  display: flex;
  margin: 40px;
  align-items: center;

  @media (max-width: 375px) {
    margin: 40px 0 40px;
  }
`;

const Div2 = styled.div`
  display: flex;
  margin: 40px 40px 0 40px;
  align-items: center;

  @media (max-width: 375px) {
    margin: 40px 0 40px;
  }
`;

const ColumnDiv = styled(Div)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VersesTitle = styled.h2`
  color: rgb(78 237 237);
`;

const BoldContent = styled(VersesTitle)`
  width: auto;
  margin-bottom: 0;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  color: rgb(235, 235, 235);
`;

const SectionDiv = styled.div`
  margin-top: 100px;
`;

const FlexDiv = styled(SectionDiv)`
  display: flex;
  gap: 50px;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border-style: none;
  border-width: 5px;
  background: rgb(194 229 229);

  &:focus {
    background: rgb(151 204 204);
  }

  &:hover {
    background: rgb(151 204 204);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  border-style: none;
  background: rgb(194 229 229);

  &:focus {
    border-color: teal;
    background: rgb(151 204 204);
  }

  &:hover {
    background: rgb(151 204 204);
  }

`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  background: rgb(78 237 237);
  border-style: none;

  &:hover {
    background: rgb(29 177 177);
  }
`;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;
`;

const FormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: ${(props) => props.used ? `2px solid red;` : `2px solid #9b9b9b;`};
  outline: 0;
  font-size: 1rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-top: 10px;
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #7FA7F4, #63eb97);
    border-image-slice: 1;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #b2b2b2;
`;

const Form = styled.form`
  width: 100%;
`;


const contactPage = () => (
  <>
    <SectionDiv>
      <ColumnDiv>
      <BoldContent>Send me a direct message with this form!</BoldContent>
      <Form action="https://formspree.io/f/xnqobbea" method="POST">
        <FlexDiv>
          <FormGroup >
            <FormInput type="input" className="form__field" placeholder="name" name="name" required />
            <FormLabel htmlFor="name" className="form__label">name</FormLabel>
          </FormGroup>
          <FormGroup >
            <FormInput type="input" className="form__field" placeholder="email" name="email" required />
            <FormLabel htmlFor="email" className="form__label">email</FormLabel>
          </FormGroup>
        </FlexDiv>
        <Div>
          <FormGroup >
            <FormInput type="input" className="form__field" placeholder="subject" name="subject" required />
            <FormLabel htmlFor="subject" className="form__label">subject</FormLabel>
          </FormGroup>
        </Div>
        <Div>
          <TextArea type="text" name="message" placeholder="message"></TextArea>
        </Div>
        <Div>
          <Button type='submit'>Send</Button>
        </Div>
      </Form>
      </ColumnDiv>
    </SectionDiv>
  </>
)

export default contactPage;