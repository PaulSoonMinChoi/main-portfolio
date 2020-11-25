import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BluPage from "../components/BluPage"

const Blu = () => (
  <Layout siteTitle={`Blu`} subTitle={`How do you help gamers who need more friends to play with?`} >
    <SEO title="Blu Application" />
    <BluPage />
  </Layout>
)

export default Blu
