import * as types from './actionTypes';

export const fetchTweetsStart = () => ({
    type: types.FETCH_TWEETS_START
});

export const fetchTweetsSuccess = (data) => ({
    type: types.FETCH_TWEETS_SUCCESS,
    data
});

export const fetchTweetsError = () => ({
    type: types.FETCH_TWEETS_ERROR
});
