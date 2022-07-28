import React from 'react'
import Projects from './projects/projects'
import './portfolio.scss'
import './projects/projects.scss'
import { metroTrainer, xsAndOhs, basicCalculator, scientificCalculator, talkMore, myPlaylist, portfolio } from './projects/project-descriptions'

const Portfolio = (props) => {
  return (
		<section id='portfolio'>
			<h1 className='section-title '>Portfolio</h1>
			<Projects project={metroTrainer} experience={props.experience} />
			<Projects project={scientificCalculator} experience={props.experience} />
			<Projects project={xsAndOhs} experience={props.experience} />
			<Projects project={basicCalculator} experience={props.experience} />
			<Projects project={myPlaylist} experience={props.experience} />
			<Projects project={talkMore} experience={props.experience} />
			<Projects project={portfolio} experience={props.experience} />
		</section>
	)
}

export default Portfolio