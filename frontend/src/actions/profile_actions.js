import { updateUser } from "../util/profile_util";

export const RECEIVE_TIME_STUDIED = "RECEIVE_TIME_STUDIED";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveTimeStudied = timeStudied => ({
    type: RECEIVE_TIME_STUDIED,
    timeStudied
});

// export const editUser = (id) => dispatch => (
//     updateUser(id)
//         .then((user) => dispatch(receiveTimeStudied(user.timeStudied)))
// )

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const editUser = (id) => dispatch => (
    updateUser(id)
        .then((user) => dispatch(receiveUser(user)))
        .catch(err => console.log(err))
)