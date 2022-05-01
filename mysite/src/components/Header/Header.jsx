import React from 'react'
import { CTA } from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h2>Kuchiyash Serghei</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
