import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import resume from '../images/resume.pdf'

const ResumeContainer = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
`;


const ResumePage = () => (
  <>
  <ResumeContainer>
    <embed src={resume} width="900px" height="1150px" />
  </ResumeContainer>
  </>
)

export default ResumePage