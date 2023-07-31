import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/cart.css';
import { useNavigate } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity } from '../../utils/productActions';
import {FaTrash} from 'react-icons/fa'
import {  Button} from 'react-bootstrap';

import { Box , Modal, Typography } from '@mui/material';

// import { setUser, updateUser, removeUser } from "../../utils/userActions";
// import {updateDeliveryAddress} from '../../utils/userActions'
import axios from "axios";
import DeliveryAddressForm from '../DeliveryAddressForm';
import { clearCart } from '../../utils/productActions';
import { deleteFromCart } from '../../utils/cartReducer';

// Function to adjust the time to the next day 11:00 AM if it falls between 10:30 PM and 10:30 AM
function adjustTimeForNextDay(date) {
  const hour = date.getHours();
  if (hour >= 22 || hour < 10) {
    // If the hour is between 10:30 PM and 10:30 AM, set the time to 11:00 AM of the next day
    date.setDate(date.getDate() + 1); // Move to the next day
    date.setHours(11, 0, 0, 0); // Set the time to 11:00 AM
  }
  return date;
}
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
  // const calculateTotalPrice = (item) => {

  //   return item.productDetails.quantity * item.productDetails.price;
  // };

  // Calculate the overall total price (sum of all items)
  // const calculateOverallTotalPrice = () => {
  //   return cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0);
  // };

  // Calculate the subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.productDetails.price * item.productDetails.quantity,
    0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Calculate the shipping charge
  const shippingCharge = shippingMethod === 'deliverToHome' ? 15 : 0;
  // const imageUrls = cartItems.Image.map((imageName) => require(`../assets/${imageName}`));
  
  //delivery Address submit
  const user = useSelector((state) => state.user.user);
    
  const findMaxInstorePickupTime = () => {
    let maxPickupTime = 0;
  
    cartItems.forEach((item) => {
      if (item.productDetails.instorePickupTime > maxPickupTime) {
        console.log("each item pickup time",item.productDetails.instorePickupTime)
        maxPickupTime = item.productDetails.instorePickupTime;
      }
    });
    // Calculate the expected delivery time by adding the maxDeliveryTime to the current timestamp
    const currentTime = new Date();
    const expectedInstorePickupTime = new Date(currentTime.getTime() + maxPickupTime * 60 * 60 * 1000);
    // Adjust the time to the next day 11:00 AM if needed
    const adjustedDate = adjustTimeForNextDay(expectedInstorePickupTime);
    // Format the date to a string
    
    console.log('maxPickupTime',maxPickupTime,'currentTime',currentTime,'expectedDeliveryTime',adjustedDate)
    return adjustedDate;
  };
  
    

  // Find the maximum Delivery_Time from the cart
const findMaxDeliveryTime = () => {
  let maxDeliveryTime = 0;

  cartItems.forEach((item) => {
    if (item.productDetails.deliveryTime > maxDeliveryTime) {
      maxDeliveryTime = item.productDetails.deliveryTime;
    }
  });
  // Calculate the expected delivery time by adding the maxDeliveryTime to the current timestamp
  const currentTime = new Date();
  const expectedDeliveryTime = new Date(currentTime.getTime() + maxDeliveryTime * 60 * 60 * 1000);
  const adjustedDate = adjustTimeForNextDay(expectedDeliveryTime);
    // Format the date to a string
    
  console.log('maxDeliveryTime',maxDeliveryTime,'currentTime',currentTime,'expectedDeliveryTime',adjustedDate)
  return adjustedDate;

  
};

const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    // return(
    //   <DeliveryAddressForm/>
    // )
  };
  const delivery_time=findMaxDeliveryTime();
  const pickupTime=findMaxInstorePickupTime();

  console.log("pickup time,",pickupTime)
  const userDeliveryAddress = user?user.deliveryAddress:null;
  const [order, setOrder] = useState({
    deliveryDate: delivery_time, // Logic to set the delivery date goes here
      status: 'Pending', // Value passed from cart component
      price: subtotal.toFixed(2),
      shippingMethod:shippingMethod,
      finalPickupTime:pickupTime,
      finalDeliveryTime:delivery_time,
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
        setIsModalOpen(true);
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
                       
                      <img src={`https://raffasports.s3.ca-central-1.amazonaws.com/${item.productDetails.imageUrl[0]}`} alt={item.productDetails.name}/>
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
      <Typography variant="h4" sx={{ color: '#ffa93a' ,marginBottom:'5%'}}>
        Store Pickup Location
      </Typography>
      <Box sx={{ color: 'text.primary', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          <Box>Raffa Sport</Box>
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
      <Modal open={isModalOpen} onClose={handleCloseModal}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }}
  >
    {shippingMethod === 'instorePickup' ? (
      <>
        <Typography variant="h6" component="h2">
          Order Successful!
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Your order is ready for pickup at {order.finalPickupTime.toString()}.
        </Typography>
        <Button onClick={() => navigate('/shop')} color="#b5801c00"  variant="contained">
          Shop Again
        </Button>
        {/* Redirect to order history page */}
        <Button onClick={() => navigate('/user/orders')} color="#b5801c00" variant="contained">
          Order History
        </Button>
      </>
    ) : (
      <>
        <Typography variant="h6" component="h2">
          Order Successful!
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Your order will be delivered by {order.finalDeliveryTime.toString()}.
        </Typography>
        <Button onClick={() => navigate('/shop')} color="#b5801c00" variant="contained">
          Shop Again
        </Button>
        {/* Redirect to order history page */}
        <Button onClick={() => navigate('/user/orders')} color="b5801c00" variant="contained">
          Order History
        </Button>
      </>
    )}
  </Box>
</Modal>
    </div>
  );
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}