import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/images/logo-white.png'


const Footer = () => {
  return (
    <footer className='footer'>
      <NavLink to='/' className='footer-link-logo'>
        <img src={Logo} 
              alt='Logo Kasa' 
              className='footer-logo' />
      </NavLink>
      <span className='footer-desc'>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer