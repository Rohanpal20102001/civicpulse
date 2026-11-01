export type IssueCategory =
| "ROAD_DAMAGE"
| "GARBAGE"
| "STREETLIGHT"
| "WATER_LEAKAGE"
| "OTHER";

export interface IssueCreate {
    title: string;
    description: string;
    category: IssueCategory;
    latitude: number;
    longitude: number;
}

export interface Issue {
    id: string;
    title: string;
    description: string;
    category: IssueCategory;
    status: "SUBMITTED";
    latitude: number;
    longitude: number;
    created_at: string;
}