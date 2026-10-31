# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

import apiClient from "./client";
import type { Issue, IssueCreate } from "../types/issue";

export const getIssues = async (): Promise<Issue[]> => {
  const response = await apiClient.get<Issue[]>("/api/v1/issues");
  return response.data;
};

export const createIssue = async (
  issue: IssueCreate
): Promise<Issue> => {
  const response = await apiClient.post<Issue>(
    "/api/v1/issues",
    issue
  );

  return response.data;
};