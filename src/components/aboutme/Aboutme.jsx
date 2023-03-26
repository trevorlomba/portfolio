import React, { useState } from 'react'
import ME from '../../assets/myself.jpg'
import ME2 from '../../assets/myself2.jpg'
import ME3 from '../../assets/myself3.jpg'
import ME4 from '../../assets/myself4.jpg'
import ME7 from '../../assets/myself7.jpg'
import ME8 from '../../assets/myself8.jpg'
import ME9 from '../../assets/myself9.jpg'
import ME5 from '../../assets/myself6.jpg'
import ME6 from '../../assets/myself5.jpg'
import '../aboutme/aboutme.scss'

const images = [ME, ME6, ME5, ME8, ME7, ME9]

const AboutMe = () => {
	const [image, setImage] = useState(0)

	const handleImageClick = () => {
		let imageUpdate = image
		if (image >= images.length - 1) {
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
							{/* a paragraph div communicating my work */}
							<div>
								<div>
	<div>
		<p>
			Greetings, my name is TJ. As a seasoned full-stack software
			developer, I possess a comprehensive skill set in business
			analytics, marketing, and design, garnered from working with
			various high-tech startups and creative professionals.
		</p>
	</div>
	<br/>
	<div>
		<p>
			I excel in collaborative work environments, whether they are
			remote or in-person, and have consistently demonstrated
			excellence in project management, operations, and creative
			problem-solving.
		</p>
	</div>
	<br/>
	<div>
		<p>
			In 2022, I successfully completed General Assembly's
			rigorous 24-week, 450+ hour full-stack software engineering
			immersive program. Prior to that, I graduated magna cum
			laude from Babson College, majoring in business analytics
			and marketing in 2017.
		</p>
	</div>
	<br/>
	<div>
		<p>
			<span className='bold'>
				I would like to invite you to explore my portfolio of
				projects. 
				<a href='#contact'> Please connect with me</a> to
				discuss how I can add value to your team or project. Thank
				you for considering my application.'
			</span>
		</p>
	</div>
</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
