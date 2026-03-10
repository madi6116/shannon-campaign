import React from 'react';
import logo from '../assets/logo.png';
import './LetsTalk.css';

export default function LetsTalk() {
  return (
    <section id="letstalk" className="letstalk-section">
      <div className="letstalk-inner">
        <span className="section-label lt-label">Reach Out</span>
        <h2 className="lt-title">Let's Talk</h2>
        <p className="lt-sub">
          Want to voice an issue, endorse Shannon, or just say hi? She wants to hear from you.
        </p>

        <div className="lt-links">
          <a
            href="mailto:yuhsin.lo@sjsu.edu"
            className="lt-link lt-email"
          >
            <span className="lt-link-icon">✉</span>
            <span className="lt-link-text">
              <span className="lt-link-label">Email</span>
              <span className="lt-link-value">yuhsin.lo@sjsu.edu</span>
            </span>
          </a>

          <a
            href="https://instagram.com/sshannon.lo"
            target="_blank"
            rel="noopener noreferrer"
            className="lt-link lt-instagram"
          >
            <span className="lt-link-icon">◎</span>
            <span className="lt-link-text">
              <span className="lt-link-label">Instagram</span>
              <span className="lt-link-value">@sshannon.lo</span>
            </span>
          </a>
        </div>

        <img src={logo} alt="Shannon" className="lt-footer-logo" />
        <p className="lt-footer-sub">
          For A.S. Vice President · SJSU Associated Students · 2026–2027
        </p>
      </div>
    </section>
  );
}
