# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.
python -m pip install --upgrade pip
pip install fastapi "uvicorn[standard]" sqlalchemy \
alembic psycopg2-binary pydantic-settings \
python-jose passlib argon2-cffi pytest httpx

pip freeze > requirements.txt