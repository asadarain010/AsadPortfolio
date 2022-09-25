import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
  

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phj7x7n', 'template_rnadkzc', form.current, 'mP0wT_M9BHXKkJhey')
      
    e.target.reset();
  };
  


  return (
   <section id='Contact'>
    <h5>Get in Contact</h5>
    <h2>Contact me</h2>
    <div className="contact-container">
      <div className="contact-left">
        <article className='contact-data'>
          <AiOutlineMail/>
          <h3>Email</h3>
          <h4>arainasad701@gmail.com</h4>
          <a href="" >send a message</a>
        </article>
        <article className='contact-data'>
          <BsMessenger/>
          <h3>Messanger</h3>
          <h4>arainasad</h4>
          <a href="" >send a message</a>
        </article>
        <article className='contact-data'>
          <BsWhatsapp/>
          <h3>WhatsApp No</h3>
          <h4>+923012305674</h4>
          <a href="">send a message</a>
        </article>
      </div>
      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="address" name="email" placeholder='Your Email' required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
          <button type='submit' onclick='function()' className='btn btn-primary'>Send Message</button>
          <h3 className='submit-message'></h3>
        </form>
      </div>
    </div>
   </section>
  )
}

export default Contact