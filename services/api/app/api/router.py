from fastapi import APIRouter

from app.modules.issues.routes import router as issues_router

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(issues_router)