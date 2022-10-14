import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useState([])
      // ei khane ekadhik product thak tai eta array te set kora hoy 
      const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const clickAddTocart = (products) => {
        // console.log(products);
        // eikhane newCart cart item ta copi korechi and tar sathe product ta add korchi 
        const newCart = [...cart, products]
        setCart(newCart)
    }
    return (
        <div className='shop-root'>
            <div className='product-root'>
                {
                    products.map( product => <Product
                    key={product.id}
                    product = {product}
                    clickAddTocart = {clickAddTocart}
                    ></Product>)
                }
            </div>
            <div className='cart-componant'>
                <Cart
                    cart = {cart}
                ></Cart>
                
            </div>
        </div>
    );
};

export default Shop;