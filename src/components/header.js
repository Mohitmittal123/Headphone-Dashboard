import React from 'react';

export default function Header(){
    return (
        <nav>
            <div className="logo">
                Reyes.
            </div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About us</li>
                <li>Contact Us</li>
            </ul>
            <div className="search">
                <i className="search-icon">
                              </i>
                <i className="fa fa-shoping-basket"></i>
            </div>
        </nav>
    )
}