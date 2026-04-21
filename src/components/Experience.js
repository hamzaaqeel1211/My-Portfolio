// ============================================================
// components/Experience.js
// Work experience in a vertical timeline layout.
// To add a new job: add a new object to the `experiences` array.
// ============================================================

import React from 'react';
import './Experience.css';

// ── Work history data ─────────────────────────────────────
const experiences = [
  {
    id: 1,
    company:   'Keenly Digital',
    role:      'Web Developer',
    period:    '2024 — Present',
    type:      'Full-time',
    // bullet points describing your responsibilities
    points: [
      'Built and maintained client websites using React, Laravel, and WordPress.',
      'Designed REST APIs consumed by React frontends and mobile apps.',
      'Optimized site performance, reducing load times by 40% on average.',
      'Collaborated directly with designers and project managers in an agile team.',
    ],
  },
  {
    id: 2,
    company:   'Exact Soft',
    role:      'Web Developer',
    period:    '2020 — 2024',
    type:      'Full-time',
    points: [
      'Developed full-stack web apps using PHP, Laravel, MySQL, and Vue.js.',
      'Integrated third-party APIs including payment gateways and SMS providers.',
      'Maintained and extended legacy codebases with improved test coverage.',
      'Mentored two junior developers and conducted code reviews.',
    ],
  },
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <p className="section-eyebrow">My journey</p>
        <h2 className="section-title">Work Experience</h2>
        <div className="title-line" />

        {/* Timeline container */}
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline__item" key={exp.id}>

              {/* Dot on the timeline line */}
              <div className="timeline__dot" />

              {/* Card content */}
              <div className="timeline__card card">
                <div className="timeline__header">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company gradient-text">{exp.company}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{exp.period}</span>
                    <span className="timeline__badge">{exp.type}</span>
                  </div>
                </div>

                <ul className="timeline__points">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
