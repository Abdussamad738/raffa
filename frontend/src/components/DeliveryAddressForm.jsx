import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import {  updateUser } from '../utils/userActions';
import { updateDeliveryAddress } from '../utils/userActions';

function DeliveryAddressForm  ({ setOrderDeliveryAddressInCart })  {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const checkoutSchema = yup.object().shape({
    name: yup.string().required('required'),
    buildingName: yup.string().required('required'),
    suiteNo: yup.string().required('required'),
    street: yup.string().required('required'),
    state: yup.string().required('required'),
    phoneNo: yup.string().required('required'),
    country: yup.string().required('required'),
  });
  const deliveryAddressFormik = useFormik({
    initialValues: {
      name: '',
      phoneNo: '',
      buildingName: '',
      suiteNo: '',
      street: '',
      state: 'Dubai',
      country: 'UAE',
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      setSubmittedData(values);
      setIsSubmitted(true);
      // Call the callback function to set the order.deliveryAddress in the parent component
      setOrderDeliveryAddressInCart(values);
      dispatch(updateUser(values));
      updateDeliveryAddress(user.user._id, values);
      // Handle form submission for delivery address insertion      
      
      
      // Call API or dispatch Redux action to insert delivery address
    },
  });

  return (
    <Box>
      
      {isSubmitted ? ( // Display the submitted data if the form is submitted
        
        <div>
          <Box>
          {/* <h3>Submitted Data:</h3> */}
          <p>Name: {submittedData.name}</p>
          <p>Phone No: {submittedData.phoneNo}</p>
          <p>Apt/Suite No: {submittedData.suiteNo}</p>
          <p>Apt/Bldg Name: {submittedData.buildingName}</p>
          
          <p>Street: {submittedData.street}</p>
          <p>Dubai, UAE</p>
          {/* Display other submitted data here... */}
          <Button // Add a button to reset the form and enter new data
            variant="contained"
            color="primary"
            onClick={() => {
              setIsSubmitted(false);
              setSubmittedData({});
              deliveryAddressFormik.resetForm();
            }}
          >
            Edit Address
          </Button>
          </Box>
        </div>
        
      ) : (
      <form onSubmit={deliveryAddressFormik.handleSubmit}>
        <Box sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Name"
            onBlur={deliveryAddressFormik.handleBlur}
            onChange={deliveryAddressFormik.handleChange}
            value={deliveryAddressFormik.values.name}
            name="name"
            error={!!deliveryAddressFormik.touched.name && !!deliveryAddressFormik.errors.name}
            helperText={deliveryAddressFormik.touched.name && deliveryAddressFormik.errors.name}
          />
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Phone Number"
            onBlur={deliveryAddressFormik.handleBlur}
            onChange={deliveryAddressFormik.handleChange}
            value={deliveryAddressFormik.values.phoneNo}
            name="phoneNo"
            error={
              !!deliveryAddressFormik.touched.phoneNo && !!deliveryAddressFormik.errors.phoneNo
            }
            helperText={
              deliveryAddressFormik.touched.phoneNo && deliveryAddressFormik.errors.phoneNo
            }
          />
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Apt/Suite No"
            onBlur={deliveryAddressFormik.handleBlur}
            onChange={deliveryAddressFormik.handleChange}
            value={deliveryAddressFormik.values.suiteNo}
            name="suiteNo"
            error={!!deliveryAddressFormik.touched.suiteNo && !!deliveryAddressFormik.errors.suiteNo}
            helperText={deliveryAddressFormik.touched.suiteNo && deliveryAddressFormik.errors.suiteNo}
          />
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Apt/Bldg Name"
            onBlur={deliveryAddressFormik.handleBlur}
            onChange={deliveryAddressFormik.handleChange}
            value={deliveryAddressFormik.values.buildingName}
            name="buildingName"
            error={
              !!deliveryAddressFormik.touched.buildingName && !!deliveryAddressFormik.errors.buildingName
            }
            helperText={
              deliveryAddressFormik.touched.buildingName && deliveryAddressFormik.errors.buildingName
            }
          />
        </Box>
        
        <Box sx={{ marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Street Name"
            onBlur={deliveryAddressFormik.handleBlur}
            onChange={deliveryAddressFormik.handleChange}
            value={deliveryAddressFormik.values.street}
            name="street"
            error={
              !!deliveryAddressFormik.touched.street && !!deliveryAddressFormik.errors.street
            }
            helperText={
              deliveryAddressFormik.touched.street && deliveryAddressFormik.errors.street
            }
          />
        </Box>
        <Box>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="State"
          onBlur={deliveryAddressFormik.handleBlur}
          onChange={deliveryAddressFormik.handleChange}
          value={deliveryAddressFormik.values.state}
          name="state"
          error={!!deliveryAddressFormik.touched.state && !!deliveryAddressFormik.errors.state}
          helperText={deliveryAddressFormik.touched.state && deliveryAddressFormik.errors.state}
          disabled // Disable the State field
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Country"
          onBlur={deliveryAddressFormik.handleBlur}
          onChange={deliveryAddressFormik.handleChange}
          value={deliveryAddressFormik.values.country}
          name="country"
          error={!!deliveryAddressFormik.touched.country && !!deliveryAddressFormik.errors.country}
          helperText={deliveryAddressFormik.touched.country && deliveryAddressFormik.errors.country}
          disabled // Disable the Country field
        />
          </Box>
     
        
        
        {/* Add other form fields here... */}
        <Button variant="contained" color="primary" type="submit">
          Add Delivery Address
        </Button>
      </form>
      )}
    </Box>
    
  );
};

export default DeliveryAddressForm;
