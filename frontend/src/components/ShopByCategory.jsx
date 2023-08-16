import React, { useState, useEffect }  from 'react'
import '../styles/shop.css'; 
import { Box,Typography } from "@mui/material";
// import { tokens } from "./../theme";
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
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
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
    console.log('filtereditems from shop',JSON.stringify(items))
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
    <Box className='main' sx={{ backgroundColor: '#dddcdbcc'}}>
  {/* <Typography variant="h3">Shop By Category</Typography> */}

  <Box className='container sub' display='flex' sx={{ backgroundColor: '#dddcdbcc' }}>

    <Box className='items scrollbar' style={{ display: 'flex', flexDirection: 'row' }}>
      {items.length > 0 ? (
        isSmallScreen ? (
          // Show the expand icon for smaller screens
          showCategoryFilter ? (
            <Box sx={{ display: 'flex', flexDirection: 'row' ,backgroundColor: 'rgba(92, 96, 109, 0.6)', overflowY: 'auto', width: '100%' }}>
              <Box style={{ flex: '25%' }}>
              <IconButton sx={{ color: "#333" }} aria-label="expand" onClick={handleCategoryFilterClick}>
                <FilterListIcon />
              </IconButton>
              
              <CategoryFilter
                onFilterChange={handleFilterChange}
                selectedCheckboxes={selectedCheckboxes}
                onCheckboxChange={handleCheckboxChange}
                backgroundColor='rgba(92, 96, 109, 0.6)'
              />
              </Box>
            
            <Box style={{ flex: '75%' }}>
              <CategoryProducts filteredItems={items} style={{ backgroundColor: '#fff' }} />
            </Box>
          </Box>
          ) : (
            <Box style={{ display: 'flex', flexDirection: 'row',alignItems:'start'}}>
              <Box style={{display:'flex', flex: '20%' ,flexDirection:'row',marginRight:'10px'}}>
              <Typography sx={{color:'#333',fontSize:'medium',marginTop:'14px'}}>Filters</Typography>
              <IconButton sx={{ color: "#333", marginTop: "8px" }} aria-label="expand" onClick={handleCategoryFilterClick}>
                <FilterListIcon />
              </IconButton>
              
              </Box>
              <Box style={{ flex: '90%' ,marginRight:'15px'}}>
              <CategoryProducts filteredItems={items} style={{ backgroundColor: '#fff' }} />
            </Box>
            </Box>
          )
        ) : (
          // Render Category Products and Category Filter
          <React.Fragment>
            <Box className='filter scrollbar' style={{ flex: '25%' }}>
              <CategoryFilter
                onFilterChange={handleFilterChange}
                selectedCheckboxes={selectedCheckboxes}
                onCheckboxChange={handleCheckboxChange}
                backgroundColor='rgba(92, 96, 109, 0.6)'
              />
            </Box>
            <Box style={{ flex: '75%' }}>
              <CategoryProducts filteredItems={items} style={{ backgroundColor: '#fff' }} />
            </Box>
          </React.Fragment>
        )
      ) : (
        // Render Layout
        <Layout onCategoryClick={handleCategoryClick} />
      )}
    </Box>
  </Box>
  {/* <img src={fitness } alt='fitness'></img> */}
</Box>
    
  )
};
