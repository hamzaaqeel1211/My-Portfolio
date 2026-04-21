// ============================================================
// components/Skills.js
// Displays skills grouped by category.
// To add a skill: find the right category below and add a
// new { name: "Skill Name" } entry to its `items` array.
// ============================================================

import React from 'react';
import './Skills.css';

// ── All skill categories and their items ──────────────────
const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'HTML5'       },
      { name: 'CSS3'        },
      { name: 'Bootstrap'   },
      { name: 'Tailwind CSS'},
      { name: 'JavaScript'  },
      { name: 'ReactJS'     },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js'   },
      { name: 'MongoDB'   },
      { name: 'Laravel'   },
      { name: 'PHP'       },
      { name: 'MySQL'     },
      { name: 'Firebase'  },
      { name: 'REST APIs' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    items: [
      { name: 'Git'        },
      { name: 'GitHub'     },
      { name: 'WordPress'  },
      { name: 'Elementor'  },
      { name: 'Vercel'     },
    ],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="section-eyebrow">What I use</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="title-line" />

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div className="skills__category card" key={cat.category}>
              {/* Category header */}
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{cat.icon}</span>
                <h3 className="skills__cat-title">{cat.category}</h3>
              </div>

              {/* Skill tags */}
              <div className="skills__tags">
                {cat.items.map((skill) => (
                  <span className="skills__tag" key={skill.name}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
