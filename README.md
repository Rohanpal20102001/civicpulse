# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

brew list --versions postgresql@16 postgresql@17 postgresql@18 postgis

brew services list

psql -d civicpulse -c "SELECT version();"

psql -d civicpulse -c "SELECT name, default_version, installed_version FROM pg_available_extensions WHERE name LIKE 'postgis%';"