import React, { useState, useEffect }  from 'react'
import '../styles/shop.css'; 
import { Box,useTheme,Typography } from "@mui/material";
import { tokens } from "./../theme";
import { useSelector, useDispatch } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import Layout from './Layout';
import {IconButton} from '@mui/material'
import CategoryProducts from './CategoryProducts'
import { fetchProducts } from '../utils/productActions';
import FilterListIcon from '@mui/icons-material/FilterList';
export default function ShopByCategory({filteredItems}) {
   // eslint-disable-next-line
  const [selectedFilter, setSelectedFilter] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
 
  const [items, setItems] = useState(filteredItems ? filteredItems : []);


  // Rest of your component code...

  useEffect(() => {
    // If filteredItems prop changes, update the items state accordingly
    if (filteredItems !== undefined) {
      setItems(filteredItems);
    }
  }, [filteredItems]);
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  
  const handleCheckboxChange = (event, updatedCheckboxes) => {
    // setSelectedCheckboxes(updatedCheckboxes);
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes((prevSelectedCheckboxes) => [
        ...prevSelectedCheckboxes,
        value,
      ]);
    } else {
      setSelectedCheckboxes((prevSelectedCheckboxes) =>
        prevSelectedCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };

  const handleCategoryClick = (category) => {
    const updatedCheckboxes = [...selectedCheckboxes, category];
    setSelectedCheckboxes(updatedCheckboxes);
    const matchedItems = products.filter((item) => item.category.includes(category));
    
    const updatedFilteredItems = matchedItems.length > 0 ? matchedItems : [];
    setItems(updatedFilteredItems);
    // setSearchQuery('');
  };

useEffect(()=>{
  const filteredItems = products.filter((item) =>
          
  selectedCheckboxes.some((checkbox) => item.category.includes(checkbox))
        );
        setItems(filteredItems);
 // eslint-disable-next-line
},[selectedCheckboxes])


  const [showCategoryFilter, setShowCategoryFilter] = useState(false); // State for expanding/collapsing filter

  const handleCategoryFilterClick = () => {
    setShowCategoryFilter(!showCategoryFilter);
  };
 
  const isSmallScreen = window.innerWidth <= 500;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box className='main' sx={{ backgroundColor: '#f5f5f7'}}>
      <Typography variant="h3">Shop By Category</Typography>

      <Box className='container sub' display='flex'sx={{ backgroundColor: '#f5f5f7'}}>
      {isSmallScreen ? (
          // Show the expand icon for smaller screens
          
          showCategoryFilter ? (
            <Box sx={{backgroundColor:'rgba(92, 96, 109, 0.6)'}}>
              <IconButton sx={{color:"#333"}} aria-label="expand" onClick={handleCategoryFilterClick}>
              <FilterListIcon />
            </IconButton>
            <CategoryFilter
              onFilterChange={handleFilterChange}
              selectedCheckboxes={selectedCheckboxes}
              onCheckboxChange={handleCheckboxChange}
              backgroundColor={colors.primary[400]}
            />
            
            </Box>
          ) : (
            <Box >
            <IconButton sx={{ color: "#333", margin: "8px" }} aria-label="expand" onClick={handleCategoryFilterClick}>
              <FilterListIcon />
            </IconButton>
            </Box>
          )
        
        ) : (
        <Box className='filter scrollbar' style={{ flex: '25%' }}>
          {/* <h4>Categories</h4> */}
          <CategoryFilter
            onFilterChange={handleFilterChange}
            selectedCheckboxes={selectedCheckboxes}
            onCheckboxChange={handleCheckboxChange}
            backgroundColor={colors.primary[400]}
          />
        </Box>
        )}

        <Box className='items scrollbar' style={{ flex: '75%' }}>
          {items.length > 0 ? (
            <CategoryProducts filteredItems={items} style={{backgroundColor:'#fff'}}/>
          ) : (
            <Layout onCategoryClick={handleCategoryClick} />
          )}
        </Box>
      </Box>
      {/* <img src={fitness } alt='fitness'></img> */}
      
    </Box>
    
  )
};
