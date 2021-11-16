import { RECEIVE_NEW_TASK, RECEIVE_USER_TASKS, REMOVE_TASK } from '../actions/task_actions';

// const TasksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
//     Object.freeze(state);
//     let newState = Object.assign({}, state);
//     switch (action.type) {
//         case RECEIVE_USER_TASKS:
//             newState.user = action.tasks.data;
//             return newState;
//         case RECEIVE_NEW_TASK:
//             // debugger;
//             console.log('hello')
//             newState.new = action.task.data
//             // debugger;
//             return newState;
//         default:
//             return state;
//     }
// };


const TasksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        // case RECEIVE_TASKS:
        //     action.tasks.forEach(task => {
        //         nextState[task.id] = task;
        //     });
        //     return nextState;
        case RECEIVE_NEW_TASK:
            const newTask = { [action.task.id]: action.task };
            return Object.assign({}, state, newTask);
        case REMOVE_TASK:
            nextState = Object.assign({}, state);
            delete nextState[action.task.id];
            return nextState;
        default:
            return state;
    }
};
export default TasksReducer;