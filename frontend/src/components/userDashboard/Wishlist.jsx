import React from 'react';
import { useSelector } from 'react-redux';
import CategoryProducts from '../CategoryProducts';

export default function Wishlist() {
  const likeditems = useSelector((state) => state.products.likedItems);
  
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
