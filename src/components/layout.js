/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const MainContentContainer = styled.div`
  margin: 0 10em;
  display: flex;
  flex-direction: column;
  padding: 0 1.0875rem 1.45rem;

  @media (max-width: 670px) {
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
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          <a href="https://reactjs.org/">React</a>
          <a href="https://graphql.org/">GraphQL</a>
        </Footer>
      </MainContentContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
