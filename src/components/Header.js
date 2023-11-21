import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='header__logo'>
            <img src="img/blog-high-resolution-logo-white-transparent.png"/>
        </div>
        <div className='header__menu'>
            <a href="#">About Us</a>
            <a href="#">Our work</a>
            <a href="#">Our Impact</a>
            <a href="#">Participate</a>
        </div>

    </div>
  )
}

export default Header