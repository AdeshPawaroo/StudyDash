import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer.js';

export default combineReducers({
    session: SessionErrorsReducer
});