import React from 'react'
import '../aboutme/aboutme.scss'
import ME from '../../assets/SD-350px.jpg'

const AboutMe = () => {
    return (
			<div className='about-me-wrapper'>
				<div className='row'>
					<div className='column'>
						<div>
							<p className='welcome'>Welcome!</p>
						</div>
						<div>
							<img src={ME} className='main-img' alt='Trevor Lomba' />
						</div>
					</div>
					<div className='row'>
						<div className='column'>
							{' '}
							<div className='about-me-text'>
								<p>
									{
										"You can call me TJ, I am a React developer with a background in web design, strategic marketing, and analytics at high-tech startups. \n\n In 2017 I graduated magna cum laude from Babson College with dual-concentrations in business analytics and marketing. I have extensive professional experience working in highly collaborative environments (both in-person and remotely) plus a proven track record in project management,  organization & prioritization, logistics, and creative problem solving that I am eager to bring to your development team. \n\n I've logged over 2,000 development hours including General Assembly's intensive 24-week, 450+ hour full-stack software engineering immersive program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies"
									}
								</p>
								<span>
									{'\nPlease take some time to check out my projects and'}
								</span>{' '}
								<a href='#contact'>{'reach out'}</a>{' '}
								<span>
									{
										"to learn more about me and my work!"
									}
								</span>
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