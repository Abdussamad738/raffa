import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../utils/productActions';
import '../styles/productdetails.css'; 
import { renderStars } from '../utils/renderStars';
import { useLocation } from 'react-router-dom';
import HandleLike from '../utils/handleLike';
import ImageZoom from "react-image-zooom";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CartPage from './Cart';
export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
//   const location = useLocation();
//   const { likedItems } = location.state;

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);
  const [showZoom, setShowZoom] = useState(false);
  const product = useSelector((state) => state.products.products.find((p) => p._id === productId));
  console.log("from product details:",JSON.stringify(product))
  const likedItems = useSelector((state) => state.products.likedItems);
const [currentImage, setCurrentImage] = useState(0);
const imageUrls = product.Image.map((imageName) => require(`../assets/${imageName}`));

// console.log("imageUrls :",JSON.stringify(imageUrls))

  const handlePrevImage = () => {
    console.log("from handlprevImage :",currentImage)
    setCurrentImage((prevImage) => (prevImage === 0 ? imageUrls.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    console.log("from handlNextImage ",currentImage)
    setCurrentImage((prevImage) => (prevImage === imageUrls.length - 1 ? 0 : prevImage + 1));
  };
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

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
    console.log("from handleThumbnailClick:", JSON.stringify(currentImage))
  };
  


//   const { Images, Name, Ratings, Actual_Price, Offer_Price, Colour, Description, Dimensions, Features } = product;

  return (
    <div className="product-details">
      <div className="image-container">
      <div className='thumbnail'>
        {/* Show other images */}
        {product.Image && (
          <div className="other-images">
            {imageUrls.map((image, index) => (
              <img
                key={index}
                src={imageUrls[index]}
                alt={`Image ${index + 1}`}
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        )}
        </div>

        

        {/* Main image */}
        <div className="main-image-container">
        
          <ImageZoom
            src={imageUrls[currentImage]}
            alt={product.Name}
            key={currentImage}
            className="main-image"
            zoom="300"
          />
          {/* <div className='next-arrows'>
          <BsArrowLeft className="arrow-icon left-arrow" onClick={handlePrevImage} />
        <BsArrowRight className="arrow-icon right-arrow" onClick={handleNextImage} />
        </div> */}
    
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
          <button className="buy-now-btn" onClick={handleBuyNow}>
            Buy Now
          </button>
          <button className=" add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}