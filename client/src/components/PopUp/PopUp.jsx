import React from 'react'
import './PopUp.css';
import { Link } from 'react-router-dom';

const PopUp = () => {
  return (
    <div className="popup hidepopup">
    <div className="popupcontent">
      <div className="popupclose">
        <i className='bx bx-x'></i>
      </div>
      <div className="popupleft">
        <div className="popupimgcontainer">
          <img className="popupimg" src={require("../../assets/images/popup.jpg")} alt="popup"/>
        </div>
      </div>
      <div className="popupright">
        <div className="rightcontent">
          <h1>Get Discount <span>50%</span> Off</h1>
          <p>Sign up to our newsletter and save 30% for you next purchase. No spam, we promise!
          </p>
          <form action="#">
            <input type="email" placeholder="Enter your email..." className="popupform"/>
            <Link to="#">Subscribe</Link>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopUp