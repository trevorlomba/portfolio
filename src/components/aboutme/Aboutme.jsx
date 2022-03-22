import React from 'react'
import '../aboutme/aboutme.scss'
import ME from '../../assets/SD-350px.jpg'

const AboutMe = () => {
    return (
    <div className='about-me-wrapper'>
        <div className='row'>
    <div className='column'>
            <div><img src={ME} className="main-img" alt="Trevor Lomba" /></div>
    </div>
    <div className='column'> <div className='about-me-text'>

My name’s TJ, welcome to my portfolio!

I am a react developer with a background in creative media and digital marketing at high-tech startups.

Please take some time to check out my work!
</div> 
    </div>
    {/* <div className='column'>
      <div className='orange-column'>
        Some Text in Column Two
      </div>
    </div> */}
    </div>
    </div>
    )
}

export default AboutMe