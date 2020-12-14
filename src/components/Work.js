import React from 'react';
import './Work.css'
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import BluLogo from '../images/blulogo.png'
import GitHub from '../images/github2.svg'


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
  height: 160vh;
  align-items: center;
  transition: transform 2s ease-in-out,opacity 1s ease-in-out;
  opacity: ${(props) => props.active ? '1' : `0`};

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

  @media (max-width: 375px) {
    height: 245vh;
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

const MainWorkContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`;

const AppTitle = styled.h3`
  color: rgb(78 237 237);
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

const Img2 = styled(Img)`
  height: 165px;
`;

const Span = styled.span`
  background: #000;
  padding: 0 10px;
  color: rgb(78 237 237);
`;

const Work = ({useOnScreen}) => {

  const [ref, visible] = useOnScreen({ threshold: 0.3 });

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <MainContainer ref={ref} active={visible} className="down-three" >
      <Title><Span>Work</Span></Title>
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
          <Img2 src={GitHub} alt="BluLogo"/>
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
          <Img2 src={GitHub} alt="BluLogo"/>
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

