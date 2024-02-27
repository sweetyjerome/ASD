import joblib
from fastapi import FastAPI, HTTPException, UploadFile, File, Depends
from sklearn.preprocessing import StandardScaler
import numpy as np
from pydantic import BaseModel
from typing import Union

app = FastAPI()

# # Load your trained model
model = joblib.load("ada_model.joblib")
# # Load your scaler
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

class PredictionOutput(BaseModel):
    prediction: int

@app.get("/")
def read_root():
    return {"Hello": "World"}

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

# @app.put("/items/{item_id}")
# def update_item(item_id: int, item: PredictionInput):
#     return {"item_name": item.name, "item_id": item_id}

@app.post("/predict", response_model=PredictionOutput)
def predict(data: PredictionInput, facialImage: UploadFile = File(None), video: UploadFile = File(None)):
    # Extract input data and perform prediction
    input_data = [data.A1_Score, data.A2_Score, data.A3_Score, data.A4_Score, data.A5_Score, data.A6_Score,
                  data.A7_Score, data.A8_Score, data.A9_Score, data.A10_Score, data.age, data.gender,
                  data.ethnicity, data.jundice, data.relation, data.Class_ASD]

    # Standardize the input data
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)
    std_data = scaler.transform(input_data_reshaped)

    # Make a prediction
    prediction = int(model.predict(std_data)[0])

    return PredictionOutput(prediction=prediction)
