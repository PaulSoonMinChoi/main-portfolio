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

  @media (max-width: 375px) {
    height: 120vh;
    margin-bottom: 200px;
  }


  @media (max-width: 540px) {
    margin-bottom: 400px;
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
  max-width: 800px;
`;

const AboutUsIntro = styled.h3`
  color: rgb(78 237 237);
  line-height: 40px;
`;

const Paragraph = styled.p`
  line-height: 40px;
`;

const Span = styled.span`
  background: #191818;
  padding: 0 10px;
  color: rgb(78 237 237);
`;

const AboutUs = () => {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <MainContainer className="aboutus-section" >
      <Title><Span>About</Span></Title>
      <AboutUsContentContainer>
        {/* <Img src={Paul} alt="paulchoi" /> */}
        <AboutUsIntro>
          Hi. I'm Paul, a full stack software engineer living in California. I bring innovative ideas to life with design and code.
        </AboutUsIntro>
        <Paragraph>
          In my work I strive to bring real change and joy while maintaining usability and structure.
        </Paragraph>
        <Paragraph>
          Currently I'm looking for a full time software engineering based role. In addition I am working on
          a side project called <Link style={{color: 'rgb(78 237 237)', fontWeight: 'bold'}} to="/blu">Blu</Link> which allows gamers to connect with other
          gamers for better online multiplayer experiences.
        </Paragraph>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default AboutUs;

