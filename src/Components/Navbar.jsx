import React, { useState } from 'react';
import logo from '../Images/logo.png';
import menu from '../Images/newMenu.png'
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
            <li style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
  <a
    href='/login'
    className={activeMenuItem === 'login' ? '' : 'active'}
    onClick={() => handleMenuClick('login')}
    style={{
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: activeMenuItem === 'login' ? '#9d00ff' : '#9d00ff', // Example colors
      color: '#fff',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    Login
  </a>
</li>
            <input type='checkbox' className='menu-btn' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <img src={menu} alt='Menu Icon' />
            </label>
            
            <ul className='menu'>
                <li><a href='/' className={activeMenuItem === 'Home' ? 'active' : ''} onClick={() => handleMenuClick('Home')}>Home</a></li>
                <li><a href='#presentaion' className={activeMenuItem === 'Games' ? 'games' : ''} onClick={() => handleMenuClick('Games')}>Games</a></li>
                <li><a href='/about' className={activeMenuItem === 'About' ? 'active' : ''} onClick={() => handleMenuClick('About')}>About</a></li>
                <li><a href='/privacy' className={activeMenuItem === 'Privacy Policy' ? 'active' : ''} onClick={() => handleMenuClick('Privacy Policy')}>Privacy Policy</a></li>
                <li><a href='/refund' className={activeMenuItem === 'Refund Policy' ? 'active' : ''} onClick={() => handleMenuClick('Refund Policy')}>Refund Policy</a></li>
                <li><a href='/terms' className={activeMenuItem === 'Terms & Condition' ? 'active' : ''} onClick={() => handleMenuClick('Terms & Condition')}>Terms & Condition</a></li>
                <li><a href='/contact' className={activeMenuItem === 'About' ? 'active' : ''} onClick={() => handleMenuClick('Contact Us')}>Contact Us</a></li>
                
            </ul>


        </nav>
    )
}

export default Navbar;

