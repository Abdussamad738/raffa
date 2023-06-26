import React, { useState, useEffect }  from 'react'
import '../styles/shop.css'; 

import { useSelector, useDispatch } from 'react-redux';
import { useLocation,useParams } from "react-router-dom";
import CategoryFilter from './CategoryFilter';
import Layout from './Layout';
import fitness from '../assets/fitness.png';
import CategoryProducts from './CategoryProducts'
import { fetchProducts } from '../utils/productActions';
export default function ShopByCategory() {
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const location = useLocation();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
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
    setFilteredItems(updatedFilteredItems);
  };

  const [data, setData] = useState(null);
useEffect(()=>{
  const filteredItems = products.filter((item) =>
          
  selectedCheckboxes.some((checkbox) => item.category.includes(checkbox))
        );
        setFilteredItems(filteredItems);
        console.log("filtered item from useeffect:",JSON.stringify(filteredItems))

},[selectedCheckboxes,products])

  // useEffect(()=>{
  //   return(
  //     <CategoryProducts filteredItems={filteredItems} />
  //   )

  // },[filteredItems])
  
 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className='main'>
        <h2>Shop By Category</h2>
        <div className='container sub'>
        
        <div className='filter scrollbar'>
            {/* <h4>Categories</h4> */}
            <CategoryFilter
            onFilterChange={handleFilterChange}
            selectedCheckboxes={selectedCheckboxes}
            onCheckboxChange={handleCheckboxChange}
          />

        
        </div>
        <div className='items scrollbar'>
          {filteredItems.length > 0 ? (
            <CategoryProducts filteredItems={filteredItems} />
          ) : (
            <Layout onCategoryClick={handleCategoryClick}/>
          )}
        </div>
        </div>
        {/* <img src={fitness } alt='fitness'></img> */}
    
    
    
    
    </div>
  )
}
