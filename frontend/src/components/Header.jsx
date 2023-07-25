import React, { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {  FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import '../styles/header.css'; 
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fetchProducts } from '../utils/productActions';
import {HeartFill} from 'react-bootstrap-icons'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
 
} from '@mui/material';
import { Category, Person, Search } from '@mui/icons-material';

export default function Header({onSearch }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [searchQuery, setSearchQuery] = useState('');
  const user = useSelector((state) => state.user.user);
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  
  
  const handleSearchMenuClick = () => {
    setShowSearchMenu(!showSearchMenu);
  };
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
    <Box>
      {isSmallScreen ? (
        <AppBar position="static">
          <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
            
            {/* </Menu> */}
            <Link to="/shop">
              <Category/>
              </Link>

            {/* Person Icon */}
            <Link to="/user">
              <IconButton color="inherit" aria-label="person">
                <Person />
              </IconButton>
            </Link>

            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" className="header-logo" />
            </Link>

            {/* Search Icon */}
            <IconButton onClick={handleSearchMenuClick} color="inherit" aria-label="search">
              <Search />
            </IconButton>
            <Menu
              anchorEl={showSearchMenu}
              anchorOrigin={{ vertical: 'top', horizontal:'center' }}
              keepMounted
              open={Boolean(showSearchMenu)}
              onClose={() => setShowSearchMenu(false)}
            >
              {/* Add your search menu items here */}
              <MenuItem onClick={() => setShowSearchMenu(false)}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
                <Link to={`/search?query=${searchQuery}`}><Search /></Link>
              </MenuItem>
              
              {/* Add more menu items as needed */}
            </Menu>

            {/* Cart Icon */}
            <Link to="/user/cart">
              <IconButton color="inherit" aria-label="cart">
              <Badge badgeContent={cartItemCount} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      ) : (
        <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            {/* Add your logo image or text here */}
            <Link to="/">
              <img src={logo} alt="Logo" className="header-logo" />
            </Link>
          </div>
          {/* Add your category selector component or expand button here */}
          <div className="header-links category-selector">
            <Typography className="header-item home-header">
              <Link to="/">Home</Link>
            </Typography>
            <Link to="/shop">
              <Typography className="header-item categories-header">
                Categories
              </Typography>
            </Link>
            <Link to="/deals">
              <Typography className="header-item deals-header">
                Deals
              </Typography>
            </Link>
            {user ? (
              <Link to="/user/orders">
                <Typography className="header-item orders-header">
                  My Orders
                </Typography>
              </Link>
            ) : (
              <Link to="/login">
                <Typography className="header-item orders-header">
                  My Orders
                </Typography>
              </Link>
            )}
          </div>
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
                  <Search />
                </button>
              </Link>
            </div>
          )}
          <div className="header-icons">
            <Link to="user/wishlist">
              <HeartFill className="text-danger" />
            </Link>
            <div className="user-icon">
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
              <IconButton aria-label="cart">
                <Link to="user/cart">
                  <Badge badgeContent={cartItemCount} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      )}
    </Box>
  );
};


