import React from 'react'
import './Footer.css'
import { useState } from 'react';
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  const [activeNav, setactiveNav]=useState('#');
  return (
    <section id='Footer'>
      <h1 className='h1'>Asad Ullah</h1>
     <div className='footer-nav'>
     <a href="#" onClick={()=>setactiveNav('#')} className={activeNav==='#' ? 'active':''}>Home</a>
      <a href="#About" onClick={()=>setactiveNav('#about')} className={activeNav==='#about' ? 'active':''}>About</a>
      <a href="#Experience" onClick={()=>setactiveNav('#Experience')} className={activeNav==='#Experience' ? 'active':''}>Experience</a>
      <a href="#Services" onClick={()=>setactiveNav('#Services')} className={activeNav==='#Services' ? 'active':''}>Services</a>
      <a href="#Contact" onClick={()=>setactiveNav('#Contact')} className={activeNav==='#Contact' ? 'active':''}>Contact</a>
     </div>

     <div className='footer-icons'>
       <FiFacebook className='icon'/>
       <FiInstagram className='icon'/>
       <FiTwitter className='icon'/>
     </div>
    </section>
  )
}

export default Footer