// Action types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

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

// Reducer
const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;