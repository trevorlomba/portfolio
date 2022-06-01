import React from 'react'
import DownloadCTA from './cta-download/DownloadCTA'

const CTA = () => {
  return (
    <div className='cta headerbtn'>
      <DownloadCTA />
      <a href='#contact' className='btn headerbtn'>Contact</a>
    </div>
  )
}

export default CTA