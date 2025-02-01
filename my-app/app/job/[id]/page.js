"use client";

import { useParams } from "next/navigation";

export default function JobDetail() {
  const { id } = useParams();

  const jobs = [
    {
      id: "1",
      title: "Intern Developer",
      company: "Tech Corp",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      description: "Worked on front-end development projects",
      details: "• Developed React components\n• Collaborated with team members\n• Participated in code reviews"
    }
  ];

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <h2>{job.company}</h2>
      <p>Dates: {job.startDate} to {job.endDate}</p>
      <p>{job.description}</p>
      <pre>{job.details}</pre>
      <button onClick={() => window.history.back()}>Back to Home</button>
    </div>
  );
}
