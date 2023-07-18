import React, { useState, useEffect }  from 'react'
import '../styles/shop.css'; 
import { Box,useTheme, useMediaQuery } from "@mui/material";
import { ColorModeContext, tokens } from "./../theme";

import { useSelector, useDispatch } from 'react-redux';
import { useLocation,useParams } from "react-router-dom";
import CategoryFilter from './CategoryFilter';
import Layout from './Layout';
import fitness from '../assets/fitness.png';
import CategoryProducts from './CategoryProducts'
import { fetchProducts } from '../utils/productActions';
import { NavigationBreadcrumbs } from './NavigationBreadcrumbs';
export default function ShopByCategory({filteredItems}) {
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
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

  const [data, setData] = useState(null);
useEffect(()=>{
  const filteredItems = products.filter((item) =>
          
  selectedCheckboxes.some((checkbox) => item.category.includes(checkbox))
        );
        setItems(filteredItems);
        console.log("filtered item from useeffect:",JSON.stringify(filteredItems))

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

  
 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='main' backgroundColor={colors.primary[400]}>
        
        
        <h2>Shop By Category</h2>
        
        <div className='container sub'>
        
        <div className='filter scrollbar'>
            {/* <h4>Categories</h4> */}
            <CategoryFilter
            onFilterChange={handleFilterChange}
            selectedCheckboxes={selectedCheckboxes}
            onCheckboxChange={handleCheckboxChange}
            backgroundColor={colors.primary[400]}
          />

        
        </div>
        <div className='items scrollbar'>
          {items.length > 0 ? (
            <CategoryProducts filteredItems={items} />
          ) : (
            <Layout onCategoryClick={handleCategoryClick}/>
          )}
        </div>
        </div>
        {/* <img src={fitness } alt='fitness'></img> */}
    
    
    
    
    </div>
  )
}
