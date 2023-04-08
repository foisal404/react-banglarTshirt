import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../product/Product';
import "./Products.css"
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Products = () => {
    // passing data load recive
    const load =useLoaderData();
    // console.log(load);
    // state to set update 
    const [cart,setCart]=useState([]);
    // addedcart handler 
    const addedtoCart=(id)=>{
        // console.log("added in cart",id);
        let product=load.find(pro=>pro._id===id);
        let isin=cart.find(ca=>ca._id===id)
        if(isin){
            console.log("already availavle");
            toast("already")
        }
        else{

            setCart([...cart,product]);
        }
    }
    return (
        <div className='product-show-container'>
            <div className='products'>
                {/* <h1>hello this from products{load.length}</h1> */}
                {
                    load.map(product=><Product addedtoCart={addedtoCart} key={product._id} product={product}></Product>)
                }
            </div>
            <div>
                <Cart  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Products;