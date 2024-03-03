
import string
from typing import Union
from fastapi import FastAPI, Body
import train as t
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class OrderedAnswers(BaseModel):
    score: int
    age: str 
    gender: int
    jaundice: int
    relation: int




#{"score":0,"age":"5","gender":0,"jaundice":1,"relation":1,"facialImage":null,"video":null}

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/predict_score")
def pred_s(orderedAnswers: OrderedAnswers = Body(...)) :
    X,Y =  t.load_data()
    classifier = t.train_model(X,Y)
    # inputObj = {
    #     'age':orderedAnswers.age,
    #     'gender':orderedAnswers.gender,
    #     'jaundice': orderedAnswers.jaundice,
    #     'relation': orderedAnswers.relation
    # }
    inputObj = [orderedAnswers.score, orderedAnswers.age, orderedAnswers.gender, orderedAnswers.jaundice, orderedAnswers.relation]
    print('**********',type(inputObj))
    pred = t.predict_score(classifier, inputObj)
    print('pred from main',pred)
    if (pred == 0):
        return {"message": 'The person is not with Autism spectrum disorder'}
    else:
        return {"message": 'The person is with Autism spectrum disorder'}


    





