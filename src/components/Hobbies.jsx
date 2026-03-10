import React from 'react';
import hiking from '../assets/hiking.jpg';
import img5556 from '../assets/img5556.jpg';
import food from '../assets/sushi.png';
import coffee from '../assets/coffee.png';
import './Hobbies.css';

const hobbies = [
  { photo: hiking,  label: 'Hiking' },
  { photo: img5556, label: 'Exploring' },
  { photo: food, label: 'Eating Good Food' },
  { photo: coffee, label: 'Hangouts with Friends' }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="hobbies-section">
      <div className="inner">
        <span className="section-label reveal">Beyond Campus</span>
        <h2 className="section-title reveal d1">My Hobbies!</h2>
        <p className="hobbies-sub reveal d2">
        </p>

        <div className="hobbies-strip reveal d3">
          {hobbies.map((h, i) => (
            <div className="hobby-card" key={i} style={{ '--delay': `${i * 0.06}s` }}>
              <img src={h.photo} alt={h.label} />
              <div className="hobby-lbl">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
