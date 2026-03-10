import React, { useState } from 'react';
import './Priorities.css';

const cards = [
  {
    num: '01',
    title: 'Advocacy',
    body: `With the responsibility of the Vice President, know that I will advocate for our students, our communities, and our Registered Student Organizations, making sure you are supported and heard when facing your biggest hurdles as individuals who have come here today to SJSU.`,
  },
  {
    num: '02',
    title: 'Transparency',
    body: `This position requires that I adjust and amend the agendas of the Association Meetings as Chief Administrative Officer, as well as the Chair of the Board of Directors. My role will allow me to provide transparency and accountability to students in terms of the agendas and legislation being voted on, which impact all students at SJSU.`,
  },
  {
    num: '03',
    title: 'Accessibility',
    body: `I am committed to ensuring the accessibility of all resources to students, including Registered Student Organizations. In addition, I will work to increase the access of opportunities and research to all of our communities, prioritizing our students.`,
  },
];

const TAB_HEIGHT = 58;
const BODY_HEIGHT = 300;

export default function Priorities() {
  const [active, setActive] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('idle');

  const totalCards = cards.length;
  const stackHeight = (totalCards * TAB_HEIGHT) + BODY_HEIGHT;

  const getTransform = (i) => {
    if (i === active) return `translateY(${(totalCards - 1) * TAB_HEIGHT}px)`;
    const slot = i < active ? i : i - 1;
    return `translateY(${slot * TAB_HEIGHT}px)`;
  };

  const getZ = (i) => {
    if (i === active) return 20;
    return i < active ? 10 + i : 10 - i;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    setStatus('sending');
    const url = `https://docs.google.com/forms/d/e/1FAIpQLScR_tYDr6dbhZoXNQ58cQp9YEY-5uFoutn4CKDfiWZsWsJazA/formResponse?entry.1086156925=${encodeURIComponent(feedback)}&submit=Submit`;
    fetch(url, { method: 'POST', mode: 'no-cors' })
      .then(() => {
        setStatus('success');
        setFeedback('');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section id="priorities" className="priorities-section">
      <div className="inner">
        <span className="section-label reveal">What I Stand For</span>
        <h2 className="section-title reveal d1">Focus &amp; Priorities</h2>

        <div className="pri-stack reveal d2" style={{ height: `${stackHeight}px` }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`pri-page ${active === i ? 'active' : ''}`}
              style={{ transform: getTransform(i), zIndex: getZ(i) }}
            >
              <div className="pri-tab" onClick={() => setActive(i)}>
                <span className="pri-tab-num">{card.num}</span>
                <span className="pri-tab-title">{card.title}</span>
                {active !== i && <span className="pri-tab-arrow">→</span>}
              </div>
              <div className="pri-body">
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pri-feedback reveal d3">
          <h3 className="feedback-title">Share Your Feedback</h3>
          <p className="feedback-sub">What issues matter most to you? Shannon wants to hear from you.</p>
          {status === 'success' ? (
            <div className="feedback-thanks">Thank you for your input! Shannon will take this to heart. 💚</div>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit}>
              <textarea
                className="feedback-textarea"
                placeholder="Write your thoughts, concerns, or ideas here…"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              {status === 'error' && (
                <p className="feedback-error">Something went wrong. Please try again.</p>
              )}
              <button type="submit" className="btn-primary feedback-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Feedback'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}