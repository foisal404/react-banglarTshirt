import React from 'react';
import "./Product.css"

const Product = ({product,addedtoCart}) => {
    const {_id,name,picture,price}=product;
    return (
        <div className='product'>
            <img className='product-img' src={picture} alt="" />
            <h1>{name}</h1>
            <p>${price} only</p>
            <button  className='buy-now' onClick={()=>addedtoCart(_id)}>buy now</button>
        </div>
    );
};

export default Product;