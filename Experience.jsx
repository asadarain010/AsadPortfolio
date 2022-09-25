import React from 'react'
import './Experience.css'
import {BsPatchCheck} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='Experience'>
    <h5>What Skill I have</h5>
    <h2>My Experience</h2>
<div className='Ex-Container'>
    <div className="Ex-FrontEnd">
     <h2>FrontEnd Skills</h2>
      <div className='Ex-FrontEnd-data'>
     <div className='Ex-left-item'>
     <article className='experience-detail'>
      
      <BsPatchCheck/>
      <div className='Ex-name'><h4>HTML</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>

    <div className='Ex-name'><h4>Css</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'><h4>JavaScript</h4>
      <small>Intermediate</small>
      </div>
     </article>

     </div>
     <div className="Ex-right-item">
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>Bootstrap</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>Canva</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>Ux/Ui</h4>
      <small>Intermediate</small>
      </div>
     </article>
     </div>
    </div>
</div>
  { /* ==================Right Side=================== */ }
    <div className="Ex-Backend">
      <h2>Other Skills</h2>
      <div className='Ex-BackEnd-data'>
      <div className="Ex-right-left">
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>Wordpress</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>Shopify</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>MS Word</h4>
      <small>Experience</small>
      </div>
     </article>
      </div>
      <div className='Ex-right-right'>
      <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>MsExcell</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>MSPoweroint</h4>
      <small>Experience</small>
      </div>
     </article>
     <article className='experience-detail'>
  
      <BsPatchCheck/>
      <div className='Ex-name'>
        <h4>HTML</h4>
      <small>Experience</small>
      </div>
     </article>
      </div>
    </div>
    </div>
  </div>
    </section>
  )
}

export default Experience