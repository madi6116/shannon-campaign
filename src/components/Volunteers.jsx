import React, { useState } from 'react';
import madison from '../assets/madi.jpg';
import melanie from '../assets/mel.jpg';
import kara from '../assets/kara.png';
import './Volunteers.css';

const volunteers = [
  {
    name: 'Madison Ammirati',
    title: 'Chief Technology Officer', 
    photo: madison,
    linkedin: 'https://linkedin.com/in/madison-ammirati', 
    color: 'var(--gd)',
  },
  {
    name: 'Melanie Regalado Hernandez',
    title: 'Chief Marketing Officer',   
    photo: melanie,
    linkedin: 'https://linkedin.com/in/melanie-regalado-hernandez', 
    color: 'var(--bd)',
  },
  {
    name: 'Kara Gonzales',
    title: 'Chief Grahpic Designer',
    photo: kara,
    linkedin: 'https://www.linkedin.com/in/kara-gonzales-85837029b/',
    color: 'var(--rd)',
  }
];

export default function Volunteers() {
  return (
    <section id="volunteers" className="volunteers-section">
      <div className="inner">
        <span className="section-label reveal">The People Behind the Campaign</span>
        <h2 className="section-title reveal d1">Campaign Volunteers</h2>

        <div className="vol-bubbles">
          {volunteers.map((v, i) => (
            <VolBubble key={v.name} v={v} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VolBubble({ v, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={v.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`vol-bubble reveal d${Math.round(delay * 10) + 1}`}
      style={{ '--accent': v.color, animationDelay: `${delay}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo circle */}
      <div className="vol-photo-wrap">
        <img src={v.photo} alt={v.name} className="vol-photo" />
        <div className="vol-overlay">
          <span className="vol-linkedin-icon">in</span>
          <span className="vol-connect">View LinkedIn</span>
        </div>
      </div>

      {/* Info below bubble */}
      <div className="vol-info">
        <div className="vol-name">{v.name}</div>
        <div className="vol-title">{v.title}</div>
      </div>
    </a>
  );
}
