// ============================================================
// components/Navbar.js
// Fixed navigation bar with smooth-scroll anchor links.
// Becomes opaque background after user scrolls 50px.
// Edit navLinks array to add/remove menu items.
// ============================================================

import React, { useState, useEffect } from 'react';
import './Navbar.css';

// ── Edit this array to change navigation links ──────────────
const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);  // mobile menu toggle
  const [scrolled, setScrolled]   = useState(false);  // solid bg on scroll

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll); // cleanup
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">

        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          &lt;<span className="gradient-text">Hamza</span> /&gt;
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
          <li>
            <a href="/Hamza_Aqeel_Resume.pdf" download className="btn-primary navbar__cta">
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="/Hamza_Aqeel_Resume.pdf" download className="btn-primary" onClick={closeMenu}>
          Download Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
