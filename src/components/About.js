// ============================================================
// components/About.js
// "About Me" section — short bio + quick-stat cards.
// Edit the paragraphs and stats array below to personalise.
// ============================================================

import React from 'react';
import './About.css';

// Quick stat cards shown in a row
// Edit label and value to change the numbers/text
const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '2',  label: 'Companies Worked' },
  { value: '10+', label: 'Technologies' },
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">

        {/* Section heading */}
        <p className="section-eyebrow">Get to know me</p>
        <h2 className="section-title">About Me</h2>
        <div className="title-line" />

        <div className="about__grid">
          {/* Left: bio text */}
          <div className="about__text fade-in">
            <p>
              Hi! I'm <strong>Hamza Aqeel</strong>, a Full-Stack Web Developer based in Pakistan
              with over <strong>4 years of professional experience</strong> turning ideas into
              fast, reliable, and user-friendly web applications.
            </p>
            <p>
              I hold a <strong>BS in Software Engineering</strong> from Virtual University and
              have worked across diverse industries — from digital agencies to software product
              companies — building everything from landing pages to full-scale SaaS platforms.
            </p>
            <p>
              Whether it's crafting pixel-perfect UIs in React, designing REST APIs with Node.js
              &amp; Laravel, or wiring up databases in MongoDB or MySQL, I bring a holistic
              perspective to every project I touch.
            </p>
            <p>
              When I'm not coding, I love exploring new frameworks, contributing to open-source,
              and mentoring aspiring developers.
            </p>

            <a href="#contact" className="btn-primary about__cta">
              Let's Work Together →
            </a>
          </div>

          {/* Right: stats grid */}
          <div className="about__stats">
            {stats.map((stat) => (
              <div className="about__stat-card card" key={stat.label}>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
