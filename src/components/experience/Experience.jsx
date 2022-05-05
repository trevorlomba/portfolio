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
              <large className='txt'>HTML5</large>
            </article>
            <article className="experience__details">
              <DiCss3 className='icon' />
              <large className='txt'>CSS3</large>
            </article>
            <article className="experience__details">
              <DiBootstrap className='icon' />
              <large className='txt'>bootstrap</large>
            </article>
            <article className="experience__details">
              <DiReact className='icon' />
              <large className='txt'>ReactJS</large>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='icon' />
              <large className='txt'>JavaScript</large>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h2>Backend</h2>
          <div className="experience__content">
            <article className="experience__details">
              <DiNodejs className='icon' />
              <large className='txt'>NodeJS</large>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='icon' />
              <large className='txt'>Express</large>
            </article>
            <article  className="experience__details">
              <DiMongodb className='icon' />
              <large className='txt'>MongoDB</large>
            </article>
            <article className="experience__details">
              <DiPostgresql className='icon' />
              <large className='txt'>PostgreSQL</large>
            </article>
            <article className="experience__details">
              <DiPython className='icon' />
              <large className='txt'>Python</large>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience