// import { RECEIVE_TASKS, RECEIVE_USER_TASKS, RECEIVE_NEW_TASK } from '../actions/task_actions';

// const TasksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
//     Object.freeze(state);
//     let newState = Object.assign({}, state);
//     switch (action.type) {
//         case RECEIVE_TASKS:
//             newState.all = action.tasks.data;
//             return newState;
//         case RECEIVE_USER_TASKS:
//             newState.user = action.tasks.data;
//             return newState;
//         case RECEIVE_NEW_TASK:
//             newState.new = action.task.data
//             return newState;
//         default:
//             return state;
//     }
// };

// export default TasksReducer;