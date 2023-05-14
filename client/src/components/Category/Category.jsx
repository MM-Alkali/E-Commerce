import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <section className="section">
         <div className="catcenter">
         <div className="cat">
          <img src={require("../../assets/images/cat3.jpg")} alt="cat3" />
          <div>
            <p>WOMEN'S WEAR</p>
          </div>
        </div>
        <div className="cat">
          <img src={require("../../assets/images/cat2.jpg")} alt="cat2" />
          <div>
            <p>ACCESSORIES</p>
          </div>
        </div>
        <div className="cat">
          <img src={require("../../assets/images/cat1.jpg")} alt="cat1" />
          <div>
            <p>MEN'S WEAR</p>
          </div>
        </div>
         </div>
    </section>
  )
}

export default Category