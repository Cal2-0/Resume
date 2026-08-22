import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/scenes/footer.css';
import { profile } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-reveal-text span', {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        }
      });

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

  const handleEmailClick = () => {
    navigator.clipboard.writeText("calvinja320@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bureau-footer" id="contact" ref={footerRef}>
      <div className="footer-container bureau-container">
        
        {/* Section Label */}
        <div className="footer-section-label">
          <span>08 — CORRESPONDENCE</span>
          <span>END OF FILE</span>
        </div>

        {/* Main CTA */}
        <div className="footer-main">
          <h2 className="footer-reveal-text">
            {"INITIATE CONTACT".split('').map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </h2>

          <p className="footer-blurb">
            For research collaborations, internship discussions,<br/>
            security work, or if you just want to talk about machines.
          </p>

          <a 
            href="mailto:calvinja320@gmail.com?subject=Incoming%20Transmission%20from%20The%20Bureau&body=Hey%20Calvin%2C%20loved%20the%20portfolio.%20I%20wanted%20to%20connect%20regarding..." 
            className="footer-email-btn"
            onClick={handleEmailClick}
          >
            {copied ? "COPIED TO CLIPBOARD ✓" : "TRANSMIT SIGNAL"} <span className="arrow" style={{ opacity: copied ? 0 : 1 }}>↗</span>
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
