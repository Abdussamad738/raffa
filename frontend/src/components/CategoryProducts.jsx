import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryProducts({ filteredItems }) {
    console.log("From categoryProducts filtered items are:",filteredItems)
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      {filteredItems.map((item) => (
        <div className="col mb-4" key={item._id}>
          <div className="card">
            <img src={item.Image} className="card-img-top" alt={item.Name} />
            <div className="card-body">
              <h5 className="card-title">{item.Name}</h5>
              {item.Offer_price ? (
                <div>
                  <span className="text-muted">${item.actual_price}</span>{' '}
                  <del>${item.offer_price}</del>
                </div>
              ) : (
                <div>${item.actual_price}</div>
              )}
              <div>
                {[...Array(Math.round(item.Ratings[0]))].map((_, index) => (
                  <i
                    key={index}
                    className="bi bi-star-fill text-warning"
                  ></i>
                ))}
                <span className="text-muted">
                  ({item.ratings[1]} ratings)
                </span>
              </div>
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
  );
}