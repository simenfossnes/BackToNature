import { call, put } from "redux-saga/effects";
import * as actions from '../actions/twitterActions';
import { getTweets } from '../../apis/Twitter/requests';

export function* fetchTweetsSaga() {
    try {
        const data = yield call(getTweets);
        if (data.hasOwnProperty('errors')) {
            throw Error('Twitter request limit reached.');
        }
        yield put(actions.fetchTweetsSuccess(data));
    } catch (e) {
        yield put(actions.fetchTweetsError(e));
    }
}
