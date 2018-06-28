import { combineReducers } from 'redux';
import chatReducer from './chatReducer'
import sessionReducer from './sessionReducer'

export default combineReducers({
    chatReducer,
    sessionReducer,
});

