import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <section id='contact'>
      <h1 className='section-title '>Let's Keep in Touch!</h1>
      <div className='contact-container'>
        <a href="mailto:trevorlomba@gmail.com" rel="noopener noreferrer" className="contact-link" target="_blank">email</a>
        <a href="tel:5084412186" rel="noopener noreferrer" className="contact-link" target="_blank" >phone</a>
        <a href="https://github.com/trevorlomba" rel="noopener noreferrer" className="contact-link" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/trevorlomba/" rel="noopener noreferrer" className="contact-link" target="_blank">linkedin</a>
      </div>
    </section>
  )
}

export default Contact