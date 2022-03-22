import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
// import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/TrevorLomba/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
      <a href='https://github.com/trevorlomba' target='_blank' rel="noreferrer"><BsGithub/></a>
      {/* <a href='' target='_blank'></a> */}
    </div>
  )
}

export default HeaderSocials