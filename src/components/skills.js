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
  gap: 280px;
  height: 120vh;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
    margin: 4em 0;
  }

  @media (max-width: 1200px) and (min-width: 1000px) {
    height: 200vh;
    gap: 160px;
  }
`;

const Title = styled.h1`
  color: rgb(30, 97, 97);
  border-top: 1px solid black;
  max-width: 140px;
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
`;

const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
`;

const SkillsTitle = styled.h3`
  color: rgb(30, 97, 97);
`;

const SkillsEntry = styled.h4`
  &:hover {
    cursor: pointer;
    color: rgb(30, 97, 97);
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;


const Skills = () => {
  return (
    <MainContainer>
      <Title>Skills</Title>
      <AboutUsContentContainer>
        <SkillsSectionContainer>
          <SkillsSection>
            <div>
              <SkillsTitle>
                Front-End:
              </SkillsTitle>
            </div>
            <SkillsList>
              <SkillsEntry>React Native</SkillsEntry>
              <SkillsEntry>ReactJS</SkillsEntry>
              <SkillsEntry>jQuery</SkillsEntry>
              <SkillsEntry>HTML5</SkillsEntry>
              <SkillsEntry>CSS3</SkillsEntry>
              <SkillsEntry>Cloud Firestore</SkillsEntry>
              <SkillsEntry>Redux</SkillsEntry>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
                Back-End:
              </SkillsTitle>
            </div>
            <SkillsList>
              <SkillsEntry>Node.js</SkillsEntry>
              <SkillsEntry>Express</SkillsEntry>
              <SkillsEntry>mySQL</SkillsEntry>
              <SkillsEntry>Sequelize</SkillsEntry>
              <SkillsEntry>MongoDB</SkillsEntry>
              <SkillsEntry>Mongoose</SkillsEntry>
              <SkillsEntry>PostgreSQL</SkillsEntry>
              <SkillsEntry>RESTful APIs</SkillsEntry>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
              Deployment & Testing:
              </SkillsTitle>
            </div>
            <SkillsList>
              <SkillsEntry>Gatsby</SkillsEntry>
              <SkillsEntry>NGINX</SkillsEntry>
              <SkillsEntry>Loader.io</SkillsEntry>
              <SkillsEntry>K6</SkillsEntry>
              <SkillsEntry>Artillery.io</SkillsEntry>
              <SkillsEntry>New Relic</SkillsEntry>
              <SkillsEntry>AWS EC2</SkillsEntry>
              <SkillsEntry>Enzyme</SkillsEntry>
              <SkillsEntry>Jest</SkillsEntry>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
                Developer Tools:
              </SkillsTitle>
            </div>
            <SkillsList>
              <SkillsEntry>Npm</SkillsEntry>
              <SkillsEntry>Git</SkillsEntry>
              <SkillsEntry>Axios</SkillsEntry>
              <SkillsEntry>Webpack</SkillsEntry>
              <SkillsEntry>Babel</SkillsEntry>
            </SkillsList>
          </SkillsSection>
        </SkillsSectionContainer>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default Skills;

