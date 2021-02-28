import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BluPage from "../components/BluPage"

const Blu = () => (
  <Layout
    siteTitle={`Blu`}
    subTitle={`How do we bring the competitive ESports scene to the locals?`}
  >
    <SEO title="Blu Application" />
    <BluPage />
  </Layout>
)

export default Blu
