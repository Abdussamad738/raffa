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
  // Check if filteredItems is undefined, and if so, set it to an empty array
  console.log("from shop filteredItems:",JSON.stringify(filteredItems))
  const [items, setItems] = useState(filteredItems ? filteredItems : []);
  console.log("from shop items:",JSON.stringify(items))

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
    console.log(JSON.stringify(selectedCheckboxes))
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
    console.log("handlCategory click in shop by category :",JSON.stringify(category))
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
        console.log("filtered item from useeffect:",JSON.stringify(filteredItems))
 // eslint-disable-next-line
},[selectedCheckboxes])

  // useEffect(()=>{
  //   return(
  //     <CategoryProducts filteredItems={filteredItems} />
  //   )

  // },[filteredItems])

  // const handleSearch = () => {
  //   console.log(JSON.stringify(products))
  //   const filtered = products.filter(
  //     (product) =>
  //       product.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       product.Description.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
    
  //   console.log("filtered :",JSON.stringify(filtered))
  //   setFilteredItems(filtered);
  //   console.log(JSON.stringify(filteredItems))
  // };

  // useEffect(() => {
  //   // Filter products based on the search query when searchQuery prop changes
  //   handleSearch();
  // }, [searchQuery]);

  const [showCategoryFilter, setShowCategoryFilter] = useState(false); // State for expanding/collapsing filter

  const handleCategoryFilterClick = () => {
    setShowCategoryFilter(!showCategoryFilter);
  };
 
  const isSmallScreen = window.innerWidth <= 500;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Box className='main' sx={{ backgroundColor: colors.primary[400] }}>
      <Typography variant="h3">Shop By Category</Typography>

      <Box className='container sub' display='flex'>
      {isSmallScreen ? (
          // Show the expand icon for smaller screens
          
          showCategoryFilter ? (
            <Box>
              <IconButton color="inherit" aria-label="expand" onClick={handleCategoryFilterClick}>
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
            <IconButton color="inherit" aria-label="expand" onClick={handleCategoryFilterClick}>
              <FilterListIcon />
            </IconButton>
          )
        
        ) : (
        <Box className='filter scrollbar'>
          {/* <h4>Categories</h4> */}
          <CategoryFilter
            onFilterChange={handleFilterChange}
            selectedCheckboxes={selectedCheckboxes}
            onCheckboxChange={handleCheckboxChange}
            backgroundColor={colors.primary[400]}
          />
        </Box>
        )}

        <Box className='items scrollbar'>
          {items.length > 0 ? (
            <CategoryProducts filteredItems={items} />
          ) : (
            <Layout onCategoryClick={handleCategoryClick} />
          )}
        </Box>
      </Box>
      {/* <img src={fitness } alt='fitness'></img> */}
      
    </Box>
    
  )
};
