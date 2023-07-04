import { combineReducers } from 'redux';
import productReducer from './productActions';
import cartReducer from './cartReducer'; 
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;