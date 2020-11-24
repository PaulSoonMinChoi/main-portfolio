import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/about"
import Skills from "../components/skills"
import Work from "../components/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutUs />
    <Skills />
    <Work />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
