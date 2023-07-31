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
import { Form, Formik } from 'formik';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BackButton from './BackButton';
import {PinchView} from 'react-pinch-zoom-pan'
export default function ProductDetails() {
 
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const isSmallScreen = window.innerWidth <= 500;
const [showModal, setShowModal] = useState(false);
useEffect(() => {
  dispatch(fetchProduct(productId));
}, [dispatch, productId]);

const product = useSelector((state) => state.products.products.find((p) => p._id === productId));
useEffect(() => {
  // Fetch the product data only if it doesn't exist in the store
  if (!product) {
    dispatch(fetchProduct(productId));
  }
}, [dispatch, productId, product]); // Add `product` as a dependency here

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
 
  const price = product?.offerPrice || product?.actualPrice;
 
  const likedItems = useSelector((state) => state.products.likedItems);
const [currentImage, setCurrentImage] = useState(0);
const imageUrls = product?.image.map((imageName) => `https://raffasports.s3.ca-central-1.amazonaws.com/${imageName}`);

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
      deliveryTime:product.deliveryTime,
      instorePickupTime:product.instorePickupTime,
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
      <BackButton />
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
                alt={` ${index + 1}`}
                className="thumbnail-image"
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        )}
        </div>

        

        {/* Main image */}
        <div className="main-image-container">

        {isSmallScreen?(
            <PinchView  maxScale={4} containerRatio={((400 / 400) * 100)}>
            <img src={imageUrls[currentImage]} className='main-image' alt={product.Name} style={{
              
              width: '100%',
              height: '100%',
              
            }} />
            </PinchView>

          ):(
        
          <ImageZoom
            src={imageUrls[currentImage]}
            alt={product.Name}
            key={currentImage}
            className="main-image"
            zoom="250"
            isTouchEnabled={true}
          />
          )}
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

        {product.colour.length === 1 ? (
      // If there is only one color, show the label and value
      <Box sx={{ marginBottom: '20px' }}>
        <p>Colour: {product.colour[0]}</p>
      </Box>
    ) : (
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
    )}

          
            {/* Select size */}
            {/* {product.sizes && product.sizes.length > 1 ? (
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
  )} */}

      {product.offerPrice ? (
        <Box className="price-product">
          <Typography variant="body1" color="textSecondary" sx={{ fontWeight: 'bold', fontSize:'large',color:'#fbde9b' }}>
            AED {product.offerPrice}
          </Typography>    
          <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.disabled' }}>
              AED {product.actualPrice}
          </Typography>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          AED {product.actualPrice}
        </Typography>
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

      <Box
    flexDirection="row"
    display="flex"
    alignItems="self-end"
    justifyContent="flex-end"
    marginTop="5%"
   
  >
    <Typography variant="body1" sx={{ color:'#f7d6ad' ,fontSize: '1rem', fontWeight: 'normal',fontFamily:'cursive' }}>
    Need Assistance?
      <a href="https://wa.me/+9713569445532" style={{ cursor:'pointer',textDecoration: 'none', color: 'inherit' }}>
        
        
        <WhatsAppIcon sx={{ marginBottom:"10%",color:'#5fc23c',fontSize: 30, marginLeft: '4px' }} />
      </a>
    </Typography>
    
  </Box>

      </div>
      
          <Modal show={showModal} onHide={handleModalHide} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Box display="flex" flexDirection="column" >
            {/* Modal content */}
            <Typography variant="body1">Item added to cart successfully!</Typography>
          <Box display="flex" flexDirection="column"alignItems="center" mb={2}>
            <img src={imageUrls[currentImage]} className='modal-image' alt={product.Name} />
            <Box ml={2} >
              <Typography variant="body1" className="item-name">
                {product.Name}
              </Typography>
              {/* Add any other item details you want to show */}
            </Box>
          </Box>
          <Box>
          <Link to='/user/cart'>
            <Button variant="contained" color="primary">
              Go to Cart
            </Button>
          </Link>
          </Box>
          </Box>
          </Modal.Body>
        </Modal>
        </div>
      
      
    {/* <Recommendation handleThumbnailClick={handleThumbnailClick}/> */}
    </Box>
  );
}