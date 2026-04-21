// ============================================================
// components/Contact.js
// Contact section with a simple form (no backend needed for
// display — wire up EmailJS or Formspree for real sending).
// Edit the info objects to change email, location, etc.
// ============================================================

import React, { useState } from 'react';
import './Contact.css';

// Contact info items shown on the left side
const contactInfo = [
  { icon: '📧', label: 'Email',    value: 'hamzaaqeel1211@gmail.com' },
  { icon: '🌍', label: 'Location', value: 'Pakistan'                  },
  { icon: '💼', label: 'GitHub',   value: 'github.com/hamzaaqeel1211', link: 'https://github.com/hamzaaqeel1211' },
  { icon: '🕐', label: 'Available',value: 'Open to opportunities'     },
];

function Contact() {
  // Track form field values in state
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Track submission state ('idle' | 'sending' | 'sent')
  const [status, setStatus] = useState('idle');

  // Update state when any input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // Replace this with a real email service (EmailJS, Formspree, etc.)
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate a 1.5 s API call
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="title-line" />

        <div className="contact__grid">
          {/* Left: contact info */}
          <div className="contact__info">
            <p className="contact__intro">
              Have a project in mind, want to collaborate, or just say hi?
              Feel free to reach out — I'll get back to you within 24 hours.
            </p>

            {contactInfo.map(item => (
              <div className="contact__info-item" key={item.label}>
                <span className="contact__info-icon">{item.icon}</span>
                <div>
                  <p className="contact__info-label">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                       className="contact__info-value contact__info-link">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contact__info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: contact form */}
          <form className="contact__form card" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email" name="email" type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle'    && 'Send Message →'}
              {status === 'sending' && 'Sending…'}
              {status === 'sent'    && '✓ Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
