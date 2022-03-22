import React from 'react'
import './experience.scss'
import { DiJavascript1, DiBootstrap, DiHtml5, DiCss3, DiNodejs, DiMongodb, DiPostgresql, DiPython, DiReact } from "react-icons/di";

import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h1 className='section-title'>Technologies</h1>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>Frontend</h2>
          <div className="experience__content">
            <article className="experience__details">
              <DiHtml5 className='icon' />
              <large>HTML5</large>
            </article>
            <article className="experience__details">
              <DiCss3 className='icon' />
              <large>CSS3</large>
            </article>
            <article className="experience__details">
              <DiBootstrap className='icon' />
              <large>bootstrap</large>
            </article>
            <article className="experience__details">
              <DiReact className='icon' />
              <large>ReactJS</large>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='icon' />
              <large>JavaScript</large>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h2>Backend</h2>
          <div className="experience__content">
            <article className="experience__details">
              <DiNodejs className='icon' />
              <large>NodeJS</large>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='icon' />
              <large>Express</large>
            </article>
            <article className="experience__details">
              <DiMongodb className='icon' />
              <large>MongoDB</large>
            </article>
            <article className="experience__details">
              <DiPostgresql className='icon' />
              <large>PostgreSQL</large>
            </article>
            <article className="experience__details">
              <DiPython className='icon' />
              <large>Python</large>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience