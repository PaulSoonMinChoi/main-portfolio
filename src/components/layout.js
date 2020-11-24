/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

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
  border-top: 1px solid black;
  margin: 0 10em 3em 10em;
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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={`Paul Choi`} />
      <Line />
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
