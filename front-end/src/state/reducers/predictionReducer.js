import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default function predictionReducer(state = initialState.prediction, action) {
    switch (action.type) {
        case types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_START:
            return {
                ...state,
                peopleTraffic: {
                    ...state.peopleTraffic,
                    fetching: true
                }
            };

        case types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_SUCCESS:
            return {
                ...state,
                peopleTraffic: {
                    ...state.peopleTraffic,
                    data: action.data,
                    fetching: false
                }
            };

        case types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_ERROR:
            return {
                ...state,
                fetching: false
            };
        default:
            return state;
    }
}