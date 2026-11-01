from datetime import datetime, timezone
from uuid import UUID, uuid4

from app.modules.issues.schemas import (
    IssueCreate,
    IssueResponse,
    IssueStatus,
)

class IssueRepository:
    """Temporary in-memory issue repository."""

    def __init__(self) -> None:
        self._issues: dict[UUID, IssueResponse] = {}

    def create(self, issue_data: IssueCreate) -> IssueResponse:
        issue = IssueResponse(
            id=uuid4(),
            title=issue_data.title,
            description=issue_data.description,
            category=issue_data.category,
            status=IssueStatus.SUBMITTED,
            latitude=issue_data.latitude,
            longitude=issue_data.longitude,
            created_at=datetime.now(timezone.utc),
        )

        self._issues[issue.id] = issue
        return issue

    def get_all(self) -> list[IssueResponse]:
        return list(self._issues.values())

    def get_by_id(self, issue_id: UUID) -> IssueResponse | None:
        return self._issues.get(issue_id)

issue_repository = IssueRepository()