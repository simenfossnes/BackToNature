import { combineReducers } from "redux";
import predictions from './predictionReducer';
import twitter from './twitterReducer';
import timePeriod from './timePeriodReducer';

export default combineReducers({
    predictions,
    twitter,
    timePeriod
});