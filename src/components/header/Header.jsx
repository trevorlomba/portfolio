import React from 'react'
import './header.scss'
import CTA from './CTA'
import ME from './../../assets/SD-350px.jpg'
import AboutMe from '../aboutme/Aboutme'

const Header = (props) => {
  return (
    <header ref={props.forwardRef}>
      <div className="container header__container">
        <h1 className='app-title'>TJ Lomba</h1>
        <h3 className="app-subtitle">Software Engineer</h3>
        <CTA />
        {/* <HeaderSocials /> */}
        <AboutMe />
{/* 
        <div className='me'>
          <div><img src={ME} alt="" /></div>
          <div className='about-me'><h2>hi</h2></div>
        </div> */}

        {/* <a href='#contact' className='scroll__down'>Contact Me</a> */}
      </div>
    </header>
  )
}

export default Header