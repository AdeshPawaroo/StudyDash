import { combineReducers } from 'redux';
import session from './session_reducer.js';
import errors from './errors_reducer'
import flashcards from './flashcards_reducer';
import todos from './todos'
import currTab from './todo_currTab'


const RootReducer = combineReducers({
    session,
    todos,
    currTab,
    flashcards,
    errors,

});

export default RootReducer;