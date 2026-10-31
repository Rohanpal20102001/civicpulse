# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

VITE_API_BASE_URL=http://localhost:8000




from datetime import datetime
from enum import Enum
from uuid import UUID

from pydantic import BaseModel, Field


class IssueCategory(str, Enum):
    ROAD_DAMAGE = "ROAD_DAMAGE"
    GARBAGE = "GARBAGE"
    STREETLIGHT = "STREETLIGHT"
    WATER_LEAKAGE = "WATER_LEAKAGE"
    OTHER = "OTHER"


class IssueStatus(str, Enum):
    SUBMITTED = "SUBMITTED"


class IssueCreate(BaseModel):
    title: str = Field(min_length=5, max_length=200)
    description: str = Field(min_length=10, max_length=2000)
    category: IssueCategory
    latitude: float = Field(ge=-90, le=90)
    longitude: float = Field(ge=-180, le=180)


class IssueResponse(BaseModel):
    id: UUID
    title: str
    description: str
    category: IssueCategory
    status: IssueStatus
    latitude: float
    longitude: float
    created_at: datetime