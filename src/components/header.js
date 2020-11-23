import { Link } from "gatsby"
import './header.css'
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip';

library.add(fab);


const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderDiv = styled.div`
  margin: 0 auto;
  maxWidth: 960;
  padding: 1.45rem 1.0875rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CharDiv = styled.div`
  opacity: ${props => props.active === props.char ? 1.5 : 0.75 };
`;

const Header = ({ siteTitle }) => {

  const [hovering, setHovering] = useState('');

  const charHover = (char) => {
    setHovering(char);
  }

  const dimTitle = () => {

  }

  const titleArr = siteTitle.split('');
  return (
    <MainHeader>
      <HeaderDiv>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <TitleContainer >
              {titleArr.map((char) => {
              if (char === 'P') {
                return (
                  <CharDiv active={hovering} char={'P'}>
                    <p className='title-char' onMouseOver={() => charHover('P')} onMouseLeave={() => setHovering('')} data-effect="solid" data-tip="Problem solver">P</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'a') {
                return (
                  <CharDiv active={hovering} char={'A'}>
                    <p className='title-char' onMouseOver={() => charHover('A')} onMouseLeave={() => setHovering('')} data-tip="Assertive"  data-effect="solid">A</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'u') {
                return (
                  <CharDiv active={hovering} char={'U'}>
                    <p className='title-char' onMouseOver={() => charHover('U')} onMouseLeave={() => setHovering('')} data-tip="Understanding"  data-effect="solid">U</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'l') {
                return (
                  <CharDiv active={hovering} char={'L'}>
                    <p className='title-char' onMouseOver={() => charHover('L')} onMouseLeave={() => setHovering('')} data-tip="Leadership"  data-effect="solid">L</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'C') {
                return (
                  <CharDiv active={hovering} char={'C'}>
                    <p className='title-char-last' data-tip="Communication"  onMouseOver={() => charHover('C')} onMouseLeave={() => setHovering('')} data-effect="solid">C</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'h') {
                return (
                  <CharDiv active={hovering} char={'H'}>
                    <p className='title-char-last' onMouseOver={() => charHover('H')} onMouseLeave={() => setHovering('')} data-tip="Honorable"  data-effect="solid">H</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'o') {
                return (
                  <CharDiv active={hovering} char={'O'}>
                    <p className='title-char-last' onMouseOver={() => charHover('O')} onMouseLeave={() => setHovering('')} data-tip="Organized"  data-effect="solid">O</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              if (char === 'i') {
                return (
                  <CharDiv active={hovering} char={'I'}>
                    <p className='title-char-last' data-tip="Interested"  onMouseOver={() => charHover('I')} onMouseLeave={() => setHovering('')} data-effect="solid">I</p>
                    <ReactTooltip />
                  </CharDiv>
                )
              }
              return (
                <div></div>
              )
            })}
            </TitleContainer>
          </Link>
        </h1>
        <IconContainer>
          <FontAwesomeIcon className='social-icons' icon={["fab",
          "github"]} size="2x"/>
          <FontAwesomeIcon className='social-icons' icon={['fab', 'linkedin']} size="2x"/>
          <FontAwesomeIcon className='social-icons' icon={['fab', 'instagram']} size="2x"/>
        </IconContainer>
      </HeaderDiv>
    </MainHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
