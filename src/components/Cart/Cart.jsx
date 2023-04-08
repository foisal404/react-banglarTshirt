import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            {/* <h1>this is cart{cart.length}</h1> */}
            {
                cart.map((carteach,inx)=><p>{carteach.name}</p>)
            }
        </div>
    );
};

export default Cart;