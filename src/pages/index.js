import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/about"
import Skills from "../components/skills"
import Work from "../components/Work"

const IndexPage = () => {

  return (
    <Layout siteTitle={`PAUL CHOI`} subTitle={`Full Stack Software Engineer`}>
      <SEO title="Home" />
        <AboutUs />
        <Skills />
        <Work />
    </Layout>
  )
}

export default IndexPage
