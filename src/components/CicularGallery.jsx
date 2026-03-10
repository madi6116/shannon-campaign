import React, { useState } from 'react';
import './CircularGallery.css';

export default function CircularGallery({ items }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const count = items.length;

  const go = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(prev => (prev + dir + count) % count);
      setAnimating(false);
      setDirection(null);
    }, 350);
  };

  const item = items[current];

  return (
    <div className="cg-root">
      <button className="cg-arrow" onClick={() => go(-1)}>‹</button>

      <div className="cg-stage">
        <div
          className={`cg-card ${animating ? (direction === 1 ? 'exit-left' : 'exit-right') : 'enter'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={item.image} alt={item.org} />
          <div className={`cg-overlay ${hovered ? 'visible' : ''}`}>
            <div className="cg-org">{item.org}</div>
            <div className="cg-divider" />
            <div className="cg-roles">
              {item.roles.map((r) => <span key={r}>{r}</span>)}
            </div>
          </div>
        </div>

        <div className="cg-counter">{current + 1} / {count}</div>
      </div>

      <button className="cg-arrow" onClick={() => go(1)}>›</button>
    </div>
  );
}