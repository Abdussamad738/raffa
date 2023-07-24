import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart ,fetchProduct } from '../utils/productActions';
import '../styles/productdetails.css'; 
import { renderStars } from '../utils/renderStars';
import { TextField, MenuItem, Box, Typography, Button} from '@mui/material';
import HandleLike from '../utils/handleLike';
import ImageZoom from "react-image-zooom";
import { Link} from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Field, Form, Formik } from 'formik';
export default function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

const [showModal, setShowModal] = useState(false);

const formik = useFormik({
  initialValues: {
    size: '',
    colour:'',
    // Other initial values...
  },
  // Other formik configurations...
});
const handleModalHide = () => {
  setShowModal(false);
};
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);
  const product = useSelector((state) => state.products.products.find((p) => p._id === productId));
  const [price, setPrice] = useState(product.offerPrice || product.actualPrice);
  console.log("from product details:",JSON.stringify(product))
  const likedItems = useSelector((state) => state.products.likedItems);
const [currentImage, setCurrentImage] = useState(0);
const imageUrls = product.image.map((imageName) => `https://raffasports.s3.ca-central-1.amazonaws.com/${imageName}`);

// console.log("imageUrls :",JSON.stringify(imageUrls))


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
    if(quantity<product.quantityInStock)
    {
      setQuantity(quantity + 1);
    }
  };
  


  const handleAddToCart = () => {
    // Logic to add product to cart with quantity
    
    const productDetails = {
      productId: productId,
      name: product.Name,
      description: product.description,
      color: formik.values.colour,
      size: formik.values.size,
      sizes:product.sizes||null,
      imageUrl: product.image,
      quantity: quantity, // You can set the initial quantity here, and later increase/decrease it if needed.
      price: price,
      quantityInStock:product.quantityInStock,
    };
    dispatch(addToCart(productDetails));
    setShowModal(true);
    console.log(`Added product ${productId} to cart with quantity ${quantity}`);
    
  };

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
    console.log("from handleThumbnailClick:", JSON.stringify(currentImage))
  };




//   const { Images, Name, Ratings, actualPrice, offerPrice, colour, Description, Dimensions, Features } = product;

  return (
    <Box>
    <div className="product-details">
      <div className="image-container">
      <div className='thumbnail'>
        {/* Show other images */}
        {product.image && (
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
        <HandleLike product={product} className="handle-like"/>
        </div>
        <div className="ratings">
          {/* Render stars based on ratings */}
          <div className="stars">
          {renderStars(product.ratings[0])}
          </div>
          <span className="rating-text">
            ({product.ratings[1]} ratings)
          </span>
        </div>
        <Formik
        initialValues={{
          // Other initial values...
          colour: '',
          size: '',
        }}
        onSubmit={handleAddToCart} // The function to handle form submission
      >
        {({ values, handleChange }) => (
          <Form>
        {/* Select size */}
        {/* Select colour */}
        <Box sx={{ marginBottom: '20px' }}>
              <TextField
                select
                label="Select Colour"
                name="colour"
                value={formik.values.colour}
                onChange={formik.handleChange}
                variant="filled"
                sx={{ width: '50%' }}
              >
                {product.colour.map((colourOption) => (
                  <MenuItem key={colourOption} value={colourOption}>
                    {colourOption}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            
            {/* Select size */}
            {product.sizes && product.sizes.length > 0 ? (
    <>
      <Field
        as={TextField}
        select
        label="Select Size"
        name="size"
        value={formik.values.size}
        onChange={(e) => {
          const selectedSize = e.target.value;
          formik.setFieldValue("size", selectedSize);
          const selectedSizeObject = product.sizes.find((size) => size.key === selectedSize);
          if (selectedSizeObject) {
            setPrice(selectedSizeObject.value);
          } else {
            setPrice(0);
          }
        }}
        variant="filled"
        sx={{ width: '50%' }}
      >
        <MenuItem value="">Select Size</MenuItem>
        {product.sizes.map((size) => (
          <MenuItem key={size._id} value={size.key}>
            {size.key}
          </MenuItem>
        ))}
      </Field>
      {formik.values.size && price > 0 && (
        <div>
          <p>Selected Size: {formik.values.size}</p>
          <p>Price: AED {price}</p>
        </div>
      )}
    </>
  ) : (
    <p>Price: AED {price}</p>
  )}
              
          <div className="detail-item">
            <label>Description:</label>
            <p>{product.description}</p>
          </div>

          <div className="detail-item">
            <label>Features:</label>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
       
       {/* Quantity */}
       <Box className="quantity">
          <Button className="btn btn-primary quantity-btn" onClick={handleDecreaseQuantity}>
            -
          </Button>
          <span className="quantity-value">{quantity}</span>
          <Button className="btn btn-primary quantity-btn" onClick={handleIncreaseQuantity}>
            +
          </Button>
        </Box>

        {/* Buy Now and Add to Cart buttons */}
        <Box className="action-buttons">
              <Button type="submit" variant="contained" color="primary">
                Add to Cart
              </Button>
              </Box>
          </Form>
        )}
      </Formik>
      </div>
      
          <Modal show={showModal} onHide={handleModalHide} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Box>
            {/* Modal content */}
            <Typography variant="body1">Item added to cart successfully!</Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <img src={imageUrls[currentImage]} alt={product.Name} />
            <Box ml={2}>
              <Typography variant="body1" className="item-name">
                {product.Name}
              </Typography>
              {/* Add any other item details you want to show */}
            </Box>
          </Box>
          <Link to='/user/cart'>
            <Button variant="contained" color="primary">
              Go to Cart
            </Button>
          </Link>
          </Box>
          </Modal.Body>
        </Modal>
        </div>
      
      
    {/* <Recommendation handleThumbnailClick={handleThumbnailClick}/> */}
    </Box>
  );
}