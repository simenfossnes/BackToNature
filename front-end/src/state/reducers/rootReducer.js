import { combineReducers } from "redux";
import predictions from './predictionReducer';
import twitter from './twitterReducer';

export default combineReducers({
    predictions,
    twitter
});