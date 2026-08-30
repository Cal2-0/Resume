import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/scenes/footer.css';
import { profile } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ onTransmitClick }) => {
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed .footer-reveal-text span animation to fix missing text glitch

      gsap.from('.footer-signature', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 60%',
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleTransmitClick = (e) => {
    e.preventDefault();
    if (onTransmitClick) onTransmitClick();
  };

  return (
    <footer className="bureau-footer" id="contact" ref={footerRef}>
      <div className="footer-container bureau-container">
        
        {/* Section Label */}
        <div className="footer-section-label">
          <span>CONTACT</span>
          <span>END OF FILE</span>
        </div>

        {/* Main CTA */}
        <div className="footer-main">
          <h2 className="footer-reveal-text">
            {"INITIATE CONTACT".split('').map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
            <span style={{ 
              display: 'inline-block', 
              width: '0.6em', 
              height: '1em', 
              background: 'var(--color-gold)', 
              marginLeft: '8px', 
              animation: 'terminalBlink 1s step-end infinite',
              verticalAlign: 'text-bottom'
            }} />
            <style>{`@keyframes terminalBlink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }`}</style>
          </h2>

          <p className="footer-blurb">
            For research collaborations, internship discussions,<br/>
            security work, or if you just want to talk about machines.
          </p>

          <a 
            href="#" 
            className="footer-email-btn"
            onClick={handleTransmitClick}
          >
            GET IN TOUCH <span className="arrow">↗</span>
          </a>
        </div>

        {/* Signature Block */}
        <div className="footer-signature">
          <div className="signature-grid">
            <div className="signature-col">
              <span className="footer-label">SUBJECT</span>
              <span className="footer-val signature-name">CALVIN JUDE D'SOUZA</span>
            </div>
            <div className="signature-col">
              <span className="footer-label">CLEARANCE</span>
              <span className="footer-val">{profile.currentRole.organization}</span>
            </div>
            <div className="signature-col">
              <span className="footer-label">SIGNAL CHANNELS</span>
              <div className="footer-links">
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
                <a href={profile.contact.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
                <a href={`mailto:${profile.contact.email}`}>EMAIL ↗</a>
                <a href={`tel:${profile.contact.phone}`}>PHONE ↗</a>
              </div>
            </div>
            <div className="signature-col">
              <span className="footer-label">STATUS</span>
              <span className="footer-val footer-status-active">
                <span className="status-dot" /> ACTIVE DEPLOYMENT
              </span>
            </div>
          </div>

          <div className="signature-rule" />

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <button 
              onClick={() => document.body.classList.toggle('audit-mode')}
              style={{
                background: 'transparent',
                border: '1px solid var(--color-gold)',
                color: 'var(--color-gold)',
                padding: '5px 15px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                cursor: 'pointer',
                opacity: 0.5,
                letterSpacing: '2px'
              }}
              onMouseEnter={(e) => e.target.style.opacity = 1}
              onMouseLeave={(e) => e.target.style.opacity = 0.5}
            >
              [ RUN SYSTEM AUDIT ]
            </button>
          </div>

          <div className="signature-bottom">
            <span className="signature-copyright">
              © {new Date().getFullYear()} THE BUREAU — DSOUZA 001
            </span>
            <span className="signature-built">
              BUILT WITH OBSESSION & RESEARCH
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
