import React from 'react'
import CTA from './CTA'
import './Header.css'
import Me from '../../Assets/asadullah.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <div className='heading'>
        <h5>Hello I'm </h5>
        <h1>Asad Ullah</h1>
        </div>
        <h5 className='text-light'>FrontEnd Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <a href='#contact' className='scroll-down'>scroll down</a>
        <div className="me">
          <img src={Me} alt="me"></img>
        </div>
       
        
      </div>
    </header>
  )
}

export default Header