import logging

import azure.functions as func

import numpy as np
import sklearn
import joblib
from datetime import datetime

import pandas as pd

import urllib.request

import json

np.random.seed(2137)

def get_features_from_timestamp(timestamp):
    if timestamp is None:
        dt = datetime.now()
    else:
        dt = datetime.fromtimestamp(int(timestamp))

    forecast_path, res = urllib.request.urlretrieve('https://backtonature8424020677.blob.core.windows.net/azureml-blobstore-9b6dfb01-7efa-4df8-9e52-0ff1446845bd/forecast_clean.csv')
    df = pd.read_csv(forecast_path)
    df.start = pd.to_datetime(df.start)

    idx = (dt - df.start).idxmin()

    row = df.loc[idx]

    
    logging.info(f"Time read: {str(dt)}")

    counters = [1043, 922, 1050, 912, 1225, 1246]
    features = np.array([[dt.month, int(dt.weekday() >= 5), dt.weekday(), dt.day, dt.hour, counter] 
                        for counter in counters])

    return features

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    timestamp = req.params.get('time')
    logging.info(f"Timestamp received: {timestamp}")

    features = get_features_from_timestamp(timestamp)

    path, res = urllib.request.urlretrieve('https://backtonature8424020677.blob.core.windows.net/azureml-blobstore-9b6dfb01-7efa-4df8-9e52-0ff1446845bd/rel_busy_predictor.joblib')
    clf = joblib.load(path)

    # path, res = urllib.request.urlretrieve('https://backtonature8424020677.blob.core.windows.net/azureml-blobstore-9b6dfb01-7efa-4df8-9e52-0ff1446845bd/weather_pred_relative.joblib')
    # rel_clf = joblib.load(path)

    # preds = clf.predict(features)
    rel_probs = clf.predict_proba(features)
    logging.info(f"{rel_probs.shape}")

    counters = [1043, 922, 1050, 912, 1225, 1246]
    pred_dict = {str(i): str(   np.random.choice(range(4), p=rel_probs[i])    ) for i in range(len(counters))}

    pred_json = json.dumps(pred_dict)

    return func.HttpResponse(pred_json, headers={'Content-Type': 'application/json', 'content-type': 'application/json'})