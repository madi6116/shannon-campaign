import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Nav.css';

const links = [
  { href: '#about',       label: 'About' },
  { href: '#volunteers',  label: 'Team' },
  { href: '#involvement', label: 'Involvement' },
  { href: '#letter',      label: 'Letter' },
  { href: '#priorities',  label: 'Priorities' },
  { href: '#hobbies',     label: 'Hobbies' },
  { href: '#letstalk',    label: "Let's Talk" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
    <a href="#hello" className="nav-logo">
      <img src={logo} alt="Shannon For A.S. Vice President" />
    </a>

    <div className={`bubble-bar ${open ? 'open' : ''}`}>
      {links.map((l, i) => (
        <a
          key={l.href}
          href={l.href}
          className="bubble-item"
          style={{ animationDelay: `${i * 0.05}s` }}
          onClick={() => setOpen(false)}
        >
          {l.label}
        </a>
      ))}
    </div>

    <button
      className={`burger ${open ? 'open' : ''}`}
      onClick={() => setOpen(!open)}
      aria-label="Menu"
    >
      <span /><span /><span />
    </button>
  </nav>
);
}