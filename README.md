# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.
python -m pip install --upgrade pip
pip install fastapi "uvicorn[standard]" sqlalchemy \
alembic psycopg2-binary pydantic-settings \
python-jose passlib argon2-cffi pytest httpx

pip freeze > requirements.txt


from fastapi import FastAPI

app = FastAPI(
    title="CivicPulse API",
    description="Open-source civic issue intelligence platform",
    version="0.1.0",
)


@app.get("/")
async def root():
    """Return basic API information."""
    return {
        "message": "Welcome to CivicPulse",
        "version": "0.1.0",
        "status": "running",
    }


@app.get("/health")
async def health_check():
    """Check API availability."""
    return {
        "status": "healthy",
        "service": "civicpulse-api",
    }
