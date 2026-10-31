# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

cd ~/Projects/civicpulse/services/api

source .venv/bin/activate

pip show sqlalchemy psycopg2-binary alembic geoalchemy2

pip install geoalchemy2

python -c "import sqlalchemy, psycopg2, alembic, geoalchemy2; print('All database dependencies are available')"



python - <<'PY'
from sqlalchemy import create_engine, text

DATABASE_URL = "postgresql+psycopg2://rohanpal@/civicpulse?host=/tmp"

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    echo=False
)

try:
    with engine.connect() as connection:
        result = connection.execute(
            text("""
                SELECT
                    current_database(),
                    current_user,
                    PostGIS_Full_Version()
            """)
        )

        database, user, postgis_version = result.fetchone()

        print("Database connection successful!")
        print(f"Database: {database}")
        print(f"User: {user}")
        print(f"PostGIS: {postgis_version}")

except Exception as error:
    print("Database connection failed!")
    print(f"Error: {error}")

finally:
    engine.dispose()
PY




pip show sqlalchemy psycopg2-binary alembic geoalchemy2