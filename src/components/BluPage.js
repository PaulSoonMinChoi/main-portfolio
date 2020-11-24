import React from 'react';
import styled, { keyframes } from "styled-components"
import { Link } from 'gatsby'
import BluLogo from '../images/blulogo.png'


const BluPage = () => (
  <>
    <h1>Hi from the blu Application</h1>
    <p>Welcome to Blu page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default BluPage