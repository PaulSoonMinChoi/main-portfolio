import React from 'react';
import styled from "styled-components"

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

const FECPage = () => (
  <>
    <SectionDiv>
      <ColumnDiv>
      <BoldContent>Send me a direct message with this form!</BoldContent>
      <form action="https://formspree.io/f/xnqobbea" method="POST">
        <FlexDiv>
          <Div2>
            <Input type="text" name="name" placeholder="name"></Input>
          </Div2>
          <Div2>
            <Input type="text" name="email" placeholder="email"></Input>
          </Div2>
        </FlexDiv>
        <Div>
          <Input type="text" name="subject" placeholder="subject"></Input>
        </Div>
        <Div>
          <TextArea type="text" name="message" placeholder="message"></TextArea>
        </Div>
        <Div>
          <Button type='submit'>Send</Button>
        </Div>
      </form>
      </ColumnDiv>
    </SectionDiv>
  </>
)

export default FECPage