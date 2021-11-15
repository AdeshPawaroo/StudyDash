import { combineReducers } from 'redux';
import session from './session_reducer.js';
import tasks from './tasks_reducer';
import errors from './errors_reducer'

const RootReducer = combineReducers({
    session,
    tasks,
    errors
});

export default RootReducer;