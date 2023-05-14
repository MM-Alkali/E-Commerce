import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';
const Header = () => {
  return (
    <div>
        <header className="header">
        <div className="topnav">
        <div className="container">
            <div className='dflex'>
            <p className='pfont'>Order Online Or Call Us: (001) 2222-55555</p>
            <ul className="dflexlist">
                <li>About Us</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
      </div>

      <div className="navigation">
      <div className="navcenter">
      <Link to="/" className="logo"><h1>Dans</h1></Link>

        <ul className="navlist">
        <li className="navitem">
              <Link to="/" className="navlink">Home</Link>
            </li>
            <li className="navitem">
              <Link to="/" className="navlink">Shop</Link>
            </li>
            <li className="navitem">
            <Link to="#terms" className="navlink">Terms</Link>
            </li>
            <li className="navitem">
              <Link to="#about" className="navlink">About</Link>
            </li>
            <li className="navitem">
              <Link to="#contact" className="navlink">Contact</Link>
            </li>
            <li className="icons">
            <Link to="/login" className="icon">
              <i className="bx bx-user"></i>
            </Link>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="dflex">0</span>
            </div>
            <Link to="/" className="icon">
              <i className="bx bx-cart"></i>
              <span className="dflex">0</span>
            </Link>
            </li>
        </ul>

        <div className="icons">
            <Link to="/login" className="icon">
              <i className="bx bx-user"></i>
            </Link>
            <div className="icon">
              <i className="bx bx-search"></i>
            </div>
            <div className="icon">
              <i className="bx bx-heart"></i>
              <span className="dflex">0</span>
            </div>
            <Link to="/" className="icon">
              <i className="bx bx-cart"></i>
              <span className="dflex">0</span>
            </Link>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-left"></i>
          </div>

      </div>
      </div>
    </header>
    </div>
  )
}

export default Header