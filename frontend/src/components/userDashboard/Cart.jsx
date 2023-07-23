import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/cart.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decreaseQuantity, increaseQuantity } from '../../utils/productActions';
import {FaTrash} from 'react-icons/fa'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Box, Typography } from '@mui/material';

import { setUser, updateUser, removeUser } from "../../utils/userActions";
import {updateDeliveryAddress} from '../../utils/userActions'
import axios, { AxiosError } from "axios";
import DeliveryAddressForm from '../DeliveryAddressForm';
import { clearCart } from '../../utils/productActions';
import { deleteFromCart } from '../../utils/cartReducer';
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart ?? []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  console.log("cart :",JSON.stringify(cartItems))
  const [shippingMethod, setShippingMethod] = useState('');
  const handleShippingMethodChange = (event) => {
    const selectedMethod = event.target.value;
    console.log("from handleShipping:",selectedMethod)
  if (selectedMethod === 'deliverToHome' && subtotal < 100) {
    setShowWarning(true);
    console.log("from handleShipping if :",selectedMethod)
  } else if(selectedMethod === 'deliverToHome' && subtotal > 100){
    setShippingMethod(selectedMethod);
    
    setShowWarning(false);
    console.log("from handleShipping if else:",shippingMethod,selectedMethod)
  }
  else{
    setShippingMethod(selectedMethod);
  }
  };
  const handleDeleteItem = (productId) => {
    // Filter out the item with the given productId and update the cartItems state
    // const updatedCartItems = cartItems.filter((item) => item.productDetails.productId !== productId);
    dispatch(deleteFromCart(productId));
  };
  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.productDetails.productId === productId);

    if (item.productDetails.quantity > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };
  useEffect(() => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      shippingMethod: shippingMethod, // Update the 'shippingMethod' property in the 'order' state
    }));
    console.log('Shipping method updated:', shippingMethod);
  }, [shippingMethod]);
  const handleIncreaseQuantity = (productId) => {
    const product = cartItems.find((item) => item.productDetails.productId === productId);
    if (product) {
      // Check if the current quantity is less than productDetails.quantityInStock
      if (product.productDetails.quantity < product.productDetails.quantityInStock) {
        dispatch(increaseQuantity(productId));
      } else {
        // Show a warning or notification that the quantity cannot be increased further
        console.log("Cannot increase quantity further. Quantity in stock reached.");
      }
    }
  };

  // Calculate the total price for each item (price * quantity)
  const calculateTotalPrice = (item) => {

    return item.productDetails.quantity * item.productDetails.price;
  };

  // Calculate the overall total price (sum of all items)
  const calculateOverallTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };

  // Calculate the subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.productDetails.price * item.productDetails.quantity,
    0
  );

  // Calculate the shipping charge
  const shippingCharge = shippingMethod === 'deliverToHome' ? 25 : 0;
  // const imageUrls = cartItems.Image.map((imageName) => require(`../assets/${imageName}`));
  
  //delivery Address submit
  const user = useSelector((state) => state.user.user);
    
  console.log("user from cart ",JSON.stringify(user))

  // Find the maximum Delivery_Time from the cart
const findMaxDeliveryTime = () => {
  let maxDeliveryTime = 0;

  cartItems.forEach((item) => {
    if (item.productDetails.Delivery_Time > maxDeliveryTime) {
      maxDeliveryTime = item.productDetails.Delivery_Time;
    }
  });
  // Calculate the expected delivery time by adding the maxDeliveryTime to the current timestamp
  const currentTime = new Date();
  const expectedDeliveryTime = new Date(currentTime.getTime() + maxDeliveryTime * 60 * 60 * 1000);

  return expectedDeliveryTime;

  
};

const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    // return(
    //   <DeliveryAddressForm/>
    // )
  };
  const delivery_time=findMaxDeliveryTime();
  const userDeliveryAddress = user?user.deliveryAddress:null;
  const [order, setOrder] = useState({
    deliveryDate: delivery_time, // Logic to set the delivery date goes here
      status: 'Pending', // Value passed from cart component
      price: subtotal.toFixed(2),
      shippingMethod:shippingMethod,
      productRating: 0, // Value passed from cart component
      shippingRating: 0, // Value passed from cart component
      products: cartItems.map((item) => ({
        productId: item.productDetails.productId,
        quantity: item.productDetails.quantity,
        image:item.productDetails.imageUrl[0],
        productName:item.productDetails.name||null,
        productDescription:item.productDetails.description||null,
      })),
    // Other order properties
    deliveryAddress: userDeliveryAddress || null,
  });
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  const handleCheckout = async (orderDeliveryAddress) => {
    
    if (user === null) {
        // User is not logged in, navigate to sign-in page
        navigate('/login');
        return;
      }
    
    console.log("order from handlecheckout",order)
    try {
      const response = await axios.post(`${backendUrl}/users/updateOrderHistory`, {
        userId: user._id,
        order,
      });
    
      if (response.status === 200) {
        console.log("order updated successfully")
        dispatch(clearCart());
        // Order history updated successfully
        // You can redirect or show a success message here
      } else {
        console.log("failed to update order")
        // Failed to update order history
        // You can handle the error here
      }
    } catch (error) {
      console.error('Failed to update order history', error);
    }
  }
  const setOrderDeliveryAddress = (address) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      deliveryAddress: address,
    }));
  };

  return (
    <div className="container cart-page">
      {/* <h2>Cart</h2> */}
      <div className="row">
        <div className="col-12 col-lg-8">
          {/* Section 1: Shipping method */}
          <div className="mb-4">
        <h4>Shipping method</h4>
        <div className="d-flex">
          <label className="me-3">
            <input
              type="radio"
              name="shippingMethod"
              value="deliverToHome"
              checked={subtotal >= 100 && shippingMethod === 'deliverToHome'}
              onChange={handleShippingMethodChange}
              // disabled={subtotal.toFixed(2) < 100}
            />
               Deliver to Home
          </label>
          <label>
            <input
              type="radio"
              name="shippingMethod"
              value="instorePickup"
              checked={shippingMethod === 'instorePickup'}
              onChange={handleShippingMethodChange}
            />
            In-store Pickup
          </label>
        </div>
        {showWarning && (
          <h6 style={{ color: 'rgb(64, 13, 13)' }}>Delivery is only available for orders above 100 AED.</h6>
          )}
    </div>
      <div className='total-price'>
            <h3>Overall Total Price: {(subtotal + shippingCharge).toFixed(2)} AED</h3>
            {/* Place your shipping method content here */}
          </div>

          {/* Section 3: Items details */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="mb-4">
              <h4>Items details</h4>
              <div className="row">
                {cartItems.map((item) => (
                  <div key={item.id} className="col-12  mb-3">
                    <div className="cart-item">
                      <div className="item-image">
                        {console.log(JSON.stringify(item.productDetails.imageUrl[0]))}
                      <img src={`https://raffasports.s3.ca-central-1.amazonaws.com/${item.productDetails.imageUrl[0]}`} />
                      </div>
                      <div className="item-info">
                        <div className="item-header">
                          <h5>{item.productDetails.name}</h5>
                          <p>{item.productDetails.description}</p>
                          <p>Color: {item.productDetails.color}</p>
                          <p>Size: {item.productDetails.size}</p>
                        </div>
                        <div className="item-quantity">
                          <button className="btn btn-sm btn-primary" onClick={() => handleDecreaseQuantity(item.productDetails.productId)}>-</button>
                          <span>{item.productDetails.quantity}</span>
                          <button className="btn btn-sm btn-primary"onClick={() => handleIncreaseQuantity(item.productDetails.productId)}>+</button>
                          <div className='price'>
                          <p><span className="label">Price:</span> {item.productDetails.price}</p>
    <p><span className="label">Total Price:</span> {(item.productDetails.quantity * item.productDetails.price).toFixed(2)}</p>
                          </div>
                        </div>
                        
                       
                      </div>
                      
                    </div>
                    
                    <button className="btn btn-sm" onClick={() => handleDeleteItem(item.productDetails.productId)}>
                      <FaTrash  /></button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Order summary */}
      <div className="col-12 col-lg-4">
        <div className="mb-4">
          <h4>Order summary</h4>
          <div className="order-summary">
            <p>
              <strong>Subtotal:</strong> {subtotal.toFixed(2)} AED
            </p>
            
            <p>
              <strong>Shipping Charge:</strong> {shippingCharge.toFixed(2)} AED
            </p>
            <p>
              <strong>Total:</strong> {(subtotal + shippingCharge).toFixed(2)} AED
            </p>
          </div>
        </div>
        <div>
        {shippingMethod === 'deliverToHome' ? (
        <div className='delivery'>
        <h3>Delivery Address</h3>
        {user?.deliveryAddress && !showForm ? (
          <div>
                {/* Render the existing address */}
                <h4>Existing Address:</h4>
              {Object.entries(user.deliveryAddress).map(([key, value]) => (
                <p key={key}>
                  <strong>{capitalizeFirstLetter(key)}:</strong> {value}
                </p>
              ))}
              <Button variant="primary" onClick={handleClick}>
                Edit Delivery Address
              </Button>
          </div>
          ) : (
            <div>
              {/* {showForm ? ( */}
                <div>
                  <DeliveryAddressForm setOrderDeliveryAddressInCart={setOrderDeliveryAddress}
                   // Pass the orderHistory.deliveryAddress as a prop
                />
                </div>
 
      </div>
    )}
  </div>
      
        ) : (
          <div className='store-pickup'>
            <Box sx={{ marginBottom: '20px' }}>
      <Typography variant="h5" sx={{ color: 'primary.main' }}>
        Store Pickup Location
      </Typography>
      <Box sx={{ color: 'text.primary', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          <Box>Bur Dubai, Al Raffa Road,</Box>
          <Box> Gateway Hotel Building, Shop No:121</Box> 
          <Box>Dubai - United Arab Emirates</Box>
           
      </Box>
    </Box>
            
            {/* Add the content for store pickup location */}
          </div>
        )}
        </div>
        <div className="mb-4">
        <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </div>
      </div>
    </div>
  );
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}