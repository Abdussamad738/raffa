import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decreaseQuantity, increaseQuantity } from '../utils/productActions';
import {FaTrash} from 'react-icons/fa'
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart ?? []);
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
  return (
    <div className="container cart-page">
      <h2>Cart</h2>
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
                      <img src={require(`../assets/${item.productDetails.imageUrl[0]}`)} alt={item.productDetails.name} />
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
        <div className="mb-4">
          <button className="btn btn-primary btn-block">Checkout</button>
        </div>
      </div>
      </div>
    </div>
  );
}
