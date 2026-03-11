import React, { useState } from 'react';
import CircularGallery from '../components/CicularGallery';
import dsc1 from '../assets/dsc1.jpg';
import dsc2 from '../assets/dsc2.jpg';
import dsc3 from '../assets/dsc3.jpg';
import spartan from '../assets/spartan.jpg';
import spartan2 from '../assets/spartan2.jpg';
import './Involvement.css';

const items = [
  { image: dsc1,     text: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'] },
  { image: dsc2,     text: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'] },
  { image: dsc3,     text: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'] },
  { image: spartan,  text: 'Spartan Racing Formula SAE', roles: ['Business Team Intern'] },
  { image: spartan2, text: 'Spartan Racing Formula SAE', roles: ['Business Team Intern'] },
];

export default function Involvement() {
  const [tooltip, setTooltip] = useState(null); // { text, roles, x, y }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // find which item is roughly under cursor based on x position
    const relX = x / rect.width;
    const index = Math.floor(relX * items.length) % items.length;
    const item = items[Math.max(0, Math.min(index, items.length - 1))];
    setTooltip({ text: item.text, roles: item.roles, x, y });
  };

  const handleMouseLeave = () => setTooltip(null);

  return (
    <section id="involvement" className="involvement-section">
      <div className="inner">
        <span className="section-label reveal">On Campus</span>
        <h2 className="section-title reveal d1">Involvement</h2>
      </div>

      <div
        className="gallery-wrapper"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <CircularGallery
          items={items}
          bend={3}
          textColor="#2d8a57"
          borderRadius={0.05}
          scrollSpeed={2}
        />

        {tooltip && (
          <div
            className="gallery-tooltip"
            style={{ left: tooltip.x + 20, top: tooltip.y - 20 }}
          >
            <div className="gallery-tooltip-title">{tooltip.text}</div>
            {tooltip.roles && (
              <ul className="gallery-tooltip-roles">
                {tooltip.roles.map((r) => <li key={r}>{r}</li>)}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}