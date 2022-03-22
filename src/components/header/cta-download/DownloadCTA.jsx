import React from 'react'
import CV from './../../../assets/TL_resume.pdf'

const DownloadCTA = () => {
  
  const User = () => {
    
  }
  
  return (
    <a href={CV} download className='btn'>Resume</a>
  )
}

export default DownloadCTA