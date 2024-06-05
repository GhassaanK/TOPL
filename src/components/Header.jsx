import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import msg from '../assets/VectorMessage.png'
import profile from '../assets/VectorProfile.png'
import orders from '../assets/Vectororders.png'
import cart from '../assets/Vectorcart.png'

const Header = () => {
  return (
    <div className='Header'>
      <div className="Navbar">
        <div className="logo"><img src={logo} alt="Logo"/></div>
        <div className="search">
          <input type="text" id="searchItem" placeholder='Search' />
          <input type="button" className='btn' value="Search" />
        </div>
        <div className="mainmenu">
          <div className="sect">
          <img src={profile} alt="Profile"/>
            Profile
          </div>
          <div className="sect">
          <img src={msg} alt="Messages"/>
            Messages
          </div>
          <div className="sect">
          <img src={orders} alt="Orders"/>
            Orders
          </div>
          <div className="sect">
          <img src={cart} alt="My Cart"/>
            My Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header