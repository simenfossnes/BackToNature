import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default function twitterReducer(state = initialState.twitter, action) {
    switch (action.type) {
        case types.FETCH_TWEETS_START:
            return {
                ...state,
                tweets: {
                    ...state.peopleTraffic,
                    data: action.data,
                    fetching: true
                }
            };

        case types.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                tweets: {
                    ...state.peopleTraffic,
                    data: action.data,
                    fetching: false
                }
            };

        case types.FETCH_TWEETS_ERROR:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}