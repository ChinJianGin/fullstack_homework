import uvicorn

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router import article
from router.base import api_router
from db import models, database

origins = [
    'http://localhost:5050',
    'http://localhost:5173'
]

def include_router(app):
    app.include_router(api_router)

def setting_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=['*']
            )

def bind_database():
    models.Base.metadata.create_all(bind=database.engine)

def start_application():
    bind_database()
    app = FastAPI(
        title="Article blog API",
        description="This API is developed for homework.",
        version="v0.0.1",
        terms_of_service="http://localhost:5050",
    )
    setting_middleware(app)
    include_router(app)
    return app

app = start_application()

@app.get("/")
def root_test():
    return {"Hello world"}

if __name__ == "__main__":
    uvicorn.run("app:app", port=5050, reload=True)
