import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'


const FECPage = () => (
  <>
    <h1>tech stacks used: React, Express, Node.js, Axios, AWS EC2, mySQL</h1>
    <br></br>
    <h2>High Level Goals: </h2>
    <h3>1. replicate a module heavy website visually</h3>
    <h3>2. generate 1000+ unique data entries within the application</h3>
    <h3>3. incoperate all modules together with a proxy server</h3>
    <h3>4. host finished single page application on a aws ec2 t2.micro instance</h3>
    <br></br>
    <p>To start we were tasked with finding a module heavy website (preferably an E-commerce website) so we chose Etsy.</p>
    <p>Then my team of 5 engineers in total, had to decide which part of the single page application we wanted to split.</p>
    <p>Therefore I chose the navbar portion of Etsy's display product page.</p>
    <p>Some challenges I faced were figuring out how to query data entries depending on the user's input value.</p>
    <p>This challenge was easily solved with a handy tool in mySQL called like or (%) wildcard. This allowed my search bar functionality to become quick with responding to the user's inputs and displaying the correct data entries.</p>
    <p>After launching 1 aws ec2 t2.micro instance and using a proxy server to combine all our modules together we then deployed the single page application.</p>
    <p>In conclusion to this short journey, I learned the importance of agile workflow and how service oriented architecture works well within a team.</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default FECPage