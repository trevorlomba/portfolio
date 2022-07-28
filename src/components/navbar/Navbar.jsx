import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import { AiOutlineHome, AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineMenu, MdOutlineMessage } from 'react-icons/md'
import { RiGameFill, RiUserVoiceFill, RiHomeSmile2Fill, RiContactsBookFill } from 'react-icons/ri'
import { BsFileCodeFill } from 'react-icons/bs'


const Navbar = (props) => {
  const [activeNav, setActiveNav] = useState('/')

  const onHome = () => {
    // setActiveNav('/')
    props.headerRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
		<>
			<nav>
				<div className='nav2'>
					<div>
						<span className='navTitle'>navigate</span>
					</div>
				</div>
				{/* <a href='/' onClick={onHome} className={activeNav === '/' ? 'active' : ''} title="Home"><RiHomeSmile2Fill /></a> */}
				<a href='#home' onClick={() => setActiveNav('#home')} title='Home'>
					<RiHomeSmile2Fill />
				</a>
				{/* <a href='#about' onClick={onAbout} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a> */}
				<a
					href='#experience'
					onClick={() => setActiveNav('#experience')}
					className={activeNav === '#experience' ? 'active' : ''}>
					<BsFileCodeFill />
				</a>
				<a
					href='#portfolio'
					onClick={() => setActiveNav('#portfolio')}
					className={activeNav === '#portfolio' ? 'active' : ''}>
					<RiGameFill />
				</a>
				<a
					href='#contact'
					onClick={() => setActiveNav('#contact')}
					className={activeNav === '#contact' ? 'active' : ''}>
					<RiUserVoiceFill />
				</a>
				{/* <NavLink to='/sign-in' onClick={onSignIn} className={activeNav === '/sign-in' ? 'active' : ''} title="Sign In"><AiOutlineLogin /></NavLink> */}
				{/* <NavLink to='/sign-out' onClick={onSignOut} className={activeNav === '/sign-out' ? 'active' : ''} title="Sign Out"><RiLogoutCircleLine /></NavLink> */}
			</nav>
		</>
	)
}

export default Navbar