import { BASE_URL, BASE_INIT } from "./consts";
import fetch from 'cross-fetch';

export const getPeopleTrafficPredictions = () => (
    fetch(`${BASE_URL}/PredictBusy?time=1546293600`, {...BASE_INIT, method: "GET"})
        .then(response => response.json())
        .catch(error => {
            throw new Error('Request Error.');
        })
);