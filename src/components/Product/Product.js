import React from 'react';

const Product = (props) => {
    console.log(props.Product.name);
    return (
        <div>
            <h3>This is product</h3>
            <h4>{props.Product.name}</h4>
        </div>
    );
};

export default Product;