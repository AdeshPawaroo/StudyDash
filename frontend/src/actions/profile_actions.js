import { updateUser } from "../util/profile_util";
import { RECEIVE_CURRENT_USER } from "./session_actions";

export const RECEIVE_TIME_STUDIED = "RECEIVE_TIME_STUDIED";
//export const RECEIVE_USER = "RECEIVE_USER";


export const receiveTimeStudied = timeStudied => ({
    type: RECEIVE_TIME_STUDIED,
    timeStudied
});

// export const editUser = (id) => dispatch => (
//     updateUser(id)
//         .then((user) => dispatch(receiveTimeStudied(user.timeStudied)))
// )

export const receiveUser = user => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: user
});

export const editUser = (user) => dispatch => (
    updateUser(user)
        .then((user) => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
)