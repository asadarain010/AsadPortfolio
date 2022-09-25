import React from 'react'
import './Testimonial.css'
import UI from '../../Assets/AsadWithBG.jpg';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    id:1,
    img:UI,
    name:"Waqar Shafqat",
    p:"Very Lucky to have client like Asad and Very Happy to work with him"
  },
  {
    id:2,
    img:UI,
    name:"Waqar Shafqat",
    p:"Very Lucky to have client like Asad and Very Happy to work with him"
  },
  {
    id:3,
    img:UI,
    name:"Waqar Shafqat",
    p:"Very Lucky to have client like Asad and Very Happy to work with him  lor sssf sf gsds fged sde gferf eds def efr sfe red"
  }
]


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>What my clients says</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonail-container'
       modules={[Pagination]}
       slidesPerView={1}
       pagination={{clickable:true}}
      >
        {
          data.map(({img,name,p}, i)=>{
            return(
              <SwiperSlide key={i} className='testimonial-data'>
                 <img src={img} alt="" />
                 <h3>{name}</h3>
                 <p className='testimonial-para'>{p}</p>
              </SwiperSlide>
         ) 
        })
        }

      </Swiper>
    </section>
  )
}

export default Testimonial