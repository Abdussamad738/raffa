import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import CategoryProducts from './CategoryProducts';
import ShopByCategory from './ShopByCategory';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const [filteredItems, setFilteredItems] = useState([]);
  const products = useSelector((state) => state.products.products);
  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    
    filterItemsBySearchQuery(query);
    
  }, [location]);

  const filterItemsBySearchQuery = (query) => {
    const matchedItems = products.filter(
      (item) =>
        item.Name.toLowerCase().includes(query.toLowerCase()) ||
        item.Description.toLowerCase().includes(query.toLowerCase())
    );
    console.log("matched items :",matchedItems)
    setFilteredItems(matchedItems);
    console.log("this is from searchResults",filteredItems)
  };

  return (
    <ShopByCategory filteredItems={filteredItems} />
  );
}
