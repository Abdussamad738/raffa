import React, { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/header.css'; 
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fetchProducts } from '../utils/productActions';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import {HeartFill} from 'react-bootstrap-icons'
export default function Header({onSearch }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [searchQuery, setSearchQuery] = useState('');
  const user = useSelector((state) => state.user.user);
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const dispatch = useDispatch();
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  //   '& .MuiBadge-badge': {
  //     right: -3,
  //     top: 13,
  //     border: `2px solid ${theme.palette.background.paper}`,
  //     padding: '0 4px',
  //   },
  // }));
  const cartItems = useSelector((state) => state.cart.cart ?? []);
const cartItemCount = cartItems.length;

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
              {user ? (
              <Link to='/user/orders'>
              <div className='header-item orders-header'>
                My Orders
              </div></Link>
              ):(
                <Link to="/login">
                  <div className='header-item orders-header'>
                My Orders
              </div>
                </Link>

              )}
          {/* Add your category selector component or expand button here */}
          {/* <button>Expand</button> */}
        </div>
      )}
      
      
      {!isHomePage && (
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Link to={`/search?query=${searchQuery}`}>
        <button onClick={handleSearch}>
        🔍
          {/* <img src={SearchIcon} alt="Search" /> */}
        </button>
        </Link>
        </div>
      )}
        
        
        <div className='header-icons'>

        <Link to="user/wishlist">
          <HeartFill className='text-danger'/>
          </Link>
      
      <div className="user-icon">
        {/* Add your user icon component or link to user dashboard here */}
        {/* <Link to="/user-dashboard">
          <FaUser />
        </Link> */}
        {user ? (
        <Link to="/user">
          <FaUser />
        </Link>
      ) : (
        <Link to="/login">
          <FaUser />
        </Link>
      )}
      </div>
      <div className="cart-icon">
        {/* Add your cart icon component or link to cart page here */}
        
          <IconButton aria-label="cart">
          <Link to="user/cart">
            <Badge badgeContent={cartItemCount} color="secondary" >
              <ShoppingCartIcon />
            </Badge>
            </Link>
          </IconButton>
        
      </div>
      </div>
      </div>
    </header>
  );
};


