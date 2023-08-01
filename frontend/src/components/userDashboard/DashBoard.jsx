
import React, { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';
import { Container,  Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { Typography,TextField } from '@mui/material';

// import { updateUserPhoneNumber } from '../utils/userActions';
import '../../styles/userdashboard.css'; 
import DeliveryAddressForm from '../DeliveryAddressForm';
export default function UserDashboard () {
  const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux state
  const navigate = useNavigate();
   // eslint-disable-next-line
  const token = sessionStorage.getItem("token");
 
  const [phone, setPhone] = useState(user?.phone || '');
   // eslint-disable-next-line
  const [deliveryAddress, setDeliveryAddress] = useState(user?.deliveryAddress || '');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

 

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

