// ============================================================
// App.js — The ROOT component of the entire portfolio website
// This file imports and assembles all sections in order.
// To reorder sections, just move the component tags below.
// ============================================================

import React from 'react';

// Import all section components
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

// Import the global stylesheet
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation bar - fixed at top of every page */}
      <Navbar />

      {/* All page sections rendered top to bottom */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
