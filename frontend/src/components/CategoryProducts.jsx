import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux';
import { StarFill, StarHalf, Star, HeartFill, Heart } from 'react-bootstrap-icons';
import { renderStars } from '../utils/renderStars';
import { updateLikedItems } from '../utils/productActions';
import HandleLike from '../utils/handleLike';
import Recommendation from './Recommendation';
export default function CategoryProducts({ filteredItems }) {
  const [likedItems, setLikedItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  
//   const handleLikeItem = (item) => {
//     // Get the current likedItems state from the Redux store
    

//     if (likedItems.includes(item)) {
//       const updatedLikedItems = likedItems.filter(
//         (likedItem) => likedItem !== item
//       );
//       dispatch(updateLikedItems(updatedLikedItems)); // Dispatch the updateLikedItems action
//     } else {
//       const updatedLikedItems = [...likedItems, item];
//       dispatch(updateLikedItems(updatedLikedItems)); // Dispatch the updateLikedItems action
//     }
//   };

  const handleQuantityChange = (item, increment) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 0 && newQuantity <= item.Quantity_in_Stock) {
      setQuantity(newQuantity);
    }
  };

  // Retrieve likedItems from local storage
  useEffect(() => {
    const storedLikedItems = localStorage.getItem('likedItems');
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  const handleLikeItem = (item) => {
    if (likedItems.includes(item)) {
      setLikedItems(likedItems.filter((likedItem) => likedItem !== item));
    } else {
      setLikedItems([...likedItems, item]);
    }
  };


  return (
    <div>
    
    <div className="products row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {filteredItems.map((item) => (
        <div className="col mb-4 product-items" key={item._id}>
            
          <div className="card">
          <Link to={{ pathname: `/product/${item._id}`, state: { likedItems } }}>
          {/* <Link to={`/product/${item._id}`, state: { likedItems }}> */}
            <img
              src={`https://raffasports.s3.ca-central-1.amazonaws.com/${item.image[0]}`}
              className="card-img-top"
              alt={item.Name}
            />
            </Link>

            <div className="card-body">
              <h6 className="card-title">
                {item.Name}
                {/* <button
                  className="btn btn-link float-right"
                  onClick={() => handleLikeItem(item)}
                >
                  {likedItems.includes(item) ? (
                    <HeartFill className="text-danger" />
                  ) : (
                    <Heart className="text-danger" />
                  )}
                </button> */}

              <HandleLike product={item} className="handle-like"/>


              </h6>
              {item.offerPrice ? (
                <div>
                  <span className="text-muted">AED {item.offerPrice}</span>{' '}
                  <del>AED {item.actualPrice}</del>
                </div>
              ) : (
                <div>AED {item.actualPrice}</div>
              )}
              <div className="rating">
                {renderStars(item.ratings[0])}
                <span className="text-muted">
                  ({item.ratings[1]} ratings)
                </span>
              </div>
              {/* <div className="quantity-buttons">
                <button
                  className="btn btn-link btn-sm"
                  onClick={() => handleQuantityChange(item, -1)}
                  disabled={item.Quantity_in_Stock === 0}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="btn btn-link btn-sm"
                  onClick={() => handleQuantityChange(item, 1)}
                  disabled={item.Quantity_in_Stock === 0}
                >
                  +
                </button>
              </div> */}
              <Link
                to={`/product/${item._id}`}
                className="btn btn-primary btn-block mt-3"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* <div>
      <Recommendation/>

    </div> */}
    </div>
  );
}
