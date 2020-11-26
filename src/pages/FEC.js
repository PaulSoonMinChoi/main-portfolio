import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FECPage from "../components/FECPage"

const FEC = () => (
  <Layout siteTitle={`Getsy, Etsy E-Commerce Clone`} subTitle={`"How do you replicate a module heavy website like Etsy?"`} >
    <SEO title="FEC Application" />
    <FECPage />
  </Layout>
)

export default FEC
