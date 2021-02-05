import React from 'react';
import styled from "styled-components"
import blulanding from '../images/blulanding.png'
import bluhome from '../images/bluhome.png'
import bluteams from '../images/bluteams.png'
import bluleaderboards from '../images/bluleaderboards.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);


const Img = styled.img`
  border-radius: 5px;
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

const AlignedDiv = styled(SectionDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
    <AlignedDiv>
      <Img src={blulanding} alt="blulanding" />
      <CommentArea>Home page of Blu.</CommentArea>
    </AlignedDiv>
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
      <Paragraph>For starters, Blu is a personal application for Valorant players to form teams and compete against each other for ranking. Being a Valorant player myself, I became very stagnant on the current ranking system and wanted to mimic the feel of a Esports Tournament or league for the average player.  Working on Blu included making a slick UI, using Riot's API for player data, and creating a ranking system to give users something to achieve.</Paragraph>
      <SectionDiv>
        <Img src={bluhome} alt="bluhome" />
        <CommentArea>Home Page of Blu.</CommentArea>
      </SectionDiv>
      <SectionDiv>
        <Img src={bluteams} alt="bluteams" />
        <CommentArea>Explore Page of Blu (Teams)</CommentArea>
      </SectionDiv>
      <SectionDiv>
        <Img src={bluleaderboards} alt="bluleaderboards" />
        <CommentArea>Explore Page of Blu (leaderboards)</CommentArea>
      </SectionDiv>
      <Paragraph>Blu is still under development! If you have any questions about the application feel free to reach out to me!</Paragraph>
      <CommentSection>I am currently still working on Blu and looking to launch in the near future!</CommentSection>
    </SectionDiv>
  </>
)

export default BluPage;
