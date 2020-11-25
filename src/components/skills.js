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

const hvrbob = keyframes`
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const hvrbobfloat = keyframes`
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 280px;
  height: 130vh;
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

  @media (max-width: 375px) {
    height: 200vh;
    margin: 0;
  }
`;

const Title = styled.h1`
  color: rgb(30, 97, 97);
  width: 30%;
  text-align: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  line-height: 0.1em;
  margin: 10px 0 20px;
  animation: ${animationFrames2} 2s ease;
  letter-spacing: 5px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
    width: 60%;
    margin-bottom: 40px;
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
  // background-image: linear-gradient(to right, rgb(71, 158, 158), rgb(146, 185, 185));
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  &:hover {
    cursor: pointer;
    color: rgb(30, 97, 97);
    -webkit-animation-name: ${hvrbobfloat}, ${hvrbob};
    animation-name: ${hvrbobfloat}, ${hvrbob};
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Span = styled.span`
  background: rgb(239 239 239);
  padding: 0 10px;
`;


const Skills = () => {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <MainContainer>
      <Title><Span>Skills</Span></Title>
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

