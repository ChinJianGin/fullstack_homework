from .database import Base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship, backref
from sqlalchemy.sql.schema import ForeignKey

class Orm_Article(Base):
    __tablename__ = "article"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    author = Column(String(30), nullable=True)
    description = Column(String(100), nullable=False)
    content = Column(String(1000), nullable=True)
