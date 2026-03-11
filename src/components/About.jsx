import React from 'react';
import headshot from '../assets/Headshot_26.JPG';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="inner">
        <div className="about-grid">
          <div className="about-img-wrap reveal">
            <div className="about-img-frame">
              <img src={headshot} alt="Shannon Lo" />
            </div>
          </div>

          <div className="about-text">
            <span className="section-label reveal">About Shannon Lo</span>
            <h2 className="section-title reveal d1">Hello, I'm Shannon</h2>

            <p className="reveal d1">
              As a third-year Taiwanese international student at SJSU, majoring in Data Science and minoring in Interdisciplinary Humanities, I’m dedicated to listening to the voices of our students and making sure that this reflects in the agendas of the meetings.
            </p>

            <p className="reveal d2">
              Being involved on campus has allowed me to deeply understand the problems that need to be addressed on our campus which impact our diverse student body, but there is still more for me to learn, and I want to implement that positive change on our campus. 


            </p>

            <div className="about-stats reveal d3">
              <div className="stat">
                <span className="stat-num">3rd</span>
                <span className="stat-lbl">Year Student</span>
              </div>
              <div className="stat">
                <span className="stat-num">DS</span>
                <span className="stat-lbl">Data Science</span>
              </div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-lbl">Orgs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
