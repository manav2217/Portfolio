import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {BiBookBookmark} from "react-icons/bi"
import {MdHomeRepairService} from "react-icons/md"
import {RiContactsLine} from "react-icons/ri"
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#">{AiOutlineHome()}</a>
      <a href="#about">{SiAboutdotme()}</a>
      <a href="#experience">{BiBookBookmark()}</a>
      <a href="#services">{MdHomeRepairService()}</a>
      <a href="#contact">{RiContactsLine()}</a>
    </nav>
  )
}

export default Nav