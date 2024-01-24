import React from 'react';
import './Shops.css';
import fakeData from '../../fakeData/products.json';
import { useState } from 'react';
import Product from '../Product/Product';


const Shops = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    console.log (fakeData);
    return (
        <div className='shops-container'>
            <div className='product-container'>
            {
                products.map(pd => <Product product={pd}></Product>)
            }

            </div>

            <div className='cart-container'>
                <h4>This is cart</h4>
                <p>Jamapur Mymensingh Dhaka Bangladesh</p>

            </div>
            
        </div>
    );
};

export default Shops;