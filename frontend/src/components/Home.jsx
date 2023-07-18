import React from 'react'
import { useRef,useState,useEffect } from "react";
import Header from './Header'
import '../styles/home.css'; 
import MovingComponent from 'react-moving-text'
import logo from '../assets/logo.PNG';
import BulkOrderPage from './BulkOrderPage';
import { Link } from 'react-router-dom';
import firsttab from '../assets/firsttab.jpg'
import secondtab from '../assets/secondtab.jpg'
import { FaIoIosArrowDropdown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaAngleDown} from 'react-icons/fa'
import ShopByCategory from './ShopByCategory';
import SearchIcon from '@mui/icons-material/Search';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
export default function Home({onSearch}) {

  const [searchQuery, setSearchQuery] = useState('');
  const [showShopByCategory, setShowShopByCategory] = useState(false);
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
  <div className="moving-component-wrapper">
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
      Raffa
    </MovingComponent>
    <img src={logo} alt="Logo" style={{ width: '25%', height: '80%' }}/>

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
      Sports
    </MovingComponent>
    </div>
    
  </div>
  <div className='arabic'>تجارة المعدات الرياضية راف</div>
  <div className="search-input">
  <input
    type="text"
    placeholder="Find your winning gear!"
    value={searchQuery}
    onChange={(e) => handleSearch(e.target.value)}
  />
  <Link to={`/search?query=${searchQuery}`}>
    <div className="search-icon" onClick={handleSearch}>
      <SearchIcon />
    </div>
    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
  </Link>
</div>
      
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
