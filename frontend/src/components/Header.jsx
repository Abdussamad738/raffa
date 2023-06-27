import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.PNG';
import '../styles/header.css'; 
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {HeartFill} from 'react-bootstrap-icons'
export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


    const isSmallScreen = window.innerWidth <= 500; // Adjust the breakpoint as needed
  return (
    <header className="fixed-header">
        <div className='header-content'>
      <div className="logo">
        {/* Add your logo image or text here */}
        <Link to="/"><img src={logo} className='header-logo'/></Link>
      </div>
      {isSmallScreen ? (
        <div className="expand-button">
          {/* Show the bar icon for small screens */}
          <FaBars />
        </div>
      ) : (
        <div className="header-links category-selector">
          <div className='header-item home-header'>
              <Link to="/">Home</Link>
              </div>
              <Link to='/shop'>
              <div className='header-item categories-header'>
                Categories
              </div>
              </Link>
              <Link to='/deals'>
              <div className='header-item deals-header'>
                Deals
              </div>
              </Link>
              <Link to='/orderhistory'>
              <div className='header-item orders-header'>
                My Orders
              </div></Link>
          {/* Add your category selector component or expand button here */}
          {/* <button>Expand</button> */}
        </div>
      )}
      
      
      {!isHomePage && (
          <div className="search-input">
            {/* Add your search input component here */}
            <input type="text" placeholder="Search" />
          </div>
        )}
        <div className='header-icons'>

        <Link to="user-dashboard"><HeartFill className='text-danger'/></Link>
      
      <div className="user-icon">
        {/* Add your user icon component or link to user dashboard here */}
        <Link to="user-dashboard">
          <FaUser />
        </Link>
      </div>
      <div className="cart-icon">
        {/* Add your cart icon component or link to cart page here */}
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
      </div>
      </div>
    </header>
  );
};


