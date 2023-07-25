import React , { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
export default function Order() {
    const user = useSelector((state) => state.user.user); // Assuming user data is stored in Redux state
    const navigate = useNavigate();
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
  
    const orders = user.orderHistory;
    
    console.log("orders from user/order.jsx",JSON.stringify(orders))
  return (
    <div>
        <Box className="mb-4">
  <Typography variant="h3">Order History</Typography>
  {orders.length > 0 ? (
    <ul >
      {orders.map((order, index) => (
        <li key={index} className="order-item">
          
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="flex-end"
            sx={{
                backgroundColor: "#594747a3",
                borderRadius: "10px",
                padding: "10px",
                marginBottom:"5px"
              }}
              >
            <Typography sx={{
                color: "#fffffff0",
                }}>
                <strong>Order placed:</strong> {new Date(order.deliveryDate).toLocaleString(undefined, {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                })}
            </Typography>
            <Typography sx={{
                color: "#fffffff0",
                }}>
                <strong>Customer Name:</strong> {order.deliveryAddress?.name}
            </Typography>
            <Typography sx={{
                color: "#fffffff0",
                }}>
                <strong>Order Number:</strong> {order.orderNumber}
            </Typography>
            </Box>
            {/* <Typography>
              <strong>Price:</strong> {order.price}
            </Typography> */}
            
            {/* <Typography>
                <strong>Delivery Date:</strong>{" "}
                {new Date(order.deliveryDate).toLocaleString(undefined, {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                })}
            </Typography> */}
            
            {/* <Typography>
              <strong>Order Number:</strong> {order.orderNumber}
            </Typography>
          </Box> */}
          <Box display="flex" flexDirection="row">
            
          {order.products.map((product, index) => (
                <Box display="flex" flexDirection="column"  mb={2}>
                
                <img 
                    src={`https://raffasports.s3.ca-central-1.amazonaws.com/${product.image}`}
                    alt={product.productName}
                    style={{ width: "100px", height: "100px", marginRight: "10px" }} />
                
                <Box>
                <Typography variant="h6" component="h3">
                  {product.productName}
                </Typography>
                <Typography>{product.productDescription}</Typography>
                <Typography>
                  <strong>Quantity:</strong> {product.quantity}
                </Typography>
              </Box>
                
              
            
          </Box>
          ))}
          <Box pl={2}className="delivery-address">
            <Typography>
              <strong>Delivery Status:</strong> {order.status}
            </Typography>
            {/* <Typography>
              <strong>Delivery Address:</strong>
            </Typography> */}
            {/* <Box > */}
            <Typography>
                <strong>Delivery Address:</strong>
                <br />
                <div>
                  {order.shippingMethod === 'instorePickup' ? (
                    <p>Shipping method: In-store Pickup</p>
                  ) : (
                    <p>{Object.values(order.deliveryAddress).join(", ")}</p>
                  )}
                </div>
            </Typography>
            {/* <Typography>
              <strong>Shipping Method:</strong> {order.shippingMethod}
            </Typography>
            <Typography>
              <strong>Product Rating:</strong> {order.productRating}
            </Typography>
            <Typography>
              <strong>Shipping Rating:</strong> {order.shippingRating}
            </Typography> */}
            {/* </Box> */}
          </Box>
          <Box>
          <Typography>
              <strong>Order Total:</strong> AED {order.price}
            </Typography>
          </Box>
          </Box>
        </li>
      ))}
    </ul>
  ) : (
    <Typography>No order history found.</Typography>
  )}
</Box>
    </div>
  )
}

