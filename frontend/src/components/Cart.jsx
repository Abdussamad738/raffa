import React from 'react'
import { useSelector } from 'react-redux';
import '../styles/cart.css'; 
export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: {item.price}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
