import React from 'react'
import './Portfolio.css'
import UI1 from '../../Assets/UIUX1.jpg'
import UI2 from '../../Assets/uiux2.jpg'
import UI3 from '../../Assets/uiux3.jpg'
import UI4 from '../../Assets/uiux4.png'
import UI5 from '../../Assets/uiux5.png'
import UI6 from '../../Assets/uiux6.jpg'
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
       <div className='portfolio-container'>
        <div className='portfolio-section'>
           <div className="p-item">
            <img src={UI1}></img>
            <h3>First Items is here</h3>
            <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
            </div>
           </div>
           <div className="p-item">
           <img src={UI2}></img>
            <h3>First Items is here</h3>
            <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
            </div>
           </div>
           <div className="p-item">
            <img src={UI3}></img>
            <h3>First Items is here</h3>
              <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
              </div>
            </div>
        
        
            <div className="p-item"><img src={UI4}></img>
            <h3>First Items is here</h3>
              <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
              </div>
            </div>
            <div className="p-item">
            <img src={UI5}></img>
            <h3>First Items is here</h3>
            <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
            </div>
            </div>
            <div className="p-item">
            <img src={UI6}></img>
            <h3>First Items is here</h3>
            <div className='buttons'>
                <a href="" className='btn btn-primary'>GITHUB</a>
                <a href='' className='btn'>Live Demo</a>
            </div>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Portfolio
