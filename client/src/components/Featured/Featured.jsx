import React from 'react'
import { Link } from 'react-router-dom'
import './Featured.css'

const Featured = () => {
  return (
    <section className="section">
        <div className="title">
        <h1>Featured</h1>
        <p>All the latest picked from designer of our store</p>
        </div>

        <div className="productcenter">
        <div className="productitem">
          <div className="overlay">
            <Link to="" className="productthumb">
              <img src={require("../../assets/images/product-7.jpg")} alt="product-7" />
            </Link>
            <span className="discount">50%</span>
          </div>
          <div className="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Quis Nostrud Exercitation</Link>
            <h4>$700</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="productitem">
          <div className="overlay">
            <Link to="" className="productthumb">
              <img src={require("../../assets/images/product-4.jpg")} alt="product-4" />
            </Link>
          </div>

          <div className="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Sonata White Men’s Shirt</Link>
            <h4>$800</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="productitem">
          <div className="overlay">
            <Link to="" className="productthumb">
              <img src={require("../../assets/images/product-1.jpg")} alt="" />
            </Link>
            <span className="discount">40%</span>
          </div>
          <div className="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
        <div className="productitem">
          <div className="overlay">
            <Link to="" className="productthumb">
              <img src={require("../../assets/images/product-6.jpg")} alt="" />
            </Link>
          </div>
          <div className="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$900</h4>
          </div>
          <ul className="icons">
            <li><i className="bx bx-heart"></i></li>
            <li><i className="bx bx-search"></i></li>
            <li><i className="bx bx-cart"></i></li>
          </ul>
        </div>
    </div>
    </section>
  )
}

export default Featured