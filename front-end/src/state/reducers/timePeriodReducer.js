import initialState from '../store/initialState';
import * as types from '../actions/actionTypes';

export default function predictionReducer(state = initialState.timePeriod, action) {
    switch (action.type) {

        case types.UPDATE_DAYS_AHEAD:
            return {
                ...state,
                daysAhead: action.daysAhead
            };
        
        default:
            return state;
    }
}