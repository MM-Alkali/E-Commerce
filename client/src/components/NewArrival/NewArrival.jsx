import React from 'react'
import './NewArrival.css';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  return (
    <section class="section">
        <div class="title">
        <h1>NEW ARRIVALS</h1>
        <p>All the latest picked from designer of our store</p>
      </div>

      <div class="productcenter">
        <div class="productitem">
        <div class="overlay">
            <Link to='/'>
              <img src={require("../../assets/images/product-1.jpg")} alt="product-1" />

            </Link>
            {/* <a href="productDetails.html" class="productthumb">
            </a> */}
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="productDetails.html">Quis Nostrud Exercitation</Link>
            <h4>$700</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
              <img src={require("../../assets/images/product-3.jpg")} alt="product-3" />
            </Link>
            <span class="discount">50%</span>
          </div>

          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Sonata White Men’s Shirt</Link>
            <h4>$800</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
              <img src={require("../../assets/images/product-2.jpg")} alt="product-2" />
            </Link>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Concepts Solid Pink Men’s Polo</Link>
            <h4>$150</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>

        <div class="productitem">
          <div class="overlay">
            <Link to="" class="product-thumb">
              <img src={require("../../assets/images/product-4.jpg")} alt="" />
            </Link>
            <span class="discount">50%</span>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$900</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
            <img src={require("../../assets/images/product-5.jpg")} alt="" />
            </Link>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$100</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
              <img src={require("../../assets/images/product-6.jpg")} alt="" />
            </Link>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$500</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
              <img src={require("../../assets/images/product-7.jpg")} alt="product-7" />
            </Link>
            <span class="discount">50%</span>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$200</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
        <div class="productitem">
          <div class="overlay">
            <Link to="" class="productthumb">
              <img src={require("../../assets/images/product-2.jpg")} alt="product-2" />
            </Link>
          </div>
          <div class="productinfo">
            <span>MEN'S CLOTHES</span>
            <Link to="">Edor do eiusmod tempor</Link>
            <h4>$560</h4>
          </div>
          <ul class="icons">
            <li><i class="bx bx-heart"></i></li>
            <li><i class="bx bx-search"></i></li>
            <li><i class="bx bx-cart"></i></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default NewArrival