import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useSelector } from 'react-redux';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../components/Header';
import '../index.css'
function Orders() {
  const theme = useTheme();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const colors = tokens(theme.palette.mode);
  //eslint-disable-next-line
  const { user, token } = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
//   const  orderHistory  = useSelector((state) => state.user.users);
  
useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${backendUrl}/admin/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
     // eslint-disable-next-line
  }, []);
  
  const columns = [
    { field: "id", headerName: "ID" },
    // { field: 'orderNumber', headerName: 'Order Number', flex: 1 },
    { field: 'userId', headerName: 'User ID', flex: 1 },
    { field: 'customerName', headerName: 'Customer Name', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'transactionDate', headerName: 'Transaction Date', flex: 1 },
    { field: 'deliveryDate', headerName: 'Delivery Date', flex: 1 },
    { field: 'shippingMethod', headerName: 'Shipping Method', flex: 1 },
    {
      field: 'products',
      headerName: 'Products',
      flex: 1,
      renderCell: ({ row }) => {
        const productData = row.products.map((product) => (
          <Box key={product.productId}>
            <Typography>{product.productId}</Typography>
            <img src={product.image} alt="Product" />
            <Typography>Quantity: {product.quantity}</Typography>
          </Box>
        ));
        return productData;
      },
    },
    
    {
      field: 'deliveryAddress',
      headerName: 'Delivery Address',
      flex: 1.5,
      renderCell: ({ row }) => {
        const { suiteNo, buildingName, street, emirate, postalCode, country, phoneNo } = row.deliveryAddress;
        const formattedAddress = `${suiteNo}, ${buildingName}, ${street}, ${emirate}, ${postalCode}, ${country}, ${phoneNo}`;
        return <Typography className="delivery-address-cell">{formattedAddress}</Typography>;
      },
    },
    { field: 'status', headerName: 'Status', flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="ORDERS" subtitle="Order Details" />
      <div className="orders-container">
      <Box
        m="40px 0 0 0"
        height="75vh"
        
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={orders} columns={columns} />
      </Box>
      </div>
    </Box>
  );
};

export default Orders;
