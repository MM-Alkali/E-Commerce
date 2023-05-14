import React from 'react'
import './Hero.css';

import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="hero">
         <div className="glide" id="glide_1">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <div className="center">
                        <div className="left">
                            <span className="">New Inspiration 2020</span>
                            <h1 className="">NEW COLLECTION!</h1>
                            <p>Trending from men's and women's  style collection</p>
                            <Link to="#" className="herobtn">SHOP NOW</Link>
                            </div>
                            <div className="right">
                            <img className="img1" src={require('../../assets/images/hero-1.png')} alt="hero1"/>
                        </div>
                        </div>
                    </li>
                    {/* <li className="glideslide">
                    <div className="center">
                        <div className="left">
                        <span>New Inspiration 2020</span>
                        <h1>THE PERFECT MATCH!</h1>
                        <p>Trending from men's and women's  style collection</p>
                        <a href="#" className="herobtn">SHOP NOW</a>
                        </div>
                        <div className="right">
                        <img className="img2" src={require('../../assets/images/hero-2.png')} alt="hero2"/>
                        </div>
                    </div>
                    </li> */}
                </ul>
            </div>
         </div>
    </div>
  )
}

export default Hero