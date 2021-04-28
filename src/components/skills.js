import React from "react"
import styled, { keyframes } from "styled-components"
import reactlogo from "../images/react.svg"
import redux from "../images/redux.svg"
import html5 from "../images/html5.svg"
import css3 from "../images/css3.svg"
import nodejs from "../images/nodejs.svg"
import express from "../images/express.svg"
import mysql from "../images/mysql.svg"
import aws from "../images/aws.svg"
import git from "../images/git.svg"
import webpack from "../images/webpack.svg"
import babel from "../images/babel.svg"
import mongoDB from "../images/mongodb.svg"

const animationFrames2 = keyframes`
  0% {
    opacity:0;
    transform:  translate(-90px, 0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`

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
`

const hvrbobfloat = keyframes`
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 280px;
  height: 130vh;
  align-items: center;
  transition: transform 2s ease-in-out, opacity 1s ease-in-out;
  opacity: ${props => (props.active ? "1" : `0`)};

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
    margin-bottom: 200px;
  }

  @media (max-width: 540px) {
    margin-bottom: 400px;
  }
`

const Title = styled.h1`
  color: rgb(78 237 237);
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
`

const AboutUsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;

  @media (max-width: 1000px) {
    width: auto;
  }
`

const SkillsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
`

const SkillsTitle = styled.h3`
  color: rgb(78 237 237);
`

const SkillsEntry = styled.h4`
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
  color: rgb(235, 235, 235);
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 37px;
  border-bottom: 1px solid rgba(224, 224, 224, 0.5);
`

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 25%;
  padding: 4px;
  border: 1px solid rgb(0, 0, 0, 0.5);
`

const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  &:hover {
    cursor: pointer;
    color: rgb(30, 97, 97);
    -webkit-animation-name: ${hvrbobfloat}, ${hvrbob};
    animation-name: ${hvrbobfloat}, ${hvrbob};
    -webkit-animation-duration: 0.3s, 1.5s;
    animation-duration: 0.3s, 1.5s;
    -webkit-animation-delay: 0s, 0.3s;
    animation-delay: 0s, 0.3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }
`

const Skills = ({ useOnScreen }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 })

  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <MainContainer ref={ref} active={visible} className="down-two">
      <Title>Skills</Title>
      <AboutUsContentContainer>
        <SkillsSectionContainer>
          <SkillsSection>
            <div>
              <SkillsTitle>Front-End:</SkillsTitle>
            </div>
            <SkillsList>
              <SkillContainer>
                <Logo src={reactlogo} alt="react" />
                <SkillsEntry>React</SkillsEntry>
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
                <Logo src={redux} alt="redux" />
                <SkillsEntry>Redux</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>Back-End:</SkillsTitle>
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
                <Logo src={mongoDB} alt="mongoDB" />
                <SkillsEntry>MongoDB</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <div>
              <SkillsTitle>Developer Tools:</SkillsTitle>
            </div>
            <SkillsList>
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
              <SkillContainer>
                <Logo src={aws} alt="AWS" />
                <SkillsEntry>AWS</SkillsEntry>
              </SkillContainer>
            </SkillsList>
          </SkillsSection>
        </SkillsSectionContainer>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default Skills
