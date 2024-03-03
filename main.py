from typing import Union
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{A1_Score}")
def read_item(A1_Score: str, ans: Union[str, None] = None):
    return {"A1_Score": A1_Score, "ans": ans}