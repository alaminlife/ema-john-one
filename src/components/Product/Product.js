import React from 'react';
import './Product.css';

const Product = (props) => {

    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>

            <div>
                    <img className='product-pic' src={img} alt=''/>
            </div>

                <div product-name>
                    <h4 className='product-name'>{name}</h4>
                    <p>by: {seller}</p>
                    <p>$: {price}</p>
                    <p><small>Only {stock} left in stock -Order soon</small></p>
                    <button className='main-btn'>add to cart</button>
                </div>

           
        </div>
    );
};

export default Product;