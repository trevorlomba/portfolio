import React from 'react'
import './experience.scss'
import { DiJavascript1, DiBootstrap, DiHtml5, DiCss3, DiNodejs, DiMongodb, DiPostgresql, DiPython, DiReact } from "react-icons/di";

import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = (props) => {
  const handleExperience = (exp) => {
    // const setExperience = props.setExperience
    console.log(exp)
    console.log(props.experience)
    const searchObject= props.experience.find((tech) => tech.name === exp);
    console.log(searchObject)
    const newState = props.experience.map(tech => {
      if (tech.name === exp) {
        tech.status = !tech.status
        console.log(tech.status)
      }
      return tech
    })
    props.setExperience(newState)
    console.log(props.experience)
    // const newExp = props.Experience;
    // setExperience(newExp)
  }
  return (
		<section id='experience'>
			<h1 className='section-title'>Technologies</h1>
			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h2>Frontend</h2>
					<div className='experience__content'>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'html5').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('html5')}>
							<DiHtml5 className='icon' />
							<large className='txt'>HTML5</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'css').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('css')}>
							<DiCss3 className='icon' />
							<large className='txt'>CSS3</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'bootstrap')
									.status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('bootstrap')}>
							<DiBootstrap className='icon' />
							<large className='txt'>bootstrap</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'react').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('react')}>
							<DiReact className='icon' />
							<large className='txt'>React</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'javascript')
									.status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('javascript')}>
							<DiJavascript1 className='icon' />
							<large className='txt'>JavaScript</large>
						</article>
					</div>
				</div>
				<div className='experience__backend'>
					<h2>Backend</h2>
					<div className='experience__content'>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'nodejs').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('nodejs')}>
							<DiNodejs className='icon' />
							<large className='txt'>NodeJS</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'express').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('express')}>
							<DiJavascript1 className='icon' />
							<large className='txt'>Express</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'mongodb').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('mongodb')}>
							<DiMongodb className='icon' />
							<large className='txt'>MongoDB</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'postgresql')
									.status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('postgresql')}>
							<DiPostgresql className='icon' />
							<large className='txt'>PostgreSQL</large>
						</article>
						<article
							className={`experience__details ${
								props.experience.find((tech) => tech.name === 'python').status
									? 'on'
									: 'off'
							}`}
							onClick={() => handleExperience('python')}>
							<DiPython className='icon' />
							<large className='txt'>Python</large>
						</article>
					</div>
				</div>
			</div>
			<h3 className='section-subtitle'>
				{props.experience.some(o => o.status === true)
					? 'query my portfolio below by clicking on the icons above!'
					: 'looks like you have no technologies selected! click on the icons above to query my portfolio'}
			</h3>
		</section>
	)
}

export default Experience