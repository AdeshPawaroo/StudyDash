// import { RECEIVE_TASKS, RECEIVE_USER_TASKS, RECEIVE_NEW_TASK } from '../actions/task_actions';

// const TasksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
//     Object.freeze(state);
//     let newState = Object.assign({}, state);
//     switch (action.type) {
//         case RECEIVE_USER_TASKS:
//             newState.user = action.tasks.data;
//             return newState;
//         case RECEIVE_NEW_TASK:
//             debugger;
//             console.log('hello')
//             newState.new = action.task.data
//             debugger;
//             return newState;
//         default:
//             return state;
//     }
// };

// export default TasksReducer;

import { RECEIVE_TWEETS, RECEIVE_USER_TWEETS, RECEIVE_NEW_TWEET } from '../actions/tweet_actions';

const TweetsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TWEETS:
            newState.all = action.tweets.data;
            return newState;
        case RECEIVE_USER_TWEETS:
            newState.user = action.tweets.data;
            return newState;
        case RECEIVE_NEW_TWEET:
            newState.new = action.tweet.data
            return newState;
        default:
            return state;
    }
};

export default TweetsReducer;