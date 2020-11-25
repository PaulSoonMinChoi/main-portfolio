/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BabelLogo from '../images/babel.svg'
import ReactLogo from '../images/react.svg'
import WebpackLogo from '../images/webpack.svg'
import GraphQlLogo from '../images/graphql.svg'
import GatsbyLogo from '../images/gatsby.svg'


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
  border-top: ${(props) => props.active ? `none` : `1px solid rgb(0, 0, 0, 0.5);`};
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  margin: ${(props) => props.active ? `0 0 7em 0` : `0 15em 7em 15em`};
  height: 10vh;
  position: ${(props) => props.active ? `sticky` : `none`};
  top: ${(props) => props.active ? 0 : `none`};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  z-index: 1000;
  background: ${(props) => props.active ? `rgb(239 239 239)` : `none`};

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
  color: rgb(102, 102, 102);
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

const Layout = ({ children, siteTitle, subTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 750) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  // document.getElementsByClassName('aboutus-section').scrollIntoView()
  return (
    <>
      <Header siteTitle={siteTitle} subTitle={subTitle} />
      <Line active={navbar} >
        <NavbarItems><Link className="link" to="/">Home</Link></NavbarItems>
        <NavbarItems  onClick={() => console.log('hello')} ><Link className="link" >About</Link></NavbarItems>
        <NavbarItems><Link className="link" to="/blu/">Skills</Link></NavbarItems>
        <NavbarItems><Link className="link" to="/blu/">Work</Link></NavbarItems>
        <NavbarItems><Link className="link" to="/blu/">Contact</Link></NavbarItems>
      </Line>
      <MainContentContainer>
        <main>{children}</main>
        <Footer>
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
