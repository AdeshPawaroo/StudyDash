import { RECEIVE_TIME_STUDIED } from '../actions/profile_actions';
import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                isAuthenticated: true,
                user: action.currentUser,
                errors: ''
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        default:
            return state;
    }
}