import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'; 
import MovingComponent from 'react-moving-text'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, InputAdornment} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



export default function Home({onSearch}) {
  
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const navigate=useNavigate();

  const handleSecondTab=()=>{
    navigate('/shop');
  };
  const handleFirstTab=()=>{
    navigate('/login');
  };

    

    
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
        letterSpacing: '1px',
        fontFamily:'-moz-initial', // Replace this with your desired font family
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
          boxShadow: 'rgba(219, 219, 219, 0.97) 2px 2px 4px',
          borderRadius:'50%',
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
        letterSpacing: '1px',
        fontFamily:'-moz-initial', // Replace this with your desired font family
        fontWeight: 'bold', // You can adjust the font weight as well
      }}
    >Sport</Typography>
    </MovingComponent>
    </Box>
    
  </div>
  <div className='arabic'>ر افا لتجارة المعدات الرياضية ش.ذ.م.م</div>
  <Box className="search-input"sx={{
        display: 'flex',
        alignItems:'baseline',
        gap:'2%',    
      }}>
        <Box sx={{width:'80%'}}> 
  <input
        type="text"
        placeholder="Find your winning gear!"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        sx={{
          
          width: '100%',
          height: '48px',
          padding: '2px',
          borderRadius: '4px',
          border:'1px solid #ccc'
         
        }}
      /></Box>
      <Box >
      <Link to={`/search?query=${searchQuery}`}>
        <InputAdornment  sx={{ cursor: 'pointer',marginLeft:'15%'}}>
          <SearchIcon onClick={handleSearch} sx={{ fontSize: '24px' }} />
        </InputAdornment>
      </Link>
      </Box>
</Box>
      
</div>
    <Box className='tabs'>
        
            
        <Box className='first-tab' onClick={handleFirstTab}> 
          <Typography variant='h5'>Sign in</Typography> 
          <PersonIcon className='icon' fontSize='large'/>   
        </Box>

        
        
        <Box className='second-tab' onClick={handleSecondTab}>
    
          <Typography variant='h5'>Shop</Typography>  
          <ShoppingBagIcon className='icon' fontSize='large'/>
       
      </Box>
        
    </Box>

    
    
</div>

  

  )
}
