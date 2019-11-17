import { call, put } from "redux-saga/effects";
import * as actions from '../actions/predictionActions';
import { getPeopleTrafficPredictions } from '../../apis/OurOwn/requests';

export function* fetchPeopleTrafficPredictionsSaga() {
    try {
        const firstDay = yield call(getPeopleTrafficPredictions, 1546293600);
        const secondDay = yield call(getPeopleTrafficPredictions, 1546293600);
        const thirdDay = yield call(getPeopleTrafficPredictions, 1546293600);
        const fourthDay = yield call(getPeopleTrafficPredictions, 1546293600);
        const fifthDay = yield call(getPeopleTrafficPredictions, 1546293600);
        const combinedData = [
            firstDay,
            secondDay,
            thirdDay,
            fourthDay,
            fifthDay
        ];
        yield put(actions.fetchPeopleTrafficPredictionsSuccess(combinedData));
    } catch (e) {
        yield put(actions.fetchPeopleTrafficPredictionsError(e));
    }
}
