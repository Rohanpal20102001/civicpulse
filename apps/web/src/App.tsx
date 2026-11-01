import { useEffect, useState } from "react";
import { createIssue, getIssues } from "./api/issues";
import type { Issue, IssueCategory, IssueCreate } from "./types/issue";

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState<IssueCreate>({
    title: "",
    description: "",
    category: "ROAD_DAMAGE",
    latitude: 22.5726,
    longitude: 88.3639,
  });

  const loadIssues = async () => {
    try {
      setError("");
      const data = await getIssues();
      setIssues(data);
    } catch {
      setError("Unable to load reported issues.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadIssues();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: name === "latitude" || name === "longitude" ? Number(value) : value,
    } as IssueCreate)); // Add type assertion here to handle dynamic key evaluation safely
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const newIssue = await createIssue(form);

      setIssues((previous) => [newIssue, ...previous]);

      setSuccess(`Issue submitted successfully! ID: ${newIssue.id}`);

      setForm({
        title: "",
        description: "",
        category: "ROAD_DAMAGE",
        latitude: 22.5726,
        longitude: 88.3639,
      });
    } catch {
      setError("Unable to submit issue. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
      CivicPulse Community-powered civic issue intelligence platform.
      <section style={{ marginTop: "40px" }}>
        <h2>Report a civic issue</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Issue title</label>
            <br />
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Example: Large pothole near main road"
              minLength={5}
              maxLength={200}
              required
            />
          </div>

          <br />

          <div>
            <label htmlFor="category">Category</label>
            <br />
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="ROAD_DAMAGE">Road damage</option>
              <option value="GARBAGE">Garbage</option>
              <option value="STREETLIGHT">Streetlight</option>
              <option value="WATER_LEAKAGE">Water leakage</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <br />

          <div>
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe the issue..."
              minLength={10}
              maxLength={2000}
              required
              rows={4}
            />
          </div>

          <br />

          <div>
            <label htmlFor="latitude">Latitude</label>
            <br />
            <input
              id="latitude"
              name="latitude"
              type="number"
              step="any"
              min="-90"
              max="90"
              value={form.latitude}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <div>
            <label htmlFor="longitude">Longitude</label>
            <br />
            <input
              id="longitude"
              name="longitude"
              type="number"
              step="any"
              min="-180"
              max="180"
              value={form.longitude}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit issue"}
          </button>
        </form>

        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </section>
      <hr style={{ margin: "40px 0" }} />
      <section>
        <h2>Community issues</h2>

        {loading && <p>Loading issues...</p>}

        {!loading && issues.length === 0 && <p>No issues reported yet.</p>}

        {issues.map((issue) => (
          <article
            key={issue.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>Category: {issue.category}</p>
            <p>Status: {issue.status}</p>
            <p>
              Location: {issue.latitude}, {issue.longitude}
            </p>
            <small>Issue ID: {issue.id}</small>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
