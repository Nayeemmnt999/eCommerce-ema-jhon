import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import ('./Product.css')
const Product = ({clickAddTocart , product}) => {
    // const { clickAddTocart , product} = props; 
    const {img, name, price, seller, ratings} = product ;
   
    return (
        <div className='product'>

            <img src= {img} alt="" /> 
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='manufecture'><small>Manufecture: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=> clickAddTocart(product) } className='cart-button'>
                <p className='cart-button-text'>Add to cart</p>
                <FontAwesomeIcon  icon={faShoppingCart}></FontAwesomeIcon>
            </button>
           
            
        </div>
    );
};

export default Product;