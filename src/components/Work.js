import React from 'react';
import './Work.css'
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import BluLogo from '../images/blulogo.png'
import GitHub from '../images/github-icon.svg'


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
  height: 120vh;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 50px;
    margin: 7em 0;
  }

  @media (max-width: 1200px) and (min-width: 1000px) {
    height: 140vh;
    margin-bottom: 15em;
    gap: 150px;
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

const MainWorkContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`;

const AppTitle = styled.h3`
  color: rgb(30, 97, 97);
`;

const OneLiner = styled.p`
  line-height: 40px;
`;

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 140px;
  width: 140px;
`;


const Work = () => {
  return (
    <MainContainer>
      <Title>Work</Title>
      <WorkList>
        <MainWorkContainer>
          <Img src={BluLogo} alt="BluLogo"/>
          <WorkContainer>
            <AppTitle>
              Blu
            </AppTitle>
            <OneLiner>
              App that allows gamers to connect with other gamers for better online multiplayer experiences.
            </OneLiner>
            <Link className="link" to="/blu/">Read More</Link>
          </WorkContainer>
        </MainWorkContainer>
        <MainWorkContainer>
          <Img src={GitHub} alt="BluLogo"/>
          <WorkContainer>
            <AppTitle>
              Getsy, Etsy E-Commerce Clone
            </AppTitle>
            <OneLiner>
              Single page application of display product page of a popular e-commerce website.
            </OneLiner>
            <Link className="link" to="/FEC/">Read More</Link>
          </WorkContainer>
        </MainWorkContainer>
        <MainWorkContainer>
          <Img src={GitHub} alt="BluLogo"/>
          <WorkContainer>
            <AppTitle>
              System Design & Scaling
            </AppTitle>
            <OneLiner>
              Scaling a legacy code base to optimize query times, deploy app onto aws, horizontally scale, benchmark rps (request per seconds), optimize, load-balance, cache, and handle production level traffic of 10,000 clients per second.
            </OneLiner>
            <Link className="link" to="/SDC/">Read More</Link>
          </WorkContainer>
        </MainWorkContainer>
      </WorkList>
    </MainContainer>
  )
}

export default Work;

