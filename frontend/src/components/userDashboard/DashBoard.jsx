
import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Container,  Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { Box, Typography,TextField } from '@mui/material';

// import { updateUserPhoneNumber } from '../utils/userActions';
import '../../styles/userdashboard.css'; 
import { insertCartItems } from '../../utils/userActions';
import DeliveryAddressForm from '../DeliveryAddressForm';
export default function UserDashboard () {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux state
  console.log("from user-dashboard,",JSON.stringify(user))
  const navigate = useNavigate();
  // const signIn = useSignIn();
  // // const orders = user.orderHistory;
  // const cartItems = useSelector((state) => state.cart.cart);
  

  
  const token = sessionStorage.getItem("token");
  console.log("token",token)
  // useEffect(() => {
    
  //   if (!user) {
  //     // Redirect to login page if user is not signed in
  //     navigate('/login');
  //     return null;
  //   }
  // }, []);
  
  // Formik form values and handlers for the delivery address section
  // const deliveryAddressFormik = useFormik({
  //   initialValues: {
  //     name: '',
  //     street: '',
  //     city:'',
  //     state: '',
  //     phoneNumber: '',
  //     postalCode: '',
  //   },
  //   onSubmit: (values) => {
      
  //   dispatch(updateUser(values));
  //   updateDeliveryAddress(user._id, values);
  //     // Handle form submission for delivery address insertion
  //     console.log('Delivery address form submitted', values);
  //     // Call API or dispatch Redux action to insert delivery address
  //   },
  // });

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
  // const handleSetUser = (user) => {
  //   dispatch(setUser(user));
    
  // };

  // const handleLogout = () => {
  //   let cart=[]
  //   const carts= cartItems.map((item)=>(
  //     cart.push(item)
  //   ));
    
  //   console.log("from handlelogout:",JSON.stringify(user._id,cart))
  //   // Dispatch the removeUser action to clear user data from the store
  //   dispatch(insertCartItems(user._id, cart));
    
  //   dispatch(removeUser());
  //   dispatch(clearCart());
  //   // Get the cart items from the Redux store
    
  
  //   // Update the user's cart in the database
   
  
  //   // Clear the cart in the Redux store
    
  
  //   // Redirect to the login page
  //   navigate('/login');
  // };

  // Update user
  // const handleUpdateUser = (updatedUser) => {
  //   dispatch(updateUser(updatedUser));
  // };

  // // Remove user
  // const handleRemoveUser = () => {
  //   dispatch(removeUser());
  // };
  const [phone, setPhone] = useState(user?.phone || '');
  const [deliveryAddress, setDeliveryAddress] = useState(user?.deliveryAddress || '');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // const handleAddressChange = (e) => {
  //   setDeliveryAddress(e.target.value);
  // };

  const handleUpdateDetails = () => {
    // Handle update details logic here
    console.log('Phone:', phone);
    console.log('Delivery Address:', deliveryAddress);
  };
  useEffect(() => {
    if (!user) {
      // Redirect to login page if user is null
      navigate('/login');
    }
  }, [user, navigate]);
  if (!user) {
    // Show a loading spinner or message if user is null
    return <div>Loading...</div>;
  }


  

  return (
    <Container className="dashboard-container">
    <h3>Welcome, {user.name}</h3>

    <h3>Personal Details</h3>
    <span>
    <Typography sx={{
                color: "##fff4f4",
                }}>
                <strong>Name:</strong>
    </Typography>
    <Typography sx={{ color: '#ffc8c8' }}>
        {user.name}
      </Typography>
      
      </span>
      <span>
    <Typography sx={{
                color: "##fff4f4",
                }}>
                <strong>Email:</strong>
    </Typography>
    <Typography sx={{ color: '#ffc8c8' }}>
        {user.email}
      </Typography>
      
      </span>
    <div>
      <label>Phone:</label>
      {user.phone ? (
        <Typography sx={{ color: '#ffc8c8' }}>{user.phone}</Typography>
      ) : (
        <TextField
          value={phone}
          onChange={handlePhoneChange}
          label="Phone"
          variant="outlined"
          fullWidth
        />
      )}
    </div>
    <div className="delivery-address">
      <label>Delivery Address:</label>
      <DeliveryAddressForm/>
    </div>

    <Button variant="contained" color="secondary" onClick={handleUpdateDetails}>
      Update Details
    </Button>
  </Container>

  );
};

