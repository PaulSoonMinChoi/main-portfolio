import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'

const animationFrames2 = keyframes`
  0% {
    opacity:0;
    transform:  translate(-90px, 0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 250px;
  height: 80vh;
  align-items: center;

  @media (max-width: 1000px)  {
    flex-direction: column;
    height: 80vh;
    gap: 50px;
  }

  @media (max-width: 1090px) and (min-width: 1000px) {
    height: 110vh;
    gap: 200px;
  }
`;

const Title = styled.h1`
  color: rgb(30, 97, 97);
  border-top: 1px solid black;
  max-width: 142px;
  padding-top: 10px;
  padding-bottom: 10px;
  animation: ${animationFrames2} 2s ease;
  letter-spacing: 5px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
  }
`;

const AboutUsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`;

const AboutUsIntro = styled.h3`
  color: rgb(30, 97, 97);
  line-height: 40px;
`;

const Paragraph = styled.p`
  line-height: 40px;
`;


const AboutUs = () => {
  return (
    <MainContainer>
      <Title>About</Title>
      <AboutUsContentContainer>
        <AboutUsIntro>
          Hi. I'm Paul, a full stack software engineer living in California. I bring innovative ideas to life with design and code.
        </AboutUsIntro>
        <Paragraph>
          In my work I strive to bring real change and joy while maintaining usability and structure.
        </Paragraph>
        <Paragraph>
          Currently I'm looking for a full time software engineering based role. In addition I am working on
          a side project called <Link style={{color: 'blue'}} to="/blu">Blu</Link> which allows gamers to connect with other
          gamers for better online multiplayer experiences.
        </Paragraph>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default AboutUs;

