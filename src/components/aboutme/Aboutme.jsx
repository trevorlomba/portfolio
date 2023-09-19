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
											Greetings. I am TJ, a seasoned full-stack software developer with a rich background in tech as well as business analytics, marketing, and design. Drawing from extensive experience with cutting-edge startups and diverse creative talents, I've cultivated a holistic perspective on product marketing and software development.
										</p>
									</div>
									<br />
									<div>
										<p>
											My strengths partly lie in thriving in both solitary and collaborative environments. Whether working remotely or on-site, my proficiency in project management, operations, and innovative problem-solving are alway/s at the forefront.
										</p>
									</div>
									<br />
									<div>
										<p>
											In 2022, I dedicated myself to General Assembly's demanding 24-week full-stack software engineering immersive, accumulating over 450 hours of intensive learning and collaborative work. Earlier, I graduated magna cum laude from Babson College in 2017 with a degree in Business Administration concentrating in business analytics and marketing.
										</p>
									</div>
									<br />
									<div>
										<p className='bold'>
											I invite you to <a href='#contact'>reach out</a> to explore how my expertise aligns with your team's vision and goals. I appreciate your time and consideration.
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
