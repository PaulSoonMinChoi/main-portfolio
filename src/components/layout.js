import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import BabelLogo from '../images/babel.svg'
import ReactLogo from '../images/react.svg'
import WebpackLogo from '../images/webpack.svg'
import GraphQlLogo from '../images/graphql.svg'
import GatsbyLogo from '../images/gatsby.svg'
import chevup from '../images/chevup.svg'
import chevdown from '../images/chevdown.svg'

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

const pulsate = keyframes`
  0% {
      transform: scale(1, 1);
  }

  50% {
      transform: scale(1.2, 1.2);
  }

  100% {
      transform: scale(1, 1);
  }
`;

const MainContentContainer = styled.div`
  margin: 0 10em;
  display: flex;
  flex-direction: column;
  padding: 0 1.0875rem 1.45rem;

  @media (max-width: 800px) {
    margin: 0 2em;
  }
`;

const Line = styled.div`
  border-top: ${(props) => props.active ? `none` : `1px solid rgb(231 231 231 / 50%);`};
  border-bottom: 1px solid rgb(231 231 231 / 50%);
  margin: ${(props) => props.active ? `0 0 7em 0` : `0 15em 0 15em`};
  height: ${(props) => props.active ? `6vh` : `10vh`};
  position: ${(props) => props.active ? `sticky` : `none`};
  top: ${(props) => props.active ? 0 : `none`};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  z-index: 1000;
  background: ${(props) => props.active ? `#000` : `none`};
  animation: ${animationFrames} 3s ease;

  @media (max-width: 900px) {
    margin: 0 0 8em 0;
    flex-direction: row;
    border-bottom: 1px solid rgb(0, 0, 0, 0.5);
    border-top: 1px solid rgb(0, 0, 0, 0.5);
    height: 10vh;
    background-position: center;

  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  color: rgb(235, 235, 235);
  font-style: italic;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const Icon = styled.a`
  color: inherit;
  padding: 10px;
  &:hover {
    transform: scale(1.2);
    transition: all 0.80s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const Img = styled.img`
  border-radius: 50%;
  height: 35px;
  width: 35px;
`;

const NavbarItems = styled.p`
  margin: 0;
  cursor: pointer;
`;

const ButtonContainer = styled.span`
  cursor: pointer;
  display: block;
  margin: 30px auto 50px auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid rgb(90 211 223);
  text-align:center;
  background-color: white;
  animation: ${animationFrames} 4s ease;
  &:hover {
    border-color: rgb(30, 97, 97);
  }
`;

const ButtonDown = styled.img`
  animation: ${pulsate} 1.5s ease;
  animation-iteration-count: infinite;
  padding-top: 5px;
  padding-left: 1px;
  height: 27px;
  color: white;
`;

const ButtonContainer2 = styled.span`
  cursor: pointer;
  display: block;
  margin: 30px auto 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid rgb(90 211 223);
  text-align:center;
  background-color: white;

  &:hover {
    border-color: rgb(30, 97, 97);
  }
`;

const ButtonUp = styled.img`
  animation: ${pulsate} 1.5s ease;
  animation-iteration-count: infinite;
  padding: 2px 2px 2px 3px;
  height: 27px;
`;

const Layout = ({ children, siteTitle, subTitle }) => {

  const [hasMounted, setHasMounted] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [atHome, setAtHome] = useState(true);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const changeBackground = () => {
    if (window.scrollY >= 750) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const goDown = (num) => {
    if (num === 0) {
      window[`scrollTo`]({ top: 0, behavior: `smooth` })
    } else if (num === 1) {
      console.log(document.getElementsByClassName('down-one')[0])
      document.getElementsByClassName('down-one')[0].scrollIntoView({ behavior: `smooth`, block: `center`  })
      return;
    } else if (num === 2) {
      console.log(document.getElementsByClassName('down-two')[0])
      document.getElementsByClassName('down-two')[0].scrollIntoView({ behavior: `smooth`, block: `center`  })
      return;
    } else if (num === 3) {
      console.log(document.getElementsByClassName('down-three')[0])
      document.getElementsByClassName('down-three')[0].scrollIntoView({ behavior: `smooth`, block: `center` })
      return;
    }
  }

  const goUp = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  const checkIfHome = (num) => {
    if (atHome) {
      goDown(num)
    }
  }

  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <>
      <Header siteTitle={siteTitle} subTitle={subTitle} />
      <Line active={navbar} >
        <NavbarItems onClick={() => setTimeout(() => checkIfHome(0), 800)} ><Link className="link2" to="/">Home</Link></NavbarItems>
        <NavbarItems onClick={() => setTimeout(() => checkIfHome(1), 800)} ><Link className="link2" to="/">About</Link></NavbarItems>
        <NavbarItems onClick={() => setTimeout(() => checkIfHome(2), 800)} ><Link className="link2" to="/">Skills</Link></NavbarItems>
        <NavbarItems onClick={() => setTimeout(() => checkIfHome(3), 800)} ><Link className="link2" to="/">Work</Link></NavbarItems>
        <NavbarItems><Link className="link2" to="/resume/">Resume</Link></NavbarItems>
        <NavbarItems><Link className="link2" to="/contact/">Contact</Link></NavbarItems>
      </Line>
      <ButtonContainer onClick={() => goDown(860)}>
        <ButtonDown src={chevdown} alt="buttondown"/>
      </ButtonContainer>
      <MainContentContainer>
        <main>{children}</main>
        <Footer>
          <ButtonContainer2 onClick={() => goUp()}>
            <ButtonUp src={chevup} alt="buttonup"/>
          </ButtonContainer2>
          <br></br>
          © {new Date().getFullYear()} Paul Choi <br></br>Built with: <br></br>
          {` `}
          <IconContainer>
            <Icon href="https://www.gatsbyjs.com" target="_blank" >
              <Img src={GatsbyLogo} alt="GatsbyLogo"/>
            </Icon>
            <Icon href="https://reactjs.org/" target="_blank" >
              <Img src={ReactLogo} alt="ReactLogo"/>
            </Icon>
            <Icon href="https://graphql.org/" target="_blank" >
              <Img src={GraphQlLogo} alt="GraphQlLogo"/>
            </Icon>
            <Icon href="https://babeljs.io/" target="_blank" >
              <Img src={BabelLogo} alt="BabelLogo"/>
            </Icon>
            <Icon href="https://webpack.js.org/" target="_blank" >
              <Img src={WebpackLogo} alt="WebpackLogo"/>
            </Icon>
          </IconContainer>
        </Footer>
      </MainContentContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
