// ============================================================
// components/Hero.js
// Hero / landing section with TYPING ANIMATION.
//
// HOW THE TYPING ANIMATION WORKS:
// 1. `words` array holds all the phrases to cycle through.
// 2. `wordIndex` tracks which word we are currently on.
// 3. `charIndex` tracks how many characters have been typed.
// 4. `isDeleting` is true when we are erasing characters.
// 5. A useEffect runs a setTimeout on every state change,
//    adding or removing one character at a time.
//
// TO EDIT: change the `words` array to use your own phrases.
// TO CHANGE SPEED: adjust TYPING_SPEED and DELETING_SPEED.
// ============================================================

import React, { useState, useEffect } from 'react';
import './Hero.css';

// ── Phrases the animation cycles through ───────────────────
const words = [
  'Full-Stack Developer',
  'React Developer',
  'Frontend Developer',
  'Backend Developer',
  'JavaScript Enthusiast',
];

// ── Animation speed constants (milliseconds) ───────────────
const TYPING_SPEED  = 90;   // ms per character while typing
const DELETING_SPEED = 50;  // ms per character while deleting
const PAUSE_END     = 1800; // ms to pause when word is fully typed
const PAUSE_START   = 400;  // ms to pause before typing next word

function Hero() {
  const [displayText, setDisplayText] = useState(''); // what's shown on screen
  const [wordIndex,   setWordIndex]   = useState(0);  // current word index
  const [charIndex,   setCharIndex]   = useState(0);  // current character index
  const [isDeleting,  setIsDeleting]  = useState(false); // typing or deleting?

  useEffect(() => {
    const currentWord = words[wordIndex]; // get the current full word

    // Decide delay based on state
    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    // Extra pause at the end of a fully typed word
    if (!isDeleting && charIndex === currentWord.length) {
      delay = PAUSE_END;
    }
    // Brief pause before starting to type the next word
    if (isDeleting && charIndex === 0) {
      delay = PAUSE_START;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // ── TYPING: add one more character ──
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        // If the full word is typed, start deleting
        if (charIndex + 1 === currentWord.length) {
          setIsDeleting(true);
        }
      } else {
        // ── DELETING: remove one character ──
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        // If fully deleted, move to the next word
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length); // loop back to 0
        }
      }
    }, delay);

    return () => clearTimeout(timer); // cleanup on re-render
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="hero" id="hero">
      {/* Decorative background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__content">
        {/* Left: text content */}
        <div className="hero__text fade-in">
          <p className="hero__greeting">👋 Hello, I'm</p>

          {/* Main name */}
          <h1 className="hero__name">Hamza Aqeel</h1>

          {/* Animated typing line */}
          <div className="hero__typing-wrapper">
            <span className="hero__typing-prefix">I'm a </span>
            {/*
              displayText changes on every timer tick.
              The cursor blinks via CSS animation on .hero__cursor.
            */}
            <span className="hero__typing-text gradient-text">{displayText}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </div>

          {/* Short bio */}
          <p className="hero__bio">
            Passionate about building elegant, performant web applications
            from pixel-perfect frontends to robust APIs and databases.
          </p>

          {/* CTA buttons */}
          <div className="hero__actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Hire Me</a>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            <a
              href="https://github.com/hamzaaqeel1211"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right: coding illustration (SVG inline — no external image needed) */}
        <div className="hero__visual fade-in-delay-2">
          <div className="hero__code-card">
            {/* Fake browser chrome */}
            <div className="hero__code-dots">
              <span style={{background:'#ff5f57'}} />
              <span style={{background:'#febc2e'}} />
              <span style={{background:'#28c840'}} />
            </div>
            {/* Fake code lines */}
            <pre className="hero__code-block">
              <code>
<span className="c-keyword">const</span> <span className="c-var">developer</span> = {'{'}{'\n'}
{'  '}<span className="c-prop">name</span>: <span className="c-string">"Hamza Aqeel"</span>,{'\n'}
{'  '}<span className="c-prop">role</span>: <span className="c-string">"Full-Stack Dev"</span>,{'\n'}
{'  '}<span className="c-prop">stack</span>: [{'\n'}
{'    '}<span className="c-string">"React"</span>, <span className="c-string">"Node.js"</span>,{'\n'}
{'    '}<span className="c-string">"Laravel"</span>, <span className="c-string">"MongoDB"</span>,{'\n'}
{'  '}],{'\n'}
{'  '}<span className="c-prop">available</span>: <span className="c-keyword">true</span>,{'\n'}
{'}'};{'\n\n'}
<span className="c-comment">// Ready to build something awesome?</span>{'\n'}
<span className="c-keyword">export default</span> developer;
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="hero__scroll-hint">
        <span>scroll down</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
