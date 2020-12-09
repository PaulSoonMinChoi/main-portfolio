import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumePage from "../components/resumePage"

const FEC = () => (
  <Layout siteTitle={`Resume`} subTitle={`Paul Choi`} >
    <SEO title="Resume" />
    <ResumePage />
  </Layout>
)

export default FEC
