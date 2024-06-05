import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className="Navbar">
        <div className="logo"><img src={logo} alt="Logo"/></div>
        <div className="search">
          <input type="text" id="searchItem" placeholder='Search' />
          <input type="button" className='btn' value="Search" />
        </div>
        <div className="mainmenu"></div>
      </div>
    </div>
  )
}

export default Header