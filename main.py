from typing import Union
from fastapi import FastAPI
#import train as t

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict_score/")
def pred_s(orderedAnswers: str):
    print(orderedAnswers)
    #X,Y =  t.load_data()
    #t.train_model(X,Y)
    #pred = t.predict_score()
    #print(pred)
    





