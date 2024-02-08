import React from 'react';
import Product from './../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // const total = cart.reduce((total, prd)=> total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
    shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }
    const tex = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
    }

    return (
        <div>
            <h5>Order summary</h5>
            <p>items ordered {cart.length}</p>
            <p>Product price :{formatNumber(total)}</p>
            <p><small>shipping {shipping}</small></p>
            <p><small>Teex + VAT</small> {tex}</p>
            <p>total price {grandTotal}</p>

        </div>
    );
};

export default Cart;