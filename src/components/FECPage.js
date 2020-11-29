import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import fecgif from '../images/gifs/fecgif.gif'
import etsygif from '../images/gifs/etsygif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

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
    <ImageDiv>
      <ColumnDiv>
        <Img src={fecgif} alt="FEC gif" />
        <CommentArea>Getsy Application</CommentArea>
      </ColumnDiv>
      <VersesTitle>VS</VersesTitle>
      <ColumnDiv>
        <Img src={etsygif} alt="Etsy gif" />
        <CommentArea>Etsy's Application</CommentArea>
      </ColumnDiv>
    </ImageDiv>
    <SectionDiv>
      <BoldContent>Tech Stacks: </BoldContent>
      <Text>React | Express | Node.js | Axios | AWS EC2 | mySQL</Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>GitHub: </BoldContent>
      <FlexDiv>
        <Icon href="https://github.com/hrla39copypasta/Etsy-NavBar" target="_blank" >
          <FontAwesomeIcon className='social-icons' icon={["fab",
          "github"]} size="2x"/>
          <Text>Repository</Text>
        </Icon>
      </FlexDiv>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>High Level Overview: </BoldContent>
      <Text>1. Replicate a <BoldText>module heavy</BoldText> website visually</Text>
      <Text>2. Generate <BoldText>1000+ unique data entries</BoldText> within the application</Text>
      <Text>3. Incoperate all modules together with a <BoldText>proxy server</BoldText></Text>
      <Text>4. Host finished single page application on a <BoldText>aws ec2 t2.micro instance</BoldText></Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>Small Summary: </BoldContent>
      <Paragraph>
        To start we were tasked with finding a module heavy website (preferably an E-commerce website) so we chose <BoldText>Etsy</BoldText>.
        Then my team of 5 engineers in total, had to decide which part of the <BoldText>single page application</BoldText> we wanted to split.
        Therefore I chose the <BoldText>navbar</BoldText> portion of Etsy's display product page. Some challenges I faced were figuring out how to query data entries depending on the user's input value. This challenge was easily solved with a handy tool in mySQL called like or also known as the <BoldText>(%) wildcard</BoldText>. This allowed my search bar functionality to become quick with responding to the user's inputs and displaying the correct data entries. After launching <BoldText>1 AWS EC2 t2.micro instance and using a proxy server</BoldText> to combine all our modules together we then deployed the single page application. In conclusion to this short journey, I learned the importance of <BoldText>agile workflow and how service oriented architecture</BoldText> works well within a team.
      </Paragraph>
      <BoldContent>Main Concepts Learned: </BoldContent>
      <CommentSection>
        Flex box, CSS grid, Styled Components, generating scripts for mock data, AWS EC2 Instance (really slow btw...), relational database mySQL, responsive layout design, and the importance of file structure.
      </CommentSection>
    </SectionDiv>
  </>
)

export default FECPage