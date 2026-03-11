import React, { useRef, useState } from 'react';
import CircularGallery from '../components/CicularGallery';
import swe1 from '../assets/swe1.jpg';
import swe2 from '../assets/swe2.jpg';
import swe3 from '../assets/swe3.jpg';
import dsc1 from '../assets/dsc1.jpg';
import dsc2 from '../assets/dsc2.jpg';
import dsc3 from '../assets/dsc3.jpg';
import spartan from '../assets/spartan.jpg';
import spartan2 from '../assets/spartan2.jpg';
import img4361 from '../assets/img4361.jpg';
import img4362 from '../assets/img4362.jpg';
import img4363 from '../assets/img4363.jpg';
import './Involvement.css';

const items = [
  { image: dsc1,     org: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'] },
  { image: dsc2,     org: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'] },
  { image: dsc3, org: 'Responsible Computing Club', roles: ['Mozilla & Firefox Ambassador', 'VP of External Affairs', 'Community Engagement Lead'], objectPosition: 'center  80%' },
  ///{ image: swe1,     org: 'Society of Women Engineers',  roles: ['Alumni Relations Committee Chair', 'Mentorship Committee Chair', 'SWE++ Program Volunteer'] },
  //{ image: swe2,     org: 'Society of Women Engineers',  roles: ['Alumni Relations Committee Chair', 'Mentorship Committee Chair', 'SWE++ Program Volunteer'] },
  //{ image: swe3,     org: 'Society of Women Engineers',  roles: ['Alumni Relations Committee Chair', 'Mentorship Committee Chair', 'SWE++ Program Volunteer'] },
  { image: spartan,  org: 'Spartan Racing Formula SAE',  roles: ['Business Team Intern'] },
  { image: spartan2, org: 'Spartan Racing Formula SAE',  roles: ['Business Team Intern'] },
];

export default function Involvement() {
  return (
    <section id="involvement" className="involvement-section">
      <div className="inner">
        <span className="section-label reveal">On Campus</span>
        <h2 className="section-title reveal d1">Involvement</h2>
      </div>
      <CircularGallery items={items} />
    </section>
  );
}