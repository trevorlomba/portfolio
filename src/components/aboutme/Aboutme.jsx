import React from 'react'
import '../aboutme/aboutme.scss'
import { useState } from 'react'
import ME2 from '../../assets/myself.png'
import ME from '../../assets/myself2.png'
import ME4 from '../../assets/myself3.png'
import ME3 from '../../assets/myself4.png'

const images = [ME, ME2, ME3, ME4]

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
										"You can call me TJ, I am a React developer with a background in web design, strategic marketing, and analytics at high-tech startups. \n\n I have extensive professional experience working in highly collaborative environments (both in-person and remote) and a proven track record of excellence in project management, operations, and creative problem solving that I am eager to bring to your development team.\n\n My education includes General Assembly's intensive 24-week, 450+ hour full-stack software engineering immersive program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. I graduated magna cum laude from Babson College with dual-concentrations in business analytics and marketing in 2017."
									}
								</p>
								<span>
									{'\nPlease take some time to check out my projects and'}
								</span>{' '}
								<a href='#contact'>{'reach out'}</a>{' '}
								<span>{'to learn more about me and my work!'}</span>
							</div>
						</div>
					</div>
					{/* <div className='column'>
      <div className='orange-column'>
        Some Text in Column Two
      </div>
    </div> */}
				</div>
			</div>
		)
}

export default AboutMe