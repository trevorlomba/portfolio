import React from 'react'
import Projects from './projects/projects'
import './portfolio.scss'
import './projects/projects.scss'
import { metroTrainer, xsAndOhs, basicCalculator, scientificCalculator, talkMore, myPlaylist, portfolio, music, notionAccess } from './projects/project-descriptions'

const Portfolio = (props) => {


	const projectArray = [music, notionAccess, metroTrainer, portfolio, talkMore, scientificCalculator, xsAndOhs, basicCalculator, myPlaylist]

	const renderProjects = () =>
		projectArray.map((project) => (
			<Projects
				project={project}
				experience={props.experience}
				key={project.title}
			/>
		))


  return (
		<section id='portfolio'>
			<h1 className='section-title '>Portfolio</h1>
			{renderProjects()}
		</section>
	)
}

export default Portfolio