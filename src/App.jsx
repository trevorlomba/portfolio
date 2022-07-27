import React, { useState, useRef } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { v4 as uuid } from "uuid"

import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import AutoDismissAlert from "./components/AutoDismissAlert/AutoDismissAlert"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import SignOut from "./components/auth/SignOut"
import ChangePassword from "./components/auth/ChangePassword"

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [experience, setExperience] = useState([
    {id: 0, name: 'html5', status: true, icon: ''},
    {id: 1, name: 'css', status: true, icon: ''},
    {id: 2, name: 'bootstrap', status: true, icon: ''},
    {id: 3, name: 'javascript', status: true, icon: ''},
    {id: 4, name: 'react', status: true, icon: ''},
    {id: 5, name: 'nodejs', status: true, icon: ''},
    {id: 6, name: 'express', status: true, icon: ''},
    {id: 7, name: 'mongodb', status: true, icon: ''},
    {id: 8, name: 'postgresql', status: true, icon: ''},
    {id: 9, name: 'python', status: true, icon: ''}]
)
  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts((msgAlerts) => [
      ...msgAlerts,
      { heading, message, variant, id },
    ])
  }

  const headerRef = useRef(null)
  const aboutRef = useRef(null)

  const changeExperience = exp => {
    const updated = !this.state.experience[exp]
    let arr = this.state.experience
    arr.exp = updated
    setExperience(arr)
  }

  return (
		<Router>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
				/>
			))}
			<main className='container'>
				<Routes>
					<Route
						path='/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-out'
						element={
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						}
					/>
					<Route
						path='/change-password'
						element={<ChangePassword msgAlert={msgAlert} user={user} />}
					/>
				</Routes>
				<Header user={user} forwardRef={headerRef} />
				<Navbar headerRef={headerRef} />
				{user ? <About forwardRef={aboutRef} /> : ''}
				{/* {user ? <Experience />: ''} */}
				<Experience experience={experience} setExperience={setExperience} />
				{experience.some((o) => o.status === true) ? (
					<Portfolio
						experience={experience}
						changeExperience={changeExperience}
					/>
				):''}
				<Contact />
			</main>
			<Footer />
		</Router>
	)
}

export default App