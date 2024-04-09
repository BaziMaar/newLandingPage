import React, { useState } from 'react';
import logo from '../Images/logo.png';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('Home'); // State to track active menu item

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href='/' className={activeMenuItem === 'Home' ? 'active' : ''} onClick={() => handleMenuClick('Home')}>Home</a></li>
                <li><a href='#presentaion' className={activeMenuItem === 'Games' ? 'active' : ''} onClick={() => handleMenuClick('Games')}>Games</a></li>
                <li><a href='#about' className={activeMenuItem === 'About' ? 'active' : ''} onClick={() => handleMenuClick('About')}>About</a></li>
                <li><a href='/privacy' className={activeMenuItem === 'Privacy Policy' ? 'active' : ''} onClick={() => handleMenuClick('Privacy Policy')}>Privacy Policy</a></li>
                <li><a href='/terms' className={activeMenuItem === 'Terms & Condition' ? 'active' : ''} onClick={() => handleMenuClick('Terms & Condition')}>Terms & Condition</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;

