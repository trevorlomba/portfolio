import React from 'react'
import DownloadCTA from './cta-download/DownloadCTA'

const CTA = () => {
  return (
    <div className='cta headerbtn'>
      <DownloadCTA />
      <a href='#contact' className='btn headerbtn'>Contact</a>
      <a href='http://linked.in/trevorlomba' className='btn headerbtn'>LinkedIn</a>
    </div>
  )
}

export default CTA