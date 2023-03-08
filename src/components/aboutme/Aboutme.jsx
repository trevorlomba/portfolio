import React from 'react'
import '../aboutme/aboutme.scss'
import { useState } from 'react'
import ME from '../../assets/myself.jpg'
import ME2 from '../../assets/myself2.jpg'
import ME3 from '../../assets/myself3.jpg'
import ME4 from '../../assets/myself4.jpg'
import ME5 from '../../assets/myself6.jpg'
import ME6 from '../../assets/myself5.jpg'

const images = [ME6, ME5, ME]

const AboutMe = () => {
	const [image, setImage] = useState(0)
	
	const handleImageClick = () => {
		let imageUpdate = image
		if (image >= images.length -1) {
			imageUpdate = 0
		} else {
			imageUpdate = image + 1
		}
		setImage(imageUpdate)
	}
    return (
			<div className='about-me-wrapper'>
				<div className='row'>
					<div className='column'>
						<div>
							<p className='welcome'>Welcome!</p>
						</div>
						<div>
							<img
								src={images[image]}
								onClick={handleImageClick}
								className='main-img'
								alt='Trevor Lomba'
							/>
							<span className='image-text'>
								click my face to see more of my face!
							</span>
						</div>
					</div>
					<div className='row'>
						<div className='column'>
							{' '}
							<div className='about-me-text'>
								<p>
									{
										"Hello, my name is TJ. I am a skilled full-stack software developer with a background in business analytics, marketing, and design gained from working with high-tech startups and creative professionals.\n\nThroughout my professional experience, I have thrived in highly collaborative environments, whether they were in-person or remote, and have consistently demonstrated excellence in project management, operations, and creative problem solving.\n\nIn 2022, I completed General Assembly's intensive 24-week, 450+ hour full-stack software engineering immersive program. Prior to that, I graduated magna cum laude from Babson College with dual-concentrations in business analytics and marketing in 2017."
									}
								</p>
								<span>
									{
										'\nI invite you to take a moment to explore my portfolio of projects and '
									}
								</span>{' '}
								<a href='#contact'>{'connect with me'}</a>{' '}
								<span>{'to discuss how I may be able to contribute to your team or project. Thank you for your consideration.'}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default AboutMe