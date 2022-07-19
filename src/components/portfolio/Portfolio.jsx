import React from 'react'
import Projects from './projects/projects'
import './portfolio.scss'
import './projects/projects.scss'
import { metroTrainer, xsAndOhs, basicCalculator, scientificCalculator, talkMore } from './projects/project-descriptions'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1 className='section-title '>Portfolio</h1>
    
      <Projects project={metroTrainer}/>
      <Projects project={scientificCalculator}/>
      <Projects project={xsAndOhs}/>
      <Projects project={basicCalculator}/>
      <Projects project={talkMore}/>
    </section>
  )
}

export default Portfolio