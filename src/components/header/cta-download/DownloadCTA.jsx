import React from 'react'
import CV from './../../../assets/TL_resume.pdf'

const DownloadCTA = () => {
  
  return (
    <a href={CV} target="_blank" className='btn' rel="noopener noreferrer">Resume</a>
  )
}

export default DownloadCTA