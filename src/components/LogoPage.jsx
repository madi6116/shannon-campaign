import React from 'react';
import './LogoPage.css';

export default function LogoPage() {
  return (
    <div className="logo-page-wrapper">
      {/* This stays sticky while next sections scroll over it */}
      <div className="logo-sticky">
        <div className="logo-blob lb1" />
        <div className="logo-blob lb2" />

        <div className="logo-content">
          <h2 className="logo-wordmark">Shannon</h2>
          <p className="logo-sub">For A.S. Vice President</p>
          <div className="logo-tagline-row">
            <span>Advocacy</span>
            <span className="logo-dot">·</span>
            <span>Transparency</span>
            <span className="logo-dot">·</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </div>
  );
}
