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
