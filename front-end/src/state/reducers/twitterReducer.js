import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default function twitterReducer(state = initialState.prediction, action) {
    switch (action.type) {
        case types.FETCH_TWEETS_START:
            return {
                ...state,
                fetching: true
            };

        case types.FETCH_TWEETS_SUCCESS:
            return {
                ...state,
                fetching: false
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