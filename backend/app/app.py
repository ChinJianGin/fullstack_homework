import uvicorn
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"title": "Hello world"}


if __name__ == "__main__":
    uvicorn.run("app:app", port=5050, reload=True)
