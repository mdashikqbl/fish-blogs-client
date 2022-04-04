import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Fish Blogs</h1>
            <div className='header-link'>
                <a><Link to="/">Home</Link></a>
                <a ><Link to="reviews">Reviews</Link></a>
                <a ><Link to="dashboard">Dashboard</Link></a>
                <a ><Link to="blogs">Blogs</Link></a>
                <a ><Link to="about">About</Link></a>

            </div>
        </div>
    );
};

export default Header;