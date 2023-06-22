import React, { useState, useEffect }  from 'react'
import '../styles/shop.css'; 
import { useLocation } from "react-router-dom";
import CategoryFilter from './CategoryFilter';
import Layout from './Layout';
import fitness from '../assets/fitness.png'
export default function ShopByCategory() {
    const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const location = useLocation();
  console.log("from shopbycategory:",JSON.stringify(location))
  const data = location.state?.data;
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  
  //render categories including subcategories
  const renderCategories = (categories) => {
    console.log("from rendercategories:",JSON.stringify(categories))
    return categories.map((category) => {
      const { _id, ...subcategories } = category;
      const hasSubcategories = Object.keys(subcategories).length > 0;
        
      return (
        <div key={_id}>
          <input
            type="checkbox"
            value={_id}
            onChange={handleCategoryChange}
          />
          <label>{_id}</label>
  
          {hasSubcategories && renderCategories(subcategories)}
        </div>
      );
    });
  };
//handle category event change
const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
  
    if (event.target.checked) {
      // Add the selected category to the array
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        categoryId,
      ]);
    } else {
      // Remove the deselected category from the array
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== categoryId)
      );
    }
  };

  //Display the selected categories and subcategories data
  const displaySelectedData = () => {
    return selectedCategories.map((categoryId) => {
      const categoryData = data.find((category) => category._id === categoryId);
  
      // Render the category data on the right side of the window
      return (
        <div key={categoryId}>
          <h3>{categoryId}</h3>
          {/* Render the category data */}
        </div>
      );
    });
  };


  



  useEffect(() => {
    // Fetch filter options from MongoDB and set them in state
    const fetchFilterOptions = async () => {
      try {
        // Make API request to fetch filter options from MongoDB
        const response = await fetch('/api/filter-options');
        const data = await response.json();
        setFilterOptions(data);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
    };

    fetchFilterOptions();
  }, []);

  useEffect(() => {
    // Filter items based on selected filter
    const filterItems = () => {
      // Apply filter logic based on selectedFilter value
      // Make API request to fetch filtered items from MongoDB
      // Set filtered items in state
      const filteredItems = [];
      setFilteredItems(filteredItems);
    };

    filterItems();
  }, [selectedFilter]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className='main'>
        <h2>ShopByCategory</h2>
        <div className='container sub'>
        
        <div className='filter scrollbar'>
            {/* <h4>Categories</h4> */}
            <CategoryFilter onFilterChange={handleFilterChange} />

        
        </div>
        <div className='items scrollbar'>
           
            <Layout/>
        </div>
        </div>
        {/* <img src={fitness } alt='fitness'></img> */}
    
    
    
    
    </div>
  )
}
