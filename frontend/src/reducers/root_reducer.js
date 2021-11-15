import { combineReducers } from 'redux';
import session from './session_reducer.js';
import tasks from './tasks_reducer';

const RootReducer = combineReducers({
    session,
    // tasks
});

export default RootReducer;