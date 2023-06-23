import { combineReducers } from 'redux';
import productReducer from './productActions';

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;