import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import BluLogo from '../images/blulogo.png'
import league from '../images/league.png'
import bluapp from '../images/bluapp.png'


const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const BluPage = () => (
  <>
    <Img src={bluapp} alt="bluapp" />
    <p>Home page of Blu application.</p>
    <br></br>
    <h3>To answer the question above we will dive into features of this app</h3>
    <p>To start we had to figure out how we can help gamers find friends faster. Few questions that arose during the daily stand-ups:  "How can people use our app and benifit from using it?" "Will our app solve the problem of helping gamers find friends to play with, with ease?"</p>
    <p>Next, the planning was tough since we had too many features we wanted to implement. Me and 2 other engineers built out a blue print of what the following application will contain. This includes the modules for each section and how each page will correspond to each other.</p>
    <p>In addition, we needed to figure out what database management system to use as well as the schema structure.</p>
    <p>Then came the part of designing a mock-up of what the application would look like.</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default BluPage