import React from 'react';
import fakeData from '../../fakeData/products.JSON';
import { UseState } from 'react';

const shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = UseState(first10);
   
    return (
        <div>
            <h1>
                This is shop
            </h1>

            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default shop;