import * as types from './actionTypes';

export const fetchPeopleTrafficPredictionsStart = () => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_START
});

export const fetchPeopleTrafficPredictionsSuccess = () => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_SUCCESS
});

export const fetchPeopleTrafficPredictionsError = () => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_ERROR
});
