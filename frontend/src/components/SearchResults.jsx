import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
     // eslint-disable-next-line
  }, [location]);

  const filterItemsBySearchQuery = (query) => {
    const matchedItems = products.filter(
      (item) =>
        item.Name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredItems(matchedItems);
  };

  return (
    <ShopByCategory filteredItems={filteredItems} />
  );
}
