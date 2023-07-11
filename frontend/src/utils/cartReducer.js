import axios from 'axios';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const CLEAR_CART ='CLEAR_CART'
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";
const initialState = {
    cart: [],
  };
  
 
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    
  
        case ADD_TO_CART:
            const  productDetails  = action.payload;
            console.log("this is from productActions and product id and quantity is:",JSON.stringify(productDetails))
            console.log("cart reducer, state.cart:",JSON.stringify(state.cart))
            const existingCartItem = state.cart.find((item) => item.productDetails.productId === productDetails.productId);
            
            if (existingCartItem) {
                console.log("from cart reducer, there is already that item")
              // If the item is already in the cart, update the quantity
              const updatedCart = state.cart.map((item) =>
      item.productDetails.productId === productDetails.productId ? { ...item, quantity: item.productDetails.quantity += productDetails.quantity } : item
    );
              return { ...state, cart: updatedCart };
            } else {
                console.log("there is no items in cart ")
              // If the item is not in the cart, add it
              return { ...state, cart: [...state.cart, { productDetails }] };
            }

            case DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productDetails.productId === action.payload.productId
            ? { ...item, productDetails: { ...item.productDetails, quantity: item.productDetails.quantity - 1 } }
            : item
        ),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.productDetails.productId === action.payload.productId
            ? { ...item, productDetails: { ...item.productDetails, quantity: item.productDetails.quantity + 1 } }
            : item
        ),
      };
          default:
            console.log("this is from productActions and product id and quantity is:",JSON.stringify(state.cart))
            return state;
    }
  };
  
  
  export const fetchCartSuccess = (cart) => ({
    type: FETCH_CART_SUCCESS,
    payload: cart,
  });
  
  export const fetchCartFailure = (error) => ({
    type: FETCH_CART_FAILURE,
    payload: error,
  });
  
  // Thunk action creator
  export const fetchCart = (userId) => {
    return async (dispatch) => {
      try {
        // Make an API call to fetch the cart data from the database using the userId
        const response = await axios.get(`/users/${userId}/cart`);
        const cart = response.data;
  
        // Dispatch the fetchCartSuccess action with the fetched cart data
        dispatch(fetchCartSuccess(cart));
      } catch (error) {
        // Dispatch the fetchCartFailure action if there is an error
        dispatch(fetchCartFailure(error));
      }
    };
  };

  export default cartReducer;