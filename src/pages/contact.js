import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactPage from "../components/contactPage"

const Contact = () => (
  <Layout siteTitle={`Contact Me`} subTitle={`Let's connect or send me a message!`} >
    <SEO title="Contact" />
    <ContactPage />
  </Layout>
)

export default Contact
