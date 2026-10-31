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

postgresql@16 16.15_1
postgresql@18 18.6_1

Name          Status  User     File
postgresql@16 none             
postgresql@18 started rohanpal ~/Library/LaunchAgents/sh.brew.postgresql@18.plist

                                                           version                                                            
------------------------------------------------------------------------------------------------------------------------------
 PostgreSQL 18.6 (Homebrew) on aarch64-apple-darwin25.6.0, compiled by Apple clang version 21.0.0 (clang-2100.3.34.2), 64-bit
(1 row)

 name | default_version | installed_version 
------+-----------------+-------------------
(0 rows)
