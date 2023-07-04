// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
// Action creator to fetch product details
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:9000/products');
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
        const response = await fetch(`http://localhost:9000/product/${productId}`);
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
  

// Reducer
const initialState = {
  products: [],
  likedItems:[],
  
};

export const updateLikedItems = (likedItems) => {
    return {
      type: 'UPDATE_LIKED_ITEMS',
      payload: likedItems,
    };
  };

  export const addToCart = (productDetails) => {
    console.log("from addToCart :",JSON.stringify(productDetails))
    return {
      type: ADD_TO_CART,
      payload: productDetails,
    };
  };

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
      case 'UPDATE_LIKED_ITEMS':
      return {
        ...state,
        likedItems: action.payload,
      };
  

      
      default:
        return state;
  }
};

export default productReducer;