import React from 'react'
import './PromoBanner.css';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <section className="banner">
        <div className="left">
        <span className="trend">Trend Design</span>
        <h1>New Collection 2021</h1>
        <p>New Arrival <span className="color">Sale 50% OFF</span> Limited Time Offer</p>
        <Link to="#" className="btn">Discover Now</Link>
        </div>
        <div className="right">
        <img src={require("../../assets/images/banner.png")} alt="banner"/>
        </div>
    </section>
  )
}

export default PromoBanner