import './header.css'
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const rotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const animationFrames = keyframes`
  0% {
    opacity:0;
    transform:  translate(-10px,-45px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`;

const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const HeaderDiv = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.a`
  color: rgb(235, 235, 235);
  animation: ${animationFrames} ${(props) => props.time ? props.time : 0}s ease;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  animation: ${animationFrames} 2s ease;
  padding-left: 10px;
  @media (max-width: 375px) {
    flex-wrap: wrap;
    width: 375px;
  }
`;

const CharDiv = styled.div`
  opacity: 0.90;
  cursor: pointer;
  &:hover {
    opacity: 1.5;
  }
`;

const Char = styled.p`
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  font-size: 50px;
`;

const SubTitleDiv = styled.div`
  animation: ${animationFrames} 2s ease;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e9e9e9;;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const Span = styled.span`
  background: #000;
  padding: 0 10px;
  color: rgb(235, 235, 235);
`;

const CircleContainer = styled.div`
  animation: ${animationFrames} 2s ease;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SingleCircle = styled.div`
  padding: 60px 30px 0 30px;
`;

const SecondCircle = styled(SingleCircle)`
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ThirdCircle = styled(SingleCircle)`
  @media (max-width: 800px) {
    display: none;
  }
`;

const OuterCircle = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  background: ${(props) => props.active ? `linear-gradient(#14ffe9, #ffeb3b, #ff00e0)` : `black`};
  border-radius: 50%;
  animation: ${rotate} 1.5s linear infinite;
`;

const InnerCircle = styled.div`
  height: 180px;
  width: 180px;
  position: absolute;
  background: ${(props) => props.active ? `rgb(213 213 213 / 72%)` : `black`};
  top: 10px;
  left: 10px;
  border-radius: 50%;
  z-index: 9;
`;

const Span1 = styled.span`
  filter: blur(5px);
  position: absolute;
  height: 200px;
  width: 200px;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  border-radius: 50%;
`;

const Span2 = styled.span`
  filter: blur(10px);
`;

const Span3 = styled.span`
  filter: blur(25px);
`;

const Span4 = styled.span`
  filter: blur(150px);
`;


const Header = ({ siteTitle, subTitle }) => {

  const [hasMounted, setHasMounted] = React.useState(false);
  const [ball, setBall] = useState(true);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const turnOff = () => {
    setBall(!ball);
  }

  const titleArr = siteTitle.split('');

  return (
    <MainHeader>
      <HeaderDiv>
        <h1 style={{ margin: 0 }}>
          <TitleContainer >
            {titleArr.map((char, index) => {
              return (
                <CharDiv key={index}>
                  <Char className='title-char' data-effect="solid" data-tip="Problem solver">{char}</Char>
                </CharDiv>
              )
          })}
          </TitleContainer>
        </h1>
          <SubTitleDiv><Span>{subTitle}</Span></SubTitleDiv>
        <IconContainer>
          <Icon time={3} href="https://github.com/PaulSoonMinChoi" target="_blank" >
            <FontAwesomeIcon className='social-icons' icon={["fab",
            "github"]} size="2x"/>
          </Icon>
          <Icon time={3} href="https://www.linkedin.com/in/paulsoonminchoi/" target="_blank" >
            <FontAwesomeIcon className='social-icons' icon={['fab', 'linkedin']} size="2x"/>
          </Icon>
          <Icon time={3} href="https://www.instagram.com/paulchoiiii/" target="_blank" >
            <FontAwesomeIcon className='social-icons' icon={['fab', 'instagram']} size="2x"/>
          </Icon>
        </IconContainer>
      </HeaderDiv>
      <CircleContainer>
        <SingleCircle >
          <OuterCircle onClick={turnOff} active={ball}>
            <InnerCircle active={ball}></InnerCircle>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
          </OuterCircle>
        </SingleCircle>
        <SecondCircle>
          <OuterCircle onClick={turnOff} active={ball}>
            <InnerCircle active={ball}></InnerCircle>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
          </OuterCircle>
        </SecondCircle>
        <ThirdCircle>
          <OuterCircle onClick={turnOff} active={ball}>
            <InnerCircle active={ball}></InnerCircle>
            <Span1></Span1>
            <Span2></Span2>
            <Span3></Span3>
            <Span4></Span4>
          </OuterCircle>
        </ThirdCircle>
      </CircleContainer>
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header