

// import axios from 'axios';

// export const getTweets = () => {
//     return axios.get('/api/tasks')
// };

// export const getUserTweets = id => {
//     return axios.get(`/api/tasks/user/${id}`)
// };

// export const writeTweet = data => {
//     return axios.post('/api/tasks/', data)
// }

import axios from 'axios';

export const getTweets = () => {
    return axios.get('/api/tweets')
};

export const getUserTweets = id => {
    return axios.get(`/api/tweets/user/${id}`)
};

export const writeTweet = data => {
    return axios.post('/api/tweets/', data)
}