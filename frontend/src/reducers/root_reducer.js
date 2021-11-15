import { combineReducers } from 'redux';
import session from './session_reducer.js';

const RootReducer = combineReducers({
    session
});

export default RootReducer;