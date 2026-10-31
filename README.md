# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

rohanpal@CKMAC190 ~ % psql -d civicpulse -c "SELECT current_database(), current_user, PostGIS_Full_Version();"
 current_database | current_user |                                                                                                                                                                                    postgis_full_version                                                                                                                                                                                    
------------------+--------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 civicpulse       | rohanpal     | POSTGIS="3.7.0 0" [EXTENSION] PGSQL="180" GEOS="3.15.0-CAPI-1.21.0" PROJ="9.9.0 NETWORK_ENABLED=OFF URL_ENDPOINT=https://cdn.proj.org USER_WRITABLE_DIRECTORY=/Users/rohanpal/Library/Application Support/proj DATABASE_PATH=/opt/homebrew/Cellar/proj/9.9.0/share/proj/proj.db" (compiled against PROJ 9.9.0) LIBXML="2.15.4" LIBJSON="0.19" LIBPROTOBUF="1.5.2" WAGYU="0.5.0 (Internal)"
(1 row)

rohanpal@CKMAC190 ~ % psql -d civicpulse -c "SHOW unix_socket_directories;"                                   
 unix_socket_directories 
-------------------------
 /tmp
(1 row)
