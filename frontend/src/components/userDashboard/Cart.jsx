import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/cart.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decreaseQuantity, increaseQuantity } from '../../utils/productActions';
import {FaTrash} from 'react-icons/fa'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { setUser, updateUser, removeUser } from "../../utils/userActions";
import {updateDeliveryAddress} from '../../utils/userActions'
import axios, { AxiosError } from "axios";
import DeliveryAddressForm from '../DeliveryAddressForm';
import { clearCart } from '../../utils/productActions';
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart ?? []);
  const navigate = useNavigate();
  console.log("cart :",JSON.stringify(cartItems))
  const [shippingMethod, setShippingMethod] = useState('instorePickup');
  const dispatch = useDispatch();
  const handleShippingMethodChange = (event) => {
    setShippingMethod(event.target.value);
  };
  const handleDecreaseQuantity = (productId) => {
    const item = cartItems.find((item) => item.productDetails.productId === productId);

    if (item.productDetails.quantity > 1) {
      dispatch(decreaseQuantity(productId));
    }
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
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
      shippingMethod,
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

  // const [orderDeliveryAddress, setOrderDeliveryAddress] = useState({
  //   values: {
  //     name: '',
  //     buildingName:'',
  //     suiteNo:'',
  //     street:'',
  //     state:'',
  //     phoneNo:'',
  //     postalCode:'',
  //     country:'UAE'
  //     // Other delivery address values...
  //   },
  // });

  const handleCheckout = async (orderDeliveryAddress) => {
    
    if (user === null) {
        // User is not logged in, navigate to sign-in page
        navigate('/login');
        return;
      }
    
    console.log("order from handlecheckout",order)
    try {
      const response = await axios.post('http://localhost:9000/users/updateOrderHistory', {
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
              checked={shippingMethod === 'deliverToHome'}
              onChange={handleShippingMethodChange}
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
                      <img src={require(`../../assets/${item.productDetails.imageUrl[0]}`)} alt={item.productDetails.name} />
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
                          <p><span className="label">Price:</span> AED{item.productDetails.price}</p>
    <p><span className="label">Total Price:</span> AED{(item.productDetails.quantity * item.productDetails.price).toFixed(2)}</p>
                          </div>
                        </div>
                        
                       
                      </div>
                      
                    </div>
                    
                    <button className="btn btn-sm"><FaTrash  /></button>
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
        {user.deliveryAddress && !showForm ? (
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
            <h3>Store Pickup Location</h3>
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