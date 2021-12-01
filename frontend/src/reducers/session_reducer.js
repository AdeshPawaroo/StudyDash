import { RECEIVE_TIME_STUDIED } from '../actions/profile_actions';
import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    // let timeStudied = undefined;
    // switch (action.type) {
    //     case RECEIVE_TIME_STUDIED:
    //         timeStudied = action.timeStudied;
    //     default:
    //         timeStudied = undefined;
    // }
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // if (timeStudied){
            //     action.currentUser.timeStudied = timeStudied;
            // }
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