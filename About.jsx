import React from 'react'
import './About.css'
import ME from '../../Assets/AsadWithBG.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='About'>
      <h5>Get to know</h5>
      <h1>About Me</h1>

<div className="container about-container">
      <div className='container L-container'>
      <div className="about-me-img">
        <img src={ME} alt="" />
      </div>
    </div>




      <div className='container R-About'>
       <div className='About-cards'>
        <article className='About-card'>
           <FaAward className='about-icon'/>
           <h5>Experience</h5>
           <small>1+ Years Working</small>
           
        </article>
        <article className='About-card'>
           <AiOutlineFolderOpen className='about-icon'/>
           <h5>Projects</h5>
           <small>10+ Projects Completed</small>
           
        </article>
        <article className='About-card'>
           <AiOutlineUsergroupAdd className='about-icon'/>
           <h5>Clients</h5>
           <small>10+ WorldWide Clients</small>
           
        </article>
       </div>

        <p>
        Aim of My Life is To secure a challenging position in a reputable organization
to expand my learnings, knowledge, and skills. Secure a responsible career
opportunity to fully utilize my training and skills, while making a significant
contribution to the success of the company. Also Want to become
Experienced Full Stack Developer in MERN. I am looking for a role of FrontEnd Developer where I can pitch my ideas along with being mentored
toward a successful career and to enhance my skills by taking on this
challenging position and expanding my knowledge. Its my Aim to get Earn
with my innovative ideas and make the possible innovative outcomes with My
development Skills

        </p>
        <a href='btn' className='btn btn-primary'>lets Talk</a>
      </div>
      
</div>
    </section>
  )
}

export default About