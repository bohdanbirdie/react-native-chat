import { SAVE_USERS_LIST, SAVE_INITIAL_MESSSAGES_LIST, RECEIVE_NEW_MESSAGE } from "../actions";

const initialState = {
  messages: [],
  users: [],
  fetching: false,
  fetched: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERS_LIST:
        return {
          ...state,
          users: [...state.users, ...action.payload],
        };
    
    case SAVE_INITIAL_MESSSAGES_LIST:
        return {
          ...state,
          messages: [...state.messages, ...action.payload],
        };
    
    case RECEIVE_NEW_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };

    default:
      return state;
  }
};
