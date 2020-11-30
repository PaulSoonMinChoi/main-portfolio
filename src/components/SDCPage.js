import React from 'react';
import styled from "styled-components"
import diagram from '../images/diagram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import journal from '../images/journal.pdf'

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

const VersesTitle = styled.h2`
  color: rgb(78 237 237);
`;

const BoldContent = styled(VersesTitle)`
  width: auto;
`;

const Text = styled.h4`
  color: rgb(235, 235, 235);
  line-height: 30px;
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
  gap: 50px;
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

const SDCPage = () => (
  <>
    <SectionDiv>
      <Div>
        <ColumnDiv>
          <Img src={diagram} alt="diagram" />
          <CommentArea>System Architecture Design sometimes simply known as System Design is a conceptual representation of the components and subcomponents that reflects the behaviour of a system.</CommentArea>
        </ColumnDiv>
      </Div>
    </SectionDiv>
    <br></br>
    <SectionDiv>
      <BoldContent>Tech Stacks: </BoldContent>
      <Text>Express | React | NodeJS | Axios | AWS | Redux | PostgreSQL | GraphQL</Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>GitHub: </BoldContent>
      <FlexDiv>
        <Icon href="https://github.com/SDCCopyTim/SDC-Overview" target="_blank" >
          <FontAwesomeIcon className='social-icons' icon={["fab",
          "github"]} size="2x"/>
          <Text>Repository</Text>
        </Icon>
        <Icon href="https://docs.google.com/document/d/1vAPTMHX_nSYhwWwbTKrCwfz1l4qac6xrDeA6MSjEpWY/edit?usp=sharing" target="_blank" >
          <FontAwesomeIcon className='social-icons' icon={["fab",
          "google"]} size="2x"/>
          <Text>Google Docs Journal</Text>
        </Icon>
      </FlexDiv>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>High Level Overview: </BoldContent>
      <Text>1. Work with a <BoldText>legacy code base</BoldText></Text>
      <Text>2. Each team member is responsible for <BoldText>one service (1 person = one service)</BoldText></Text>
      <Text>4. Individually populate each service with a significant volume of data that requires <BoldText>impressive speed and efficiency</BoldText> for the handling of that data</Text>
      <Text>5. Individually perform an <BoldText>analysis of database technology</BoldText> for that service </Text>
      <Text>6. Work together to get all services supporting <BoldText>100 requests per second</BoldText> to support each team member's individual proxy server </Text>
      <Text>7. Individually <BoldText>test</BoldText> your service and proxy at scale <BoldText>(up to 10K requests per second)</BoldText> while making performance improvements in an attempt to support this level of load</Text>
    </SectionDiv>
    <SectionDiv>
      <BoldContent>Small Summary: </BoldContent>
      <Paragraph>
        <Div>
          <embed src={journal} width="900px" height="1150px" />
        </Div>
      </Paragraph>
      <SectionDiv>
      </SectionDiv>
      <BoldContent>Main Concepts Learned: </BoldContent>
      <CommentSection>How to successfully scaled a service horizontally to handle production level traffic of 10K RPS, work with a legacy code base and how to navigate through one, stress test a service with tools like Loader.io Artillery K6 and with the help of new relic, implement a load balancer like NGINX (reverse proxy), different caching and load balancing techniques.</CommentSection>
    </SectionDiv>
  </>
)

export default SDCPage