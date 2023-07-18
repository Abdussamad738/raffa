import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryFilter from '../CategoryFilter';
import CategoryProducts from '../CategoryProducts';
import ShopByCategory from '../ShopByCategory';
import { useLocation } from 'react-router-dom';

export default function Wishlist() {
  const [filteredItems, setFilteredItems] = useState([]);
  const likeditems = useSelector((state) => state.products.likedItems);
  const location = useLocation();
  console.log("from wishlist, likeditems:",likeditems)

  return (
    <div className='items scrollbar'>
          {likeditems.length > 0 ? (
            <CategoryProducts filteredItems={likeditems} />
          ) : (
            <h5>Your Wishlist is empty!</h5>
          )}
        </div>
    
  );
}
