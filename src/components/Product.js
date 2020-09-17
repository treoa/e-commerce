import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The lean Startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__ranking">
                    <p><span role="img" aria-label="stars">⭐⭐⭐</span></p>
                </div>
                {/* {// eslint-disable-next-line} */}
                <img src="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" 
                alt="product" className="product__image"/>
                
                {/* {// eslint-disable-next-line} */}
                <button className="product__basketAdd">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
