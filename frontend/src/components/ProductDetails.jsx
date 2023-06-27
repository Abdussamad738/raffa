import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../utils/productActions';
import '../styles/productdetails.css'; 
import { renderStars } from '../utils/renderStars';
import { useLocation } from 'react-router-dom';
import HandleLike from '../utils/handleLike';

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
//   const location = useLocation();
//   const { likedItems } = location.state;
const likedItems = useSelector((state) => state.products.likedItems);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const product = useSelector((state) => state.products.products.find((p) => p._id === productId));
  console.log("from product details:",JSON.stringify(product))
// Store likedItems in local storage
useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBuyNow = () => {
    // Logic to navigate to checkout page
    console.log(`Buy Now clicked for product ${productId}`);
  };

  const handleAddToCart = () => {
    // Logic to add product to cart with quantity
    console.log(`Added product ${productId} to cart with quantity ${quantity}`);
  };

//   const { Images, Name, Ratings, Actual_Price, Offer_Price, Colour, Description, Dimensions, Features } = product;

  return (
    <div className="product-details">
      <div className="image-container">
        {/* Show other images */}
        {product.Image && (
          <div className="other-images">
            {product.Image.map((image, index) => (
              <img
                key={index}
                src={require(`../assets/${image}`)}
                alt={`Image ${index + 1}`}
                className="thumbnail-image"
              />
            ))}
          </div>
        )}

        {/* Main image */}
        <div className="main-image-container">
          <img
            src={require(`../assets/${product.Image[0]}`)}
            alt={product.Name}
            className="main-image"
          />

          {/* Image zoom */}
          <div className="image-zoom">
            <BsArrowLeft className="arrow-icon left-arrow" />
            <BsArrowRight className="arrow-icon right-arrow" />
          </div>
        </div>
      </div>

      <div className="product-info">
        <div className='card-title'>
        <h3>{product.Name}</h3>
        <HandleLike product={product._id} className="handle-like"/>
        </div>
        <div className="ratings">
          {/* Render stars based on ratings */}
          <div className="stars">
          {renderStars(product.Ratings[0])}
          </div>
          <span className="rating-text">
            ({product.Ratings[1]} ratings)
          </span>
        </div>
        <div className="price">
          {product.Offer_Price ? (
            <div>
              <span className="text-muted">${product.Actual_Price}</span>{' '}
              <del>${product.Offer_Price}</del>
            </div>
          ) : (
            <div>${product.Actual_Price}</div>
          )}
        </div>
        <div className="details">
          <div className="detail-item">
            <label>Color:</label>
            <span>{product.Colour}</span>
          </div>
          <div className="detail-item">
            <label>Description:</label>
            <p>{product.Description}</p>
          </div>
          <div className="detail-item">
            <label>Specifications:</label>
            <ul>
              {Object.entries(product.Dimensions).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="detail-item">
            <label>Features:</label>
            <ul>
              {product.Features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
       {/* Quantity */}
       <div className="quantity">
          <button className="btn btn-primary quantity-btn" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button className="btn btn-primary quantity-btn" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>

        {/* Buy Now and Add to Cart buttons */}
        <div className="action-buttons">
          <button className="btn btn-primary buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}