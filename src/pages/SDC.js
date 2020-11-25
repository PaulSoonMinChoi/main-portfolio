import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SDCPage from "../components/SDCPage"

const SDC = () => (
  <Layout siteTitle={`System Design & Scaling Capstone`} subTitle={`"How do you scale a legacy code base you have never seen before?"`}>
    <SEO title="SDC Application" />
    <SDCPage />
  </Layout>
)

export default SDC
