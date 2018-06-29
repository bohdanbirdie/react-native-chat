import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOGOUT,
    SWITCH_TO_SIGNUP,
    SWITCH_TO_LOGIN
  } from '../actions';
  
  const initialState = {
    authenticated: false,
    fetching: false,
    error: null,
    isLogin: true,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case AUTH_START:
        return {
          ...state,
          fetching: true,
          authenticated: false,
        };
  
      case AUTH_SUCCESS:
        return {
          ...state,
          fetching: false,
          authenticated: true,
        };
  
      case AUTH_ERROR:
        return {
          ...state,
          fetching: false,
          authenticated: false,
        };

    case LOGOUT:
        return {
          ...state,
          authenticated: false,
        };
    
    case SWITCH_TO_SIGNUP:
        return {
          ...state,
          isLogin: false,
        };
    
    case SWITCH_TO_LOGIN:
        return {
          ...state,
          isLogin: true,
        };

      default:
        return state;
    }
  };
  