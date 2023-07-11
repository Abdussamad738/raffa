
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSignIn, useIsAuthenticated } from 'react-auth-kit';
import { setUser, updateUser, removeUser } from "../utils/userActions";
import { clearCart } from '../utils/productActions';
// import { updateUserPhoneNumber } from '../utils/userActions';
import '../styles/userdashboard.css'; 
import { insertCartItems } from '../utils/userActions';
import {updateDeliveryAddress} from '../utils/userActions'
export default function UserDashboard () {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux state
  const navigate = useNavigate();
  const signIn = useSignIn();
  const orders = useSelector((state) => state.user.user.user.orderHistory);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("from user-dashboard,",JSON.stringify(cartItems))
  // useEffect(() => {
    
  //   if (!user) {
  //     // Redirect to login page if user is not signed in
  //     navigate('/login');
  //     return null;
  //   }
  // }, []);
  
  // Formik form values and handlers for the delivery address section
  const deliveryAddressFormik = useFormik({
    initialValues: {
      name: '',
      street: '',
      city:'',
      state: '',
      phoneNumber: '',
      postalCode: '',
    },
    onSubmit: (values) => {
      
    dispatch(updateUser(values));
    updateDeliveryAddress(user.user._id, values);
      // Handle form submission for delivery address insertion
      console.log('Delivery address form submitted', values);
      // Call API or dispatch Redux action to insert delivery address
    },
  });

  // Mocked order history data
  const orderHistory = [
    { id: 1, productName: 'Product 1', quantity: 2, totalPrice: 100 },
    { id: 2, productName: 'Product 2', quantity: 1, totalPrice: 50 },
    // Add more order history data here...
  ];
  // if (!user) {
  //   return null;
  // }
  
  console.log("user is:",JSON.stringify(user))
  const handleSetUser = (user) => {
    dispatch(setUser(user));
    
  };

  const handleLogout = () => {
    let cart=[]
    const carts= cartItems.map((item)=>(
      cart.push(item)
    ));
    
    console.log("from handlelogout:",JSON.stringify(user.user._id,cart))
    // Dispatch the removeUser action to clear user data from the store
    dispatch(insertCartItems(user.user._id, cart));
    
    dispatch(removeUser());
    dispatch(clearCart());
    // Get the cart items from the Redux store
    
  
    // Update the user's cart in the database
   
  
    // Clear the cart in the Redux store
    
  
    // Redirect to the login page
    navigate('/login');
  };
  // if (!isAuthenticated()) {
  //   // Redirect to login page
  //   navigate('/login');
  //   return null;
  // }

  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };

  // const handleAddPhoneNumber = () => {
  //   dispatch(updateUserPhoneNumber(user.id, phoneNumber));
  //   setIsEditingPhoneNumber(false);
  // };
  
  // Update user
  const handleUpdateUser = (updatedUser) => {
    dispatch(updateUser(updatedUser));
  };

  // Remove user
  const handleRemoveUser = () => {
    dispatch(removeUser());
  };

  // Formik form values and handlers for the personal details section
  // const personalDetailsFormik = useFormik({
  //   initialValues: {
  //     name: user.user.name || '',
  //     email: user.user.email || '',
  //     phone: user.user.phone || '',
  //   },
  //   onSubmit: (values) => {
  //     // Handle form submission for personal details update
  //     console.log('Personal details form submitted', values);
  //     // Call API or dispatch Redux action to update personal details
  //   },
  // });

  

  return (
    <Container className='dashboard-container'>
      <h2>User Dashboard</h2>
      <h3>Welcome, {user.user.name}</h3>
      <Button variant="secondary" onClick={handleLogout} className="logout-button">
        Logout
      </Button>
      {/* Personal Details Section */}
      <section>
        <h3>Personal Details</h3>
      <div>
        <label>Name:</label>
        <span>{user.user.name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{user.user.email}</span>
      </div>
      {/* <div>
        <label>Phone Number:</label>
        <span>{user.user.phone}</span>
      </div> */}
        {/* <Form onSubmit={personalDetailsFormik.handleSubmit}>
          <Form.Group as={Row} controlId="formName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={user.user.name}
                // onChange={personalDetailsFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                name="email"
                value={personalDetailsFormik.values.email}
                onChange={personalDetailsFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPhone">
            <Form.Label column sm={2}>
              Phone
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                name="phone"
                value={personalDetailsFormik.values.phone}
                onChange={personalDetailsFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Personal Details
          </Button>
        </Form> */}
      </section>

      {/* Delivery Address Section */}
      <section>
        {/* <h3>Delivery Address</h3>
        <Form onSubmit={deliveryAddressFormik.handleSubmit}>
          <Form.Group as={Row} controlId="formAddressName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={deliveryAddressFormik.values.name}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formStreet">
            <Form.Label column sm={2}>
              Street
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="street"
                value={deliveryAddressFormik.values.street}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formCity">
            <Form.Label column sm={2}>
              City
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="city"
                value={deliveryAddressFormik.values.city}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formState">
            <Form.Label column sm={2}>
              State
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="state"
                value={deliveryAddressFormik.values.state}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPhoneNumber">
            <Form.Label column sm={2}>
              Phone Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={deliveryAddressFormik.values.phoneNumber}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPostalCode">
            <Form.Label column sm={2}>
              Postal Code
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="postalCode"
                value={deliveryAddressFormik.values.postalCode}
                onChange={deliveryAddressFormik.handleChange}
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Delivery Address
          </Button>
        </Form> */}
      </section>

      {/* Order History Section */}
      
      <div className="mb-4">
            <h3>Order History</h3>
            {orders.length > 0 ? (
              <ul className="order-history-list">
                {orders.map((order, index) => (
                  <li key={index} className="order-item">
                    <p>
                      <strong>Order Number:</strong> {order.orderNumber}
                    </p>
                    <p>
                      <strong>Customer Name:</strong> {order.customerName}
                    </p>
                    <p>
                      <strong>Price:</strong> {order.price}
                    </p>
                    <p>
                      <strong>Transaction Date:</strong> {order.transactionDate}
                    </p>
                    <p>
                      <strong>Delivery Date:</strong> {order.deliveryDate}
                    </p>
                    <p>
                      <strong>Shipping Method:</strong> {order.shippingMethod}
                    </p>
                    <p>
                      <strong>Product Rating:</strong> {order.productRating}
                    </p>
                    <p>
                      <strong>Shipping Rating:</strong> {order.shippingRating}
                    </p>
                    
                    <ul>
                      {order.products.map((product, index) => (
                        <li key={index}>
                          <p>
                            <strong>Product ID:</strong> {product.productId}
                          </p>
                          <p>
                            <strong>Quantity:</strong> {product.quantity}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="delivery-address">
                      <p>
                        <strong>Delivery Status:</strong> {order.deliveryAddress.status}
                      </p>
                      <p>
                        <strong>Delivery Address:</strong>
                        <br />
                        {Object.entries(order.deliveryAddress).map(([key, value]) => (
                          <span key={key}>
                            <strong>{key}: </strong>
                            {value}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No order history found.</p>
            )}
          </div>
    </Container>
  );
};

