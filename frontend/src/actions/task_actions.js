
export const receiveUserTweets = tweets => ({
    type: RECEIVE_USER_TWEETS,
    tweets
});


export const fetchUserTweets = id => dispatch => (
    getUserTweets(id)
        .then(tweets => dispatch(receiveUserTweets(tweets)))
        .catch(err => console.log(err))
);