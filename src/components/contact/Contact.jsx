import React from 'react'
import './contact.scss'
import { useState, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillPhone,
	AiTwotoneMail,
	AiOutlineSend,
} from 'react-icons/ai'


const Contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [color, setColor] = useState('')
  const form = useRef()

  // let buttonStyle = {"background": {color}}
  const sendMessage = (event) => {
    event.preventDefault();

	if(!message) {
		console.log('no message')
		return
	}

    emailjs
			.sendForm(
				'service_xbn6upm',
				'template_ljeonjo',
				form.current,
				'Wkk0dwkyDYusWyMCW'
			)
			.then(
				(result) => {
					setName('')
					setEmail('')
					setMessage('')
				},
				(error) => {
					console.log(error.text)
				}
			)
      }

  return (
		<>
			<section id='contact' className='container'>
				<div className='contact-wrapper'>
					<h1 className='section-title '>Connect With Me!</h1>
					<div className='contact-container'>
						<a
							href='mailto:trevorlomba@gmail.com'
							rel='noopener noreferrer'
							className='contact-link'
							target='_blank'>
							<AiTwotoneMail />
						</a>
						<a
							href='tel:5084412186'
							rel='noopener noreferrer'
							className='contact-link'
							target='_blank'>
							<AiFillPhone />
						</a>
						<a
							href='https://github.com/trevorlomba'
							rel='noopener noreferrer'
							className='contact-link'
							target='_blank'>
							<AiFillGithub />
						</a>
						<a
							href='https://www.linkedin.com/in/trevorlomba/'
							rel='noopener noreferrer'
							className='contact-link'
							target='_blank'>
							<AiFillLinkedin />
						</a>
					</div>

					<div className='form-container'>
						<form ref={form} onSubmit={sendMessage}>
							<div className='label-container'>
								<label>Name</label>
								<input
									type='text'
									name='name'
									value={name}
									onChange={(event) => setName(event.target.value)}
								/>
							</div>
							<div className='label-container'>
								<label>Email</label>
								<input
									type='email'
									name='email'
									value={email}
									onChange={(event) => setEmail(event.target.value)}
								/>
							</div>
							<div className='label-container'>
								<label>Message</label>
								<textarea
									name='message'
									value={message}
									rows={5}
									onChange={(event) => setMessage(event.target.value)}
								/>
							</div>
							<button type='submit' className='formButton'><AiOutlineSend /></button>
						</form>
						{/* <Form className='form-container ' onSubmit={sendMessage}>
							<div>
								<Form.Group controlId='name' className='label-container'>
									<Form.Label className='label'>name</Form.Label>
									<Form.Control
										require
										size='lg'
										rows={3}
										type='name'
										value={name}
										placeholder='Enter Name'
										onChange={(event) => setName(event.target.value)}
									/>
								</Form.Group>
							</div>
							<div>
								<Form.Group controlId='email' className='label-container'>
									<Form.Label className='label'>email</Form.Label>
									<Form.Control
										require
										size='lg'
										rows={3}
										type='email'
										value={email}
										placeholder='Enter Email'
										onChange={(event) => setEmail(event.target.value)}
									/>
								</Form.Group>
							</div>
							<div>
								<Form.Group controlId='message' className='label-container'>
									<Form.Label className='label'>message</Form.Label>

									<Form.Control
										require
										as='textarea'
										size='lg'
										rows={3}
										type='message'
										value={message}
										placeholder='Enter Message'
										onChange={(event) => setMessage(event.target.value)}
									/>
								</Form.Group>
							</div>
							<div>
								<Form.Group
									controlId='favorite-color'
									className='label-container'>
									<Form.Label className='label'>
										favorite color{color}
									</Form.Label>
									<Form.Control
										className='color-picker'
										type='color'
										controlId='favoriteColor'
										defaultValue='#227093'
										title='Choose your color'
										onChange={(event) => setColor(event.target.value)}
									/>
								</Form.Group>
							</div>
							<div className='d-grid gap-2'>
								<Button className='formButton' type='submit'>
									Submit form
								</Button>
							</div>
						</Form> */}
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact