import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineMenu, MdOutlineMessage } from 'react-icons/md'
import { RiGameFill, RiHomeSmile2Fill, RiContactsBookFill } from 'react-icons/ri'
import { BsFileCodeFill } from 'react-icons/bs'


const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState('/')

  const alwaysOptions = (
    <>
      <NavLink to='/' className='nav-link'>Home</NavLink>
    </>
  )

  const onHome = () => {
    setActiveNav('/')
    props.headerRef.current.scrollIntoView({behavior: "smooth"})
  }

  const onAbout = () => {
    setActiveNav('#about')
    props.aboutRef.current.scrollIntoView()
  }

  const onSignIn = () => {
    setActiveNav('/sign-in')
  }

  const onSignOut = () => {
    setActiveNav('/sign-out')
  }


  return (
    <nav>
      <a href='/' onClick={onHome} className={activeNav === '/' ? 'active' : ''} title="Home"><RiHomeSmile2Fill /></a>
      {/* <a href='#about' onClick={onAbout} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a> */}
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFileCodeFill /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiGameFill /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBookFill /></a>
      {/* <NavLink to='/sign-in' onClick={onSignIn} className={activeNav === '/sign-in' ? 'active' : ''} title="Sign In"><AiOutlineLogin /></NavLink> */}
      {/* <NavLink to='/sign-out' onClick={onSignOut} className={activeNav === '/sign-out' ? 'active' : ''} title="Sign Out"><RiLogoutCircleLine /></NavLink> */}
    </nav>
  )
}

export default Navbar