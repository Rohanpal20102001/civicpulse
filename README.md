# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not configured")





from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """
    Base class for all SQLAlchemy models.
    """

    pass



from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config import DATABASE_URL

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    echo=False,
)

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    expire_on_commit=False,
)



from collections.abc import Generator

from sqlalchemy.orm import Session

from app.database.session import SessionLocal


def get_db() -> Generator[Session, None, None]:
    """
    Provide a database session to a FastAPI request.

    Yields:
        Session: An active SQLAlchemy database session.
    """
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()



from sqlalchemy import text

from app.database.session import engine


def test_database_connection():
    with engine.connect() as connection:
        result = connection.execute(
            text("SELECT current_database(), current_user")
        )

        database, user = result.fetchone()

        assert database == "civicpulse"
        assert user == "rohanpal"

        print(f"Connected successfully: {database}, {user}")


if __name__ == "__main__":
    test_database_connection()
    print("Database connection test passed!")





