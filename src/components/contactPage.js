import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'

const Img = styled.img`
  border: 4px solid rgb(235, 235, 235);
  border-radius: 5px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColumnDiv = styled(Div)`
  flex-direction: column;
`;

const ImageDiv = styled(Div)`
  gap: 50px;
`;

const VersesTitle = styled.h2`
  color: rgb(78 237 237);
`;

const BoldContent = styled(VersesTitle)`
  width: auto;
`;

const Text = styled.h4`
  color: rgb(235, 235, 235);
`;

const BoldText = styled(Text)`
  color: rgb(206 134 184);
  display: inline;
`;

const Paragraph = styled(Text)`
  line-height: 50px;
`;

const SectionDiv = styled.div`
  margin-bottom: 50px;
`;

const FlexDiv = styled(SectionDiv)`
  display: flex;
`;

const CommentSection = styled(Text)`
  font-style: oblique;
  color: rgb(206 134 184);
  line-height: 50px;
`;

const Icon = styled.a`
  color: rgb(235, 235, 235);
`;

const CommentArea = styled.h4`
  text-align: center;
  color: rgb(235 90 90);
  width: 300px;
  padding: 10px;
  background-color: #000000;
`;



const FECPage = () => (
  <>
    <SectionDiv>hello</SectionDiv>
  </>
)

export default FECPage