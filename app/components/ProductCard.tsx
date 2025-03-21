import React from 'react'
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';
import '../globals.css'; // Adjusted to match the location


const ProductCard = () => {
    return (
        // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
        <div className='p-5 my-5 bg-green-400 text-white text-xl hover:bg-green-500'>
            <AddToCart />
        </div>
    )
}

export default ProductCard