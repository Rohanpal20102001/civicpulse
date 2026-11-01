from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.router import api_router

app = FastAPI(
    title="CivicPulse API",
    description="Open-source civic issue intelligence platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

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