import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { renderStars } from '../utils/renderStars';
import HandleLike from '../utils/handleLike';
export default function CategoryProducts({ filteredItems }) {
  const [likedItems, setLikedItems] = useState([]);


  // Retrieve likedItems from local storage
  useEffect(() => {
    const storedLikedItems = localStorage.getItem('likedItems');
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);




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

              <Link
                to={`/product/${item._id}`}
                className="btn btn-primary btn-block mt-3"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
  );
}
