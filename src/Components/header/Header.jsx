import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/me.png"
import './header.css'
import '../../index.css'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Manav Prajapati</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            
            <HeaderSocials />

            <div className="me">
              <img src={ME} alt="Profile Pic" />
            </div>
        </div>
    </header>
  )
}

export default Header