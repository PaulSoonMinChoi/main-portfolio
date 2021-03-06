import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const animationFrames2 = keyframes`
  0% {
    opacity:0;
    transform:  translate(-90px, 0px)  ;
  }
  100% {
    opacity:1;
    transform:  translate(0px,0px)  ;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 250px;
  height: 80vh;
  align-items: center;
  transition: transform 2s ease-in-out, opacity 1s ease-in-out;
  opacity: ${props => (props.active ? "1" : `0`)};

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 80vh;
    gap: 50px;
  }

  @media (max-width: 1090px) and (min-width: 1000px) {
    height: 110vh;
    gap: 200px;
  }

  @media (max-width: 375px) {
    height: 120vh;
    margin-bottom: 200px;
  }

  @media (max-width: 540px) {
    margin-bottom: 400px;
  }
`

const Title = styled.h1`
  color: rgb(78 237 237);
  margin: 10px 0 20px;
  animation: ${animationFrames2} 2s ease;
  letter-spacing: 5px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
    width: 60%;
    margin-bottom: 40px;
  }
`

const AboutUsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`

const AboutUsIntro = styled.h3`
  color: rgb(78 237 237);
  line-height: 40px;
`

const Paragraph = styled.p`
  line-height: 40px;
`

const AboutUs = ({ useOnScreen }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.2 })

  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <MainContainer ref={ref} active={visible} className="down-one">
      <Title>About</Title>
      <AboutUsContentContainer>
        {/* <Img src={Paul} alt="paulchoi" /> */}
        <AboutUsIntro>
          Hi. I'm Paul, a full-stack software engineer more focused on the
          frontend, living in California. I bring innovative ideas to life with
          design and code.
        </AboutUsIntro>
        <Paragraph>
          In my work, I strive to bring real change and joy while maintaining
          usability and structure. Nobody wants messy and redudant code right?
        </Paragraph>
        <Paragraph>
          Currently, I'm looking for a full-time software engineering-based
          role. In addition, I am working on a volunteer project for Hack For La
          called{" "}
          <a
            style={{ color: "rgb(78 237 237)", fontWeight: "bold" }}
            href="https://github.com/hackforla/calendaring-service-fe"
            target="_blank"
          >
            Home Unite Us.
          </a>{" "}
        </Paragraph>
      </AboutUsContentContainer>
    </MainContainer>
  )
}

export default AboutUs
