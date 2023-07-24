import React from 'react';
import { useSelector } from 'react-redux';
import CategoryProducts from '../CategoryProducts';
import { useLocation } from 'react-router-dom';

export default function Wishlist() {
  const likeditems = useSelector((state) => state.products.likedItems);
  
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
