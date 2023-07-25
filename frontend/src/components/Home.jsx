import React from 'react'
import { useState } from "react";

import '../styles/home.css'; 
import MovingComponent from 'react-moving-text'
import logo from '../assets/logo.png';
import {Box,Typography,InputAdornment} from '@mui/material'
import { Link } from 'react-router-dom';
import firsttab from '../assets/firsttab.jpg'
import secondtab from '../assets/secondtab.jpg'

import {FaAngleDown} from 'react-icons/fa'
import SearchIcon from '@mui/icons-material/Search';
export default function Home({onSearch}) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  // const handleSearchIconClick = () => {
  //   setShowShopByCategory(!showShopByCategory);
  // };

    

    
  return (
    <div className='home-page'>   
     <body>
  
     <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
     </div>
    </body> 
    <div className='title'>
  <div className="moving-component-container">
  <Box className="moving-component-wrapper">
    <MovingComponent
      type="fadeInFromLeft"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
      className="left"
    >
      <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '24px', // Font size for extra small screens (up to 600px)
          sm: '35px', // Font size for small screens (from 600px to 960px)
          md: '48px', // Font size for medium screens (from 960px to 1280px)
          lg: '64px', // Font size for large screens (above 1280px)
        },
        fontFamily: 'Arial, sans-serif', // Replace this with your desired font family
        fontWeight: 'bold', // You can adjust the font weight as well
      }}
    >
      Raffa
    </Typography>
    </MovingComponent>
    <img
        src={logo}
        alt="Logo"
        style={{
          width: '15%', // Adjust the width for different screen sizes
          height: 'auto', // Keeps the aspect ratio of the image
          display: 'block', // Ensures the image is centered within its container
          marginLeft:'5%',
          marginRight:'5%',
          marginBottom: '16px', // Add margin at the bottom to separate from Typography
        }}
      />

    <MovingComponent
      type="fadeInFromRight"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
      className="right"
    >
      <Typography
      variant="h1"
      sx={{
        fontSize: {
          xs: '24px', // Font size for extra small screens (up to 600px)
          sm: '32px', // Font size for small screens (from 600px to 960px)
          md: '48px', // Font size for medium screens (from 960px to 1280px)
          lg: '64px', // Font size for large screens (above 1280px)
        },
        fontFamily: 'Arial, sans-serif', // Replace this with your desired font family
        fontWeight: 'bold', // You can adjust the font weight as well
      }}
    >Sports</Typography>
    </MovingComponent>
    </Box>
    
  </div>
  <div className='arabic'>تجارة المعدات الرياضية راف</div>
  <Box className="search-input"sx={{
        display: 'flex',
        alignItems: 'center',
        
        
        
      }}>
  <input
        type="text"
        placeholder="Find your winning gear!"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        sx={{
          width: '100%',
          height: '48px',
          padding: '12px',
          borderRadius: '4px',
         
        }}
      />
      <Link to={`/search?query=${searchQuery}`}>
        <InputAdornment position="end" sx={{ cursor: 'pointer',marginTop:'5%'}}>
          <SearchIcon onClick={handleSearch} sx={{ fontSize: '24px' }} />
        </InputAdornment>
      </Link>
</Box>
      
</div>
    <div className='tabs'>
        
            
        <div className='first-tab'> 
        <Link to='/bulkorder'>
        <img src={firsttab} alt='firsttab'></img>
            <p> Shop for your team</p>
            <FaAngleDown/>
            </Link>
        </div>

        
        
        <div className='second-tab'>
        <Link to={{ pathname: "/shop" }}>
        <img src={secondtab} alt='secondtab'></img>
            <p>Shop by category</p>
            <FaAngleDown className='down'/>
            </Link>
        </div>
        
    </div>
    
    
</div>

  

  )
}
