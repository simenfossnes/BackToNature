import { BASE_URL, BASE_INIT } from "./consts";
import fetch from 'cross-fetch';

export const getTweets = () => (
    fetch(`${BASE_URL}/twitter-proxy`, {...BASE_INIT, method: "GET"})
        .then(response => response.json())
        .catch(error => {
            throw new Error('Request Error.');
        })
);