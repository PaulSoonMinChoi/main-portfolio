import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SDCPage from "../components/SDCPage"

const SDC = () => (
  <Layout>
    <SEO title="SDC Application" />
    <SDCPage />
  </Layout>
)

export default SDC
