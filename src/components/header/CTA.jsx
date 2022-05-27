import React from 'react'
import DownloadCTA from './cta-download/DownloadCTA'

const CTA = () => {
  return (
    <div className='cta headerbtn'>
      <DownloadCTA />
      <a href='#contact' className='btn headerbtn'>Get In Touch</a>
    </div>
  )
}

export default CTA