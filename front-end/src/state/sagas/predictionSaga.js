import { call, put } from "redux-saga/effects";
import * as actions from '../actions/predictionActions';
import { getPeopleTrafficPredictions } from '../../apis/OurOwn/requests';

export function* fetchPeopleTrafficPredictionsSaga() {
    try {
        const data = yield call(getPeopleTrafficPredictions);
        yield put(actions.fetchPeopleTrafficPredictionsSuccess(data));
    } catch (e) {
        yield put(actions.fetchPeopleTrafficPredictionsError(e));
    }
}
