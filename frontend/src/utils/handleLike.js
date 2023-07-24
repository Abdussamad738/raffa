import React from 'react';
import { HeartFill, Heart } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateLikedItems } from '../utils/productActions';

export default function HandleLike({ product }) {
  const likedItems = useSelector((state) => state.products.likedItems);
  const dispatch = useDispatch();

  const handleLike = () => {
    console.log("liked items from handlelike:", product);
  
    const isLiked = likedItems.some((likedItem) => likedItem._id === product._id);
  
    if (isLiked) {
      const updatedLikedItems = likedItems.filter(
        
        (likedItem) => likedItem._id !== product._id
       
      );
      console.log("from isLiked,",JSON.stringify(updatedLikedItems))
      dispatch(updateLikedItems(updatedLikedItems));
    } else {
      const updatedLikedItems = [...likedItems, product];
      dispatch(updateLikedItems(updatedLikedItems));
    }
  };

  // Store likedItems in local storage
  // useEffect(() => {
  //   console.log("likeditems useEffect",JSON.stringify(likedItems.includes(product)));
  // }, [likedItems,product]);

  return (
    <div className='like'>
      <button className="btn btn-link float-right" onClick={handleLike}>
      {likedItems.some((likedItem) => likedItem._id === product._id) ? (
          
          <HeartFill className="text-danger" />
        ) : (
          <Heart className="text-danger" />
        )}
      </button>
    </div>
  );
}
