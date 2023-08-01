// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const CLEAR_CART ='CLEAR_CART';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const UPDATE_LIKED_ITEMS='UPDATE_LIKED_ITEMS';
// Action creator to fetch product details
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${backendUrl}/products`);
      const data = await response.json();
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // Handle error
    }
  };
};

// Action creator to fetch product details by ID
export const fetchProduct = (productId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${backendUrl}/product/${productId}`);
        const data = await response.json();
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        // Handle error
      }
    };
  };
  
  export const deleteProductSuccess = (productId) => {
    return {
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    };
  };

// Reducer
const initialState = {
  products: [],
  likedItems:[],
  
};

export const updateLikedItems = (likedItems) => {
  return {
      type: UPDATE_LIKED_ITEMS,
      payload: likedItems,
    };
  };

  export const addToCart = (productDetails) => {
    return {
      type: ADD_TO_CART,
      payload: productDetails,
    };
  };

  // Action creator
export const clearCart = () => ({
  type: CLEAR_CART,
});

  export const decreaseQuantity = (productId) => {
    return {
      type: DECREASE_QUANTITY,
      payload: { productId },
    };
  };
  
  export const increaseQuantity = (productId) => {
    return {
      type: INCREASE_QUANTITY,
      payload: { productId },
    };
  };

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
      case UPDATE_LIKED_ITEMS:
      return {
        ...state,
        likedItems: action.payload,
      };
      case DELETE_PRODUCT_SUCCESS:
      // Remove the deleted product from the state
      return {
        ...state,
        products: state.products.filter((product) => product._id !== action.payload),
      };
  

      
      default:
        return state;
  }
};

export default productReducer;