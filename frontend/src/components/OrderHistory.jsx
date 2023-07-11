import React from 'react'

import { UseSelector, useSelector } from 'react-redux';
import '../styles/userdashboard.css'
export default function OrderHistory() {
  const orders = useSelector((state) => state.user.user.user.orderHistory);
  console.log("from orderhistory.jsx,",JSON.stringify(orders))
  return (
    <div className="order-history">
      <h1 className="order-title">Order History</h1>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order._id} className="order-item">
            <div className="order-details">
              <h3>Order Number: {order.orderNumber}</h3>
              <p>Customer Name: {order.customerName}</p>
              <p>Status: {order.status}</p>
              {/* Render additional order details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}
