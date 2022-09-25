import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
  const [activeNav, setactiveNav]=useState('#');

  return (
    <div className="navbar">
      <a href="#" onClick={()=>setactiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#About" onClick={()=>setactiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#Experience" onClick={()=>setactiveNav('#Experience')} className={activeNav==='#Experience' ? 'active':''}><BiBookAlt/></a>
      <a href="#Services" onClick={()=>setactiveNav('#Services')} className={activeNav==='#Services' ? 'active':''}><RiCustomerServiceLine/></a>
      <a href="#Contact" onClick={()=>setactiveNav('#Contact')} className={activeNav==='#Contact' ? 'active':''}><AiOutlineMessage/></a>
    </div> 
  )
}

export default Navbar