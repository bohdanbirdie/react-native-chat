import {
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOGOUT,
  } from '../actions';
  
  const initialState = {
    authenticated: false,
    fetching: false,
    error: null,
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

      default:
        return state;
    }
  };
  