import React, { useEffect, useRef, useState } from 'react';
import Grainient from './Grainient';
import logo from '../assets/logo.png';
import './Letter.css';

export default function Letter() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      // progress 0→1 as the section scrolls through viewport
      const p = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height)));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="letter" className="letter-section" ref={ref}>
      <div className="inner">
        <span className="section-label reveal">Candidate Biography</span>
        <h2 className="section-title reveal d1">My Letter To You</h2>

        <div className="letter-card reveal d2">
  <div className="letter-Grainient">
    <Grainient
      color1="#d6eedf"
      color2="#ffffff"
      color3="#a8c8e8"
      grainAmount={0.03}
      warpStrength={0.5}
      warpFrequency={3.0}
      timeSpeed={0.12}
      contrast={1.05}
      saturation={0.7}
      zoom={0.8}
    />
  </div>

          {/* Decorative quote mark */}
          <span className="letter-quote-mark">"</span>

          <div className="letter-body">
            <p>Hello All!</p>

            <p>
             I’m Shannon Lo and I’m running for Associated Student Board of Directors as your Vice President. I believe what the Board does should directly reflect what students need most, from campus resources and Student Organizations, to research opportunities and community support.
            </p>

            <p>
              As Vice President, I’ll ensure our board’s agendas and priorities reflect SJSU students’ real needs, giving you a meaningful voice in how our community is shaped and governed. I’ve seen firsthand how strong student leadership transforms campus life, from academic support to protecting the multicultural centers that make SJSU feel like home. <b>Every student pays tuition; every student deserves a seat at the table.</b>
            </p>

            <p>
              The responsibility of Vice President is to report on and advocate for faculty retention, tenure, and promotion policies because who teaches you and how they’re supported directly shapes the quality of your education. I’m committed to amplifying voices that are often overlooked in board decisions, particularly the interests of students who have been, and continue to be, marginalized or low income. When decisions happen behind closed doors without students, resources and policies don’t address real needs.
            </p>

            <p>
              My approach is straightforward: I’ll thoroughly review every proposal, listen to what students actually need, and work to drive initiatives that improve everyday life for you. Whether it’s expanding health & wellness services, supporting student organizations, or funding innovation and research by my passionate peers, the decision should always center SJSU student voices.
            </p>

            <p>
              SJSU’s community represents an incredible diversity of backgrounds & perspectives. Our leadership should reflect that richness by advocating for the varied needs across our campus. I am running to bring transparency & accessibility, prioritizing student-driven change over institutional agendas. 
            </p>

            <p><b>Trust that I will fight for you &amp; be your voice for positive change.</b></p>

           <div className="letter-sig">
  <p>Sincerely,</p>
  <img src={logo} alt="Shannon Lo" className="letter-sig-logo" />
</div>

          {/* Scroll progress bar inside card */}
          <div
            className="letter-progress-bar"
            style={{ width: `${progress * 100}%` }}
          />
          </div>
        </div>
      </div>
    </section>
  );
}
