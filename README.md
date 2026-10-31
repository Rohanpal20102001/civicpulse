# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

VITE_API_BASE_URL=http://localhost:8000


from fastapi import APIRouter

from app.modules.issues.routes import router as issues_router


api_router = APIRouter(prefix="/api/v1")

api_router.include_router(issues_router)

