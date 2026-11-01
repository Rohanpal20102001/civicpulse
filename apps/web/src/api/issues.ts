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
