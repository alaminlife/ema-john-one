import React from 'react';
import './Shops.css';
import fakeData from '../../fakeData/products.json';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shops = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    const [cart,satCart] = useState ([]);

        const handelAddProduct = (Product) => {

            const newCart = [...cart,Product];
            satCart(newCart);
        }


    return (
        <div className='shops-container'>
            <div className='product-container'>
            {
                products.map(pd => <Product 

                    handelAddProduct = {handelAddProduct}
                    product={pd}
                    ></Product>)
            }

            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shops;