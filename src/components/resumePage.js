import React from "react"
import styled from "styled-components"
import resume from "../images/resumeUpdated.pdf"

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ResumePage = () => (
  <>
    <ResumeContainer>
      <embed src={resume} width="900px" height="1150px" />
    </ResumeContainer>
  </>
)

export default ResumePage
