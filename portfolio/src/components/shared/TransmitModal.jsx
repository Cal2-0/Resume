import React, { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import '../../styles/components/transmit-modal.css';

const TransmitModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const contactText = `━━━━━━━━━━━━━━━━━━━━━
 CALVIN JUDE D'SOUZA
 Cybersecurity Engineer
━━━━━━━━━━━━━━━━━━━━━

📧  ${profile.contact.email}
📧  ${profile.contact.email2}
📱  ${profile.contact.phone}

🔗  LinkedIn: ${profile.contact.linkedin}
💻  GitHub: ${profile.contact.github}
📸  Instagram: ${profile.contact.instagram}

🎓  ${profile.education.degree}
     ${profile.education.institution}
     CGPA: ${profile.education.cgpa}

🎖️  ${profile.currentRole.title}
     ${profile.currentRole.organization}

━━━━━━━━━━━━━━━━━━━━━`;

  const handleCopy = () => {
    navigator.clipboard.writeText(contactText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent("Let's Connect — From The Bureau");
  const mailtoBody = encodeURIComponent(
    `Hey Calvin,\n\nThanks for connecting! I came across your portfolio and loved your work.\n\nI'd love to chat about potential collaborations, opportunities, or just talk about cybersecurity and AI.\n\nLooking forward to hearing from you!\n\nBest regards`
  );

  if (!isOpen) return null;

  return (
    <div className="transmit-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="transmit-card" ref={cardRef}>
        
        {/* Close button */}
        <button className="transmit-close" onClick={onClose} aria-label="Close">
          <span>✕</span>
        </button>

        {/* Header */}
        <div className="transmit-card-header">
          <div className="transmit-label-bar">
            <span>TRANSMISSION CARD</span>
            <span>CLASSIFIED // 001</span>
          </div>
          <h2 className="transmit-name">CALVIN JUDE<br/>D'SOUZA</h2>
          <div className="transmit-role-badge">
            <span className="transmit-status-dot" />
            {profile.currentRole.title}
          </div>
          <p className="transmit-clearance">{profile.currentRole.organization}</p>
        </div>

        {/* Divider */}
        <div className="transmit-divider" />

        {/* Contact Details */}
        <div className="transmit-details">
          <div className="transmit-detail-row">
            <span className="transmit-detail-key">EMAIL</span>
            <a href={`mailto:${profile.contact.email}`} className="transmit-detail-val transmit-link">{profile.contact.email}</a>
          </div>
          <div className="transmit-detail-row">
            <span className="transmit-detail-key">EMAIL 2</span>
            <a href={`mailto:${profile.contact.email2}`} className="transmit-detail-val transmit-link">{profile.contact.email2}</a>
          </div>
          <div className="transmit-detail-row">
            <span className="transmit-detail-key">PHONE</span>
            <a href={`tel:${profile.contact.phone}`} className="transmit-detail-val transmit-link">{profile.contact.phone}</a>
          </div>
          <div className="transmit-detail-row">
            <span className="transmit-detail-key">EDUCATION</span>
            <span className="transmit-detail-val">{profile.education.degree}</span>
          </div>
          <div className="transmit-detail-row">
            <span className="transmit-detail-key">CGPA</span>
            <span className="transmit-detail-val transmit-highlight">{profile.education.cgpa} / 10</span>
          </div>
        </div>

        {/* Divider */}
        <div className="transmit-divider" />

        {/* Social Links */}
        <div className="transmit-socials">
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="transmit-social-btn">
            <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            LINKEDIN ↗
          </a>
          <a href={profile.contact.github} target="_blank" rel="noreferrer" className="transmit-social-btn">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GITHUB ↗
          </a>
          <a href={profile.contact.instagram} target="_blank" rel="noreferrer" className="transmit-social-btn">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
            INSTAGRAM ↗
          </a>
          <a href={`mailto:${profile.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`} className="transmit-social-btn transmit-gmail-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
            GMAIL ↗
          </a>
        </div>

        {/* Action Buttons */}
        <div className="transmit-actions">
          <button className="transmit-copy-btn" onClick={handleCopy}>
            {copied ? '✓ COPIED TO CLIPBOARD' : '⎘ COPY CONTACT INFO'}
          </button>
          <a 
            href={`mailto:${profile.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`} 
            className="transmit-email-btn"
          >
            ↗ SEND EMAIL
          </a>
        </div>

        {/* Bottom label */}
        <div className="transmit-card-footer">
          <span>THE BUREAU — EST. 2024</span>
          <span>BUILT WITH OBSESSION</span>
        </div>
      </div>
    </div>
  );
};

export default TransmitModal;
