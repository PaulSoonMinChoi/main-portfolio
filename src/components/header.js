import { Link } from "gatsby"
import './header.css'
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip';

library.add(fab);

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
  padding: 1.45rem 1.0875rem;
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

const Opening = styled.div`
  height: 90vh;
  background-color: lightblue;
`;

const HeaderLine = styled.h1`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const Span = styled.span`
  background: #41464b;
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

const Header = ({ siteTitle, subTitle }) => {

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const titleArr = siteTitle.split('');
  return (
    <MainHeader>
      <HeaderDiv>
        <h1 style={{ margin: 0 }}>
          <TitleContainer >
            {titleArr.map((char) => {
              return (
                <CharDiv>
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
        <SingleCircle>
          <div class="outer-circle">
            <div class="inner-circle"></div>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
          </div>
        </SingleCircle>
        <SecondCircle>
          <div class="outer-circle">
            <div class="inner-circle"></div>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
          </div>
        </SecondCircle>
        <ThirdCircle>
          <div class="outer-circle">
            <div class="inner-circle"></div>
            <span className="span1"></span>
            <span className="span2"></span>
            <span className="span3"></span>
            <span className="span4"></span>
          </div>
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