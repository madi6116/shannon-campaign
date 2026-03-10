import React, { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hello from './components/Hello';
import About from './components/About';
import Volunteers from './components/Volunteers';
import Endorsements from './components/Endorsements';
import Involvement from './components/Involvement';
import Letter from './components/Letter';
import Priorities from './components/Priorities';
import Hobbies from './components/Hobbies';
import LetsTalk from './components/LetsTalk';
import './App.css';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    const update = () =>
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    update();
    const mo = new MutationObserver(update);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <div className="app">
      <Nav />
      <Hello />
      <About />
      <Volunteers />
      <Endorsements />
      <Involvement />
      <Letter />
      <Priorities />
      <Hobbies />
      <LetsTalk />
    </div>
  );
}
