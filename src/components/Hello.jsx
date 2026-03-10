import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import LiquidEther from './LiquidEther';
import './Hello.css';

export default function Hello() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hello" className="hello-section">

      {/* LiquidEther fills the whole section */}
      <div className="hello-liquid">
        <LiquidEther
          colors={['#a8d5b5', '#d6eedf', '#a8c8e8', '#ffffff', '#2d8a57']}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.5}
          mouseForce={25}
          cursorSize={120}
          resolution={0.5}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content always on top */}
      <div className={`hello-content ${visible ? 'hello-visible' : ''}`}>

        <div className="hello-logo-wrap">
          <img src={logo} alt="Shannon For A.S. Vice President" className="hello-logo" />
        </div>

        <div className="hello-pills">
          <span className="pill">Advocacy</span>
          <span className="pill">Transparency</span>
          <span className="pill">Accessibility</span>
        </div>

        <div className="hello-cta">
          <a href="#about" className="btn-primary">Meet Shannon</a>
          <a href="#letstalk" className="btn-outline">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}