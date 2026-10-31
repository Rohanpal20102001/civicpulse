# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

VITE_API_BASE_URL=http://localhost:8000




from uuid import UUID

from fastapi import APIRouter, HTTPException, status

from app.modules.issues.repository import issue_repository
from app.modules.issues.schemas import IssueCreate, IssueResponse


router = APIRouter(
    prefix="/issues",
    tags=["Issues"],
)


@router.post(
    "",
    response_model=IssueResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_issue(issue_data: IssueCreate):
    """Submit a new civic issue."""
    return issue_repository.create(issue_data)


@router.get(
    "",
    response_model=list[IssueResponse],
)
async def get_issues():
    """Retrieve all submitted civic issues."""
    return issue_repository.get_all()


@router.get(
    "/{issue_id}",
    response_model=IssueResponse,
)
async def get_issue(issue_id: UUID):
    """Retrieve a civic issue by its ID."""
    issue = issue_repository.get_by_id(issue_id)

    if issue is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Issue not found",
        )

    return issue