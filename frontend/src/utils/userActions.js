// utils/userActions.js
import axios from 'axios';
// Action types
export const SET_USER = "SET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SET_ALL_USERS="SET_ALL_USERS";

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
      const response = await axios.post('http://localhost:9000/users/updateaddress', {
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
        const response = await axios.post('http://localhost:9000/users/insertcartitems', {
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

//   export const updateUserCart = (userId, cart) => {
//     try {
//       // Find the user by userId
//       const user = await User.findById(userId);
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       // Update the user's cart
//       user.cart = cart;
  
//       // Save the updated user in the database
//       await user.save();
  
//       res.status(200).json({ message: 'Cart updated successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error updating cart', error });
//     }
//   };