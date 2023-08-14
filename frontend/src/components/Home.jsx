
import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles/home.css'; 
// import MovingComponent from 'react-moving-text'
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
// import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import { useSnapCarousel } from 'react-snap-carousel';
import ShopByCategory from './ShopByCategory';


export default function Home({onSearch}) {
  // const [searchQuery, setSearchQuery] = useState('');
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };
  const navigate=useNavigate();

  const handleSecondTab=()=>{
    navigate('/shop');
  };
  const handleFirstTab=()=>{
    navigate('/login');
  };

  const carouselImages = [
    'https://raffasports.s3.ca-central-1.amazonaws.com/sliding1.jpg',
    'https://raffasports.s3.ca-central-1.amazonaws.com/sliding2.jpg',
    'https://raffasports.s3.ca-central-1.amazonaws.com/sliding3.jpg',
    'https://raffasports.s3.ca-central-1.amazonaws.com/sliding4.jpg',
    'https://raffasports.s3.ca-central-1.amazonaws.com/sliding5.jpg',
  ];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const isSmallScreen=window.innerWidth<1000;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line
  }, [index]);
  return (
    <div className='home-page'>   
     <body>
  
     <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
     </div>
    </body> 
    {/* <div className='title'> */}
  {/* <div className="moving-component-container"> */}
  <Box className='home-images'>
  <Box className='home-main' sx={{
              width: isSmallScreen ? '100%' : '100%',
              margin: '0 auto',
              height: isSmallScreen ? '250px' : '380px',
              borderRadius:'20px',
              
            }}>
    <img width='100%' height='100%'  src='https://raffasports.s3.ca-central-1.amazonaws.com/home.jpg'alt='home'/>
  </Box>
  <Box sx={{ width: '100%',borderRadius:'20px', margin: '0 auto' }}>
            <div className='slideshow'>
              <div
                className='slideshowSlider'
                style={{
                  marginTop:'10px',
                  transform: `translate3d(${-index * 100}%, 0, 0)`,
                  width: '50%',
                  height: '50%',
                  margin: '0 0',
                  display:'flex',
                  justifyContent:'center',
                }}
              >
                {/* {carouselImages.map((imageUrl, idx) => (
                  <div
                    className='slide'
                    key={idx}
                    style={{
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize:'cover',
                      flex:'0 0 100%',
                      margin:'0 5px',
                    }}
                  ></div>
                ))} */}
              
              {/* Duplicate the last two images to the front */}
      {carouselImages.slice(-5).concat(carouselImages).map((imageUrl, idx) => (
        <div
          className='slide'
          key={idx}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: '100% 100%',
            backgroundRepeat:'no-repeat',
            flex: '1 0 100%',
            margin: '0 10px',
          }}
        ></div>
      ))}
      </div>

              <div className='slideshowDots'>
                {carouselImages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? ' active' : ''}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </Box>
          </Box>
 
  {/* </div> */}

      
{/* </div> */}

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
    <ShopByCategory/>

    
    
</div>

  

  )
}
