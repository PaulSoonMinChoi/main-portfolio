import React, { useState, useEffect, useRef} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutUs from "../components/about"
import Skills from "../components/skills"
import Work from "../components/Work"

function useOnScreen(options) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [ref, options])
  return [ref, visible];
}



const IndexPage = () => {


  return (
    <Layout siteTitle={`PAUL CHOI`} subTitle={`Full Stack Software Engineer`}>
      <SEO title="Home" />
        <AboutUs useOnScreen={useOnScreen} />
        <Skills useOnScreen={useOnScreen} />
        <Work useOnScreen={useOnScreen} />
    </Layout>
  )
}

export default IndexPage
