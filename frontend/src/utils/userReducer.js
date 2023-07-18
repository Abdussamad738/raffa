// utils/userReducer.js

import { SET_USER, UPDATE_USER, REMOVE_USER,SET_ALL_USERS } from "./userActions";

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
