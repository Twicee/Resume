'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Intern Developer",
      company: "Tech Corp",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      description: "Worked on front-end development projects"
    }
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleAddJob = (e) => {
    e.preventDefault();
    setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
    setNewJob({ title: '', company: '', startDate: '', endDate: '', description: '' });
  };

  return (
    <div>
      {/* Contact Information */}
      <h1>Adrian Elias</h1>
      <p>Email: aher388@calpoly.edu</p>
      <p>Phone: (123) 456-7890</p>

      {/* Skills */}
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
      </ul>

      {/* Projects */}
      <h2>Projects</h2>
      <ul>
        <li>E-commerce Website</li>
        <li>Task Management App</li>
      </ul>

      {/* Work History */}
      <h2>Work History</h2>
      <form onSubmit={handleAddJob}>
        <input
          placeholder="Job Title"
          value={newJob.title}
          onChange={e => setNewJob({...newJob, title: e.target.value})}
        />
        <input
          placeholder="Company"
          value={newJob.company}
          onChange={e => setNewJob({...newJob, company: e.target.value})}
        />
        <input
          type="date"
          value={newJob.startDate}
          onChange={e => setNewJob({...newJob, startDate: e.target.value})}
        />
        <input
          type="date"
          value={newJob.endDate}
          onChange={e => setNewJob({...newJob, endDate: e.target.value})}
        />
        <textarea
          placeholder="Description"
          value={newJob.description}
          onChange={e => setNewJob({...newJob, description: e.target.value})}
        />
        <button type="submit">Add Job</button>
      </form>

      {/* Job List */}
      <ul>
        {jobs
          .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
          .map(job => (
            <li key={job.id}>
              <Link href={`/job/${job.id}`}>
                {job.title} at {job.company}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}