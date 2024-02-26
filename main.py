from fastapi import FastAPI, HTTPException, Depends
from sklearn.preprocessing import StandardScaler
import joblib
import numpy as np
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import List
app = FastAPI()

# Load your trained model
model = joblib.load("ada_model.joblib")
# Load your scaler
scaler = joblib.load("scaler.joblib")

class PredictionInput(BaseModel):
    A1_Score: int
    A2_Score: int
    A3_Score: int
    A4_Score: int
    A5_Score: int
    A6_Score: int
    A7_Score: int
    A8_Score: int
    A9_Score: int
    A10_Score: int
    age: int
    gender: str
    ethnicity: str
    jundice: str
    relation: str
    Class_ASD: int  # Assuming 0 for 'NO' and 1 for 'YES'
    # Add any other attributes you may have

    facialImage: UploadFile = None
    video: UploadFile = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/predict")
def predict(data: dict):
    # Extract input data and perform prediction
    input_data = data.get("input_data")

    # Standardize the input data
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    std_data = scaler.transform(input_data_reshaped)

    # Make a prediction
    prediction = model.predict(std_data)[0]

    return {"prediction": int(prediction)}
