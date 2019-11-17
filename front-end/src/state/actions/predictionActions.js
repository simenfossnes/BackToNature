import * as types from './actionTypes';

export const fetchPeopleTrafficPredictionsStart = () => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_START
});

export const fetchPeopleTrafficPredictionsSuccess = (data) => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_SUCCESS,
    data
});

export const fetchPeopleTrafficPredictionsError = () => ({
    type: types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_ERROR
});
