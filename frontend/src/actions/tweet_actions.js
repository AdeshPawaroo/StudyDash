// import { getTasks, addTask, updateTask, deleteTask} from '../util/task_util'
// export const RECEIVE_USER_TASKS = "RECEIVE_USER_TASKS";
// export const RECEIVE_NEW_TASK = "RECEIVE_NEW_TASK";


// export const receiveUserTasks = tasks => ({
//     type: RECEIVE_USER_TASKS,
//     tasks
// });

// export const receiveNewTask = task => ({
//     type: RECEIVE_NEW_TASK,
//     task
// })

// export const fetchUserTasks = id => dispatch => (
//     getTasks(id)
//         .then(tasks => dispatch(receiveUserTasks(tasks)))
//         .catch(err => console.log(err))
// );

// export const composeTask = data => dispatch => (
//     addTask(data)
//         .then(task => dispatch(receiveNewTask(task)))
//         .catch(err => console.log(err))
// );

import { getTweets, getUserTweets, writeTweet } from '../util/tweet_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

export const receiveTweets = tweets => ({
    type: RECEIVE_TWEETS,
    tweets
});

export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});

export const receiveNewTweet = tweet => ({
    type: RECEIVE_NEW_TWEET,
    tweet
})

export const fetchTweets = () => dispatch => (
    getTweets()
        .then(tweets => dispatch(receiveTweets(tweets)))
        .catch(err => console.log(err))
);

export const fetchUserTweets = id => dispatch => (
    getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
    writeTweet(data)
        .then(tweet => dispatch(receiveNewTweet(tweet)))
        .catch(err => console.log(err))
);