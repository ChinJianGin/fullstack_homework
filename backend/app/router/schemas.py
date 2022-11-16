from pydantic import BaseModel

class ArticleRequest(BaseModel):
    title: str
    author: str
    description: str
    content: str

class ArticleResponse(ArticleRequest):
    id: int

    class Config:
        orm_mode = True
