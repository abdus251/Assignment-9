import React from 'react';
import Data from '../../../public/others.json'
const Cart = ({job}) => {
    const { phone, email, address}  = job;
    console.log(Data)
    return (
        <div>
             <div className="">
            <h3 className='text-black p-4 font-bold box-content w-60 h-72 bg-purple-50 mr-28 mt-36 text-1xl'>Job Details</h3>
           {
           
           }
        </div>
        </div>
    );
};

export default Cart;