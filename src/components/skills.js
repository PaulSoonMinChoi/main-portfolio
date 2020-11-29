import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import reactlogo from '../images/react.svg'
import redux from '../images/redux.svg'
import jQuery from '../images/jQuery.svg'
import html5 from '../images/html5.svg'
import css3 from '../images/css3.svg'
import firebase from '../images/firebase.svg'
import nodejs from '../images/nodejs.svg'
import express from '../images/express.svg'
import mysql from '../images/mysql.svg'
import sequelize from '../images/sequelize.svg'
import mongodb from '../images/mongodb.svg'
import postgreSQL from '../images/postgreSQL.svg'
import gatsby from '../images/gatsby.svg'
import nginx from '../images/nginx.svg'
import loader from '../images/loader.svg'
import k6 from '../images/k6.png'
import artillery from '../images/artillery.jpg'
import newrelic from '../images/newrelic.svg'
import aws from '../images/aws.svg'
import enzyme from '../images/airbnb.svg'
import jest from '../images/jest.svg'
import npm from '../images/npm.svg'
import git from '../images/git.svg'
import webpack from '../images/webpack.svg'
import babel from '../images/babel.svg'


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
    height: 240vh;
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
  border-bottom: 1px solid rgb(231 231 231 / 50%);
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
`;

const SkillsTitle = styled.h3`
  color: rgb(78 237 237);
`;

const SkillsEntry = styled.h4`
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
  color: rgb(235, 235, 235);
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
`;

const Span = styled.span`
  background: #41464b;
  padding: 0 10px;
  color: rgb(78 237 237);
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 25%;
  padding: 4px;
  border: 1px solid rgb(0, 0, 0, 0.5);
`;

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
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
              <SkillContainer>
                <Logo src={reactlogo} alt="react" />
                <SkillsEntry>React</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={jQuery} alt="jquery" />
                <SkillsEntry>jQuery</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={html5} alt="html5" />
                <SkillsEntry>HTML5</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={css3} alt="css3" />
                <SkillsEntry>CSS3</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={firebase} alt="firebase" />
                <SkillsEntry>Firebase</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={redux} alt="redux" />
                <SkillsEntry>Redux</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
                Back-End:
              </SkillsTitle>
            </div>
            <SkillsList>
              <SkillContainer>
                <Logo src={nodejs} alt="Node.js" />
                <SkillsEntry>Node.js</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={express} alt="Express" />
                <SkillsEntry>Express</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={mysql} alt="mySQL" />
                <SkillsEntry>mySQL</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={sequelize} alt="Sequelize" />
                <SkillsEntry>Sequelize</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={mongodb} alt="MongoDB" />
                <SkillsEntry>MongoDB</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={postgreSQL} alt="PostgreSQL" />
                <SkillsEntry>PostgreSQL</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
              Deployment & Testing:
              </SkillsTitle>
            </div>
            <SkillsList>
            <SkillContainer>
                <Logo src={gatsby} alt="Gatsby" />
                <SkillsEntry>Gatsby</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={nginx} alt="NGINX" />
                <SkillsEntry>NGINX</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={loader} alt="Loader.io" />
                <SkillsEntry>Loader.io</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={k6} alt="K6" />
                <SkillsEntry>K6</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={artillery} alt="Artillery.io" />
                <SkillsEntry>Artillery.io</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={newrelic} alt="New Relic" />
                <SkillsEntry>New Relic</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={aws} alt="AWS EC2" />
                <SkillsEntry>AWS EC2</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={enzyme } alt="Enzyme" />
                <SkillsEntry>Enzyme</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={jest} alt="Jest" />
                <SkillsEntry>Jest</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>
                Developer Tools:
              </SkillsTitle>
            </div>
            <SkillsList>
            <SkillContainer>
                <Logo src={npm} alt="Npm" />
                <SkillsEntry>Npm</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={git} alt="Git" />
                <SkillsEntry>Git</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={webpack} alt="Webpack" />
                <SkillsEntry>Webpack</SkillsEntry>
              </SkillContainer>
              <SkillContainer>
                <Logo src={babel} alt="Babel" />
                <SkillsEntry>Babel</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
        </SkillsSectionContainer>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default Skills;

