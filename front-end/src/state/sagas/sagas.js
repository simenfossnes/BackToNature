import { takeLatest, all } from "redux-saga/effects";
import * as types from '../actions/actionTypes';
import { fetchPeopleTrafficPredictionsSaga } from './predictionSaga';
import { fetchTweetsSaga } from './twitterSaga';

export function* predictionSaga() {
    yield all([
        takeLatest(types.FETCH_PEOPLE_TRAFFIC_PREDICTIONS_START, fetchPeopleTrafficPredictionsSaga)
    ]);
}

export function* twitterSaga() {
    yield all([
        takeLatest(types.FETCH_TWEETS_START, fetchTweetsSaga)
    ]);
}