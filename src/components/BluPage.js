import React from 'react';
import styled, { keyframes } from "styled-components"
import bluapp from '../images/bluapp.png'
import bluapp2 from '../images/bluapp2.png'
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

const CommentArea = styled.h4`
  text-align: center;
  color: rgb(235 90 90);
  width: 300px;
  padding: 10px;
  background-color: #000000;
`;

const Icon = styled.a`
  color: rgb(235, 235, 235);
`;

const BluPage = () => (
  <>
    <SectionDiv>
      <Img src={bluapp} alt="bluapp" />
      <CommentArea>Home page of Blu.</CommentArea>
    </SectionDiv>
    <br></br>
    <SectionDiv>
      <BoldContent>Tech Stacks: </BoldContent>
      <Text>Express | React | NodeJS | Axios | AWS | Redux | PostgreSQL | GraphQL</Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>GitHub: </BoldContent>
      <FlexDiv>
        <Icon href="https://github.com/Blu-Organization/Blu-Version-2" target="_blank" >
          <FontAwesomeIcon className='social-icons' icon={["fab",
          "github"]} size="2x"/>
          <Text>Repository</Text>
        </Icon>
      </FlexDiv>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>High Level Overview: </BoldContent>
      <Text>1. Make a functioning app <BoldText>within 1 week</BoldText></Text>
      <Text>2. Work in a  <BoldText>monolithic</BoldText> architecture</Text>
      <Text>4. Solve a  <BoldText>"issue or problem" </BoldText></Text>
      <Text>5. Deploy app with <BoldText>AWS</BoldText></Text>
      <Text>6. Use <BoldText>API's</BoldText> for real data</Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>Small Summary: </BoldContent>
      <Paragraph>To start we had to figure out how we can help gamers find friends faster. Few questions that arose during the daily stand-ups:  "How can people use our app and benifit from using it?" "Will our app solve the problem of helping gamers find friends to play with, with ease?" Next, the planning was tough since we had too many features we wanted to implement in so little time. Therefore, me and 2 other engineers built out a blue print of what the following application will contain. This included the modules for each section and how each page will correspond to each other. In addition, we needed to figure out what database management system to use as well as the schema structure. Then came the part of designing a mock-up of what the application would look like. Daily stand-ups were a must in order to keep the whole team up to date. Some features included allowed user's to search and add friends, search games through a list or through the search bar, and start up a call with your created lobby of friends.</Paragraph>
      <SectionDiv>
        <Img src={bluapp2} alt="bluapp2" />
        <CommentArea>Popular Games Search List.</CommentArea>
      </SectionDiv>
      <Paragraph>With struggles and time constraints we were able to produce a simple mock up of a game application within a week!</Paragraph>
      <CommentSection>We are currently still working on Blu and looking to launch in the near future!</CommentSection>
    </SectionDiv>
  </>
)

export default BluPage