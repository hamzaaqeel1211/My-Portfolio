// ============================================================
// components/Projects.js
// Project showcase cards WITHOUT images.
// To add a project: add a new object to the `projects` array.
// Each project can have a `liveUrl` and/or `githubUrl`.
// ============================================================

import React, { useState } from 'react';
import './Projects.css';

// ── Project data ────────────────────────────────────────────
// Set liveUrl / githubUrl to '#' if not available yet.
const projects = [
  {
    id: 1,
    title:       'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, Stripe payments, and admin dashboard built with React, Node.js and MongoDB.',
    tags:        ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl:     '#',
    githubUrl:   'https://github.com/hamzaaqeel1211',
  },
  {
    id: 2,
    title:       'Task Management SaaS',
    description: 'A Trello-inspired project management tool with real-time updates, role-based access, and team workspaces using Laravel and Vue.js.',
    tags:        ['Laravel', 'Vue.js', 'MySQL', 'WebSockets'],
    liveUrl:     '#',
    githubUrl:   'https://github.com/hamzaaqeel1211',
  },
  {
    id: 3,
    title:       'Real-Estate Listing Portal',
    description: 'Property search platform with map integration, filters, agent profiles, and a CMS-powered backend on WordPress with custom REST APIs.',
    tags:        ['WordPress', 'PHP', 'REST API', 'Google Maps'],
    liveUrl:     '#',
    githubUrl:   null, // no public repo — set null to hide the button
  },
  {
    id: 4,
    title:       'Healthcare Appointment App',
    description: 'React Native–style web app for booking doctor appointments with Firebase auth, Firestore database, and real-time availability.',
    tags:        ['React', 'Firebase', 'Firestore'],
    liveUrl:     '#',
    githubUrl:   'https://github.com/hamzaaqeel1211',
  },
  {
    id: 5,
    title:       'Restaurant POS System',
    description: 'Point-of-sale web app for a restaurant chain handling orders, inventory, billing and daily sales reports using PHP and MySQL.',
    tags:        ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    liveUrl:     '#',
    githubUrl:   null,
  },
  {
    id: 6,
    title:       'Personal Finance Tracker',
    description: 'A clean budgeting app where users track income, expenses and savings with interactive charts — built with React and LocalStorage.',
    tags:        ['React', 'Chart.js', 'Tailwind CSS'],
    liveUrl:     '#',
    githubUrl:   'https://github.com/hamzaaqeel1211',
  },
];

function Projects() {
  // Filter state: 'All' shows every project, or filter by tag
  const [filter, setFilter] = useState('All');

  // Build the unique list of all tags across all projects
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  // Apply filter: show all projects or only projects matching the selected tag
  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <p className="section-eyebrow">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <div className="title-line" />

        {/* Filter tabs */}
        <div className="projects__filters">
          {/* Only show the first 7 tags to keep the UI clean */}
          {allTags.slice(0, 8).map(tag => (
            <button
              key={tag}
              className={`projects__filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects__grid">
          {filtered.map(project => (
            <div className="project-card card" key={project.id}>
              {/* Card top accent bar */}
              <div className="project-card__bar" />

              {/* Title */}
              <h3 className="project-card__title">{project.title}</h3>

              {/* Description */}
              <p className="project-card__desc">{project.description}</p>

              {/* Tech tags */}
              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span className="project-card__tag" key={tag}>{tag}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="project-card__actions">
                {/* Live demo link */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary project-card__btn"
                >
                  Live Demo ↗
                </a>

                {/* GitHub link — only shown if githubUrl is set */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline project-card__btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
