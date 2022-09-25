import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {SiUpwork} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a href='https://www.linkedin.com/in/asad-ullah-3a37a322a/'><BsLinkedin/></a>
      <a href='https://github.com/'><BsGithub/></a>
      <a href='https://www.upwork.com/'><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials
