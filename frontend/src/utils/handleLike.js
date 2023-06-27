import React, { useEffect } from 'react';
import { StarFill, StarHalf, Star, HeartFill, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateLikedItems } from '../utils/productActions';

export default function HandleLike({ product }) {
  const likedItems = useSelector((state) => state.products.likedItems);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (likedItems.includes(product)) {
      const updatedLikedItems = likedItems.filter(
        (likedItem) => likedItem !== product
      );
      dispatch(updateLikedItems(updatedLikedItems));
    } else {
      const updatedLikedItems = [...likedItems, product];
      dispatch(updateLikedItems(updatedLikedItems));
    }
  };

  // Store likedItems in local storage
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  return (
    <div className='like'>
      <button className="btn btn-link float-right" onClick={handleLike}>
        {likedItems.includes(product) ? (
          <HeartFill className="text-danger" />
        ) : (
          <Heart className="text-danger" />
        )}
      </button>
    </div>
  );
}
