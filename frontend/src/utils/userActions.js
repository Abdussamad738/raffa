// utils/userActions.js
import axios from 'axios';
// Action types
export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SET_ALL_USERS="SET_ALL_USERS";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Action creators
export const setUser = (user,token) => ({
  type: SET_USER,
  payload: user,token,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const setAllUsers = (users) => ({
  type: SET_ALL_USERS,
  payload: users,
});
export const updateDeliveryAddress = async (userId, deliveryAddress) => {
    try {
      // Make a POST request to the server endpoint
      const response = await axios.post(`${backendUrl}/users/updateaddress`, {
        userId,
        deliveryAddress,
      });
  
      // Handle the response
      console.log(response.data); // Delivery address updated successfully
    } catch (error) {
      console.error(error);
    }
  };

  export const insertCartItems = (userId, cartItems) => {
    return async (dispatch) => {
      try {
        // Make a POST request to the server endpoint
        const response = await axios.post(`${backendUrl}/users/insertcartitems`, {
          userId,
          cartItems,
        });
  
        // Handle the response
        console.log(response.data); // Cart items inserted successfully
      } catch (error) {
        console.error(error);
      }
    };
  };

