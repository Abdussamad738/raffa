// utils/userReducer.js

import { SET_USER, UPDATE_USER, REMOVE_USER,SET_ALL_USERS,UPDATE_ORDER_HISTORY } from "./userActions";

const initialState = {
  user: null,
  address:null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case UPDATE_ORDER_HISTORY:
      return {
        ...state,
        user: {
          ...state.user,
          orderHistory: action.payload,
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        address: action.payload,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
      case SET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
