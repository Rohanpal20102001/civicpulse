# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

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