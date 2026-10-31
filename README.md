# civicpulse
Open-source civic issue intelligence platform for reporting, tracking, and analyzing community infrastructure problems.

http://127.0.0.1:8000/⁠

http://127.0.0.1:8000/health⁠

http://127.0.0.1:8000/docs

http://localhost:3001/health

VITE_API_BASE_URL=http://localhost:8000

import { useEffect, useState } from "react";
import apiClient from "./api/client";

interface HealthResponse {
  status: string;
  service: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await apiClient.get<HealthResponse>("/health");
        setHealth(response.data);
      } catch {
        setError("Unable to connect to CivicPulse API.");
      } finally {
        setLoading(false);
      }
    };

    checkBackend();
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>CivicPulse</h1>
      <p>Community-powered civic issue intelligence platform.</p>

      <h2>Backend Connection</h2>

      {loading && <p>Checking API connection...</p>}

      {health && (
        <p>
          Status: {health.status} | Service: {health.service}
        </p>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}

export default App;