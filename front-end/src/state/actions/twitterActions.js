import * as types from './actionTypes';

export const fetchTweetsStart = () => ({
    type: types.FETCH_TWEETS_START
});

export const fetchTweetsSuccess = () => ({
    type: types.FETCH_TWEETS_SUCCESS
});

export const fetchTweetsError = () => ({
    type: types.FETCH_TWEETS_ERROR
});
