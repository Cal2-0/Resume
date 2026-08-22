import React from 'react';

const Skills = () => {
  return (
    <section className="skills-section section container-wide">
      <h2 className="skills-title text-center">TECHNICAL ARSENAL</h2>
      
      <div className="skills-grid">
        <div className="skill-category" style={{ '--accent': 'var(--color-accent-primary)', transform: 'rotate(-1deg)' }}>
          <h3 className="skill-cat-title">🔒 CYBERSECURITY</h3>
          <ul className="skill-list">
            <li>Digital Forensics</li>
            <li>OSINT</li>
            <li>Network Security</li>
            <li>Cryptography</li>
            <li>Steganography</li>
            <li>Nmap, Wireshark, Gobuster</li>
          </ul>
        </div>

        <div className="skill-category" style={{ '--accent': 'var(--color-accent-secondary)', transform: 'rotate(1deg)' }}>
          <h3 className="skill-cat-title">🤖 AI & MACHINE LEARNING</h3>
          <ul className="skill-list">
            <li>PyTorch, YOLOv8</li>
            <li>Computer Vision</li>
            <li>LLM Integration</li>
            <li>Multi-Modal Fusion, OpenCV</li>
          </ul>
        </div>

        <div className="skill-category" style={{ '--accent': 'var(--color-accent-warn)', transform: 'rotate(-1.5deg)' }}>
          <h3 className="skill-cat-title">&lt;/&gt; LANGUAGES & FRAMEWORKS</h3>
          <ul className="skill-list">
            <li>Python, C, JavaScript</li>
            <li>TypeScript, SQL, Bash</li>
            <li>Flask, FastAPI, Node.js</li>
            <li>React, MERN Stack</li>
          </ul>
        </div>

        <div className="skill-category" style={{ '--accent': 'var(--color-accent-tertiary)', transform: 'rotate(1.5deg)' }}>
          <h3 className="skill-cat-title">🛠️ DEVELOPER TOOLS</h3>
          <ul className="skill-list">
            <li>Linux (Kali/Ubuntu)</li>
            <li>Git, Docker</li>
            <li>Chrome Extension Dev</li>
            <li>Bash Scripting</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
