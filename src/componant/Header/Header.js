import React from 'react';
import Logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src= {Logo} alt="" />
            <div>
                <a href="">Order</a>
                <a href="">Order review</a>
                <a href="">Manage Inventory</a>
                <a href="">Log In</a>
                
            </div>
        </div>
    );
};

export default Header;