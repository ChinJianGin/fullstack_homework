from .database import Base
from sqlalchemy import Column, Integer, String, Table
from sqlalchemy.orm import relationship, backref
from sqlalchemy.sql.schema import ForeignKey

association_table = Table(
    "association_table",
    Base.metadata,
    Column("left_id", ForeignKey("article.id")),
    Column("right_id", ForeignKey("author.id")),
        )

class Orm_Article(Base):
    __tablename__ = "article"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100))
    author = Column(String(30), nullable=True)
    description = Column(String(100), nullable=False)
    content = Column(String(1000), nullable=True)
    article_comment = relationship("Orm_Comment", back_populates='owner')
    article_like = relationship("Orm_Author", secondary=association_table, back_populates='owner')

class Orm_Comment(Base):
    __tablename__ = "comment"
    id = Column(Integer, primary_key=True, index=True)
    article_id = Column(Integer, ForeignKey('article.id'))
    owner_id = Column(Integer, ForeignKey('author.id'))
    comment = Column(String(1000), nullable=True)
    owner = relationship("Orm_Article", back_populates='article_comment')


class Orm_Author(Base):
    __tablename__ = "author"
    id = Column(Integer, primary_key=True, index=True)
    author = Column(String(30), nullable=False)
    owner = relationship("Orm_Article", secondary=association_table, back_populates='article_like')
