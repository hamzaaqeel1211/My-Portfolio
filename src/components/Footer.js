// ============================================================
// components/Footer.js
// Simple footer with logo, copyright year, and quick links.
// Year is calculated dynamically so it never goes out of date.
// ============================================================

import React from 'react';
import './Footer.css';

function Footer() {
  // Automatically get the current year — no need to update manually
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Logo */}
        <a href="#hero" className="footer__logo">
          &lt;<span className="gradient-text">Hamza</span> /&gt;
        </a>

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Hamza Aqeel. Built with React &amp; ❤️
        </p>

        {/* Quick links */}
        <div className="footer__links">
          <a
            href="https://github.com/hamzaaqeel1211"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#contact">Contact</a>
          <a href="/Hamza_Aqeel_Resume.pdf" download>Resume</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
