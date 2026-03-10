import React, { useEffect, useRef } from 'react';
import './Endorsements.css';

// ── Update this list when you get endorsements ──
const endorsements = [
  //{ name: 'Phases & Spaces Inc.', icon: '⧉' },
];

export default function Endorsements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const bubbles = Array.from(container.querySelectorAll('.end-bubble'));

    // Give each bubble a random starting position and velocity
    const state = bubbles.map((el, i) => {
      const angle = (i / bubbles.length) * Math.PI * 2;
      const r = 120 + Math.random() * 80;
      return {
        el,
        x: 50 + Math.cos(angle) * 30,   // % of container
        y: 50 + Math.sin(angle) * 30,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
      };
    });

    let raf;
    const animate = () => {
      const W = container.offsetWidth;
      const H = container.offsetHeight;
      state.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        // Bounce off edges (5%–95%)
        if (s.x < 5 || s.x > 95) s.vx *= -1;
        if (s.y < 5 || s.y > 95) s.vy *= -1;
        s.el.style.left = `${s.x}%`;
        s.el.style.top  = `${s.y}%`;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="endorsements" className="endorsements-section">
      <div className="inner">
        <span className="section-label reveal">Community Support</span>
        <h2 className="section-title reveal d1">Endorsements</h2>
        <p className="end-note reveal d2">
          More endorsements coming soon — reach out to add yours!
        </p>
      </div>

      <div className="end-arena" ref={containerRef}>
        {endorsements.map((e, i) => (
          <div
            key={e.name}
            className="end-bubble"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <span className="end-icon">{e.icon}</span>
            <span className="end-name">{e.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
