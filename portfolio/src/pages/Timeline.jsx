import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/gallery.css'; // Reuse some gallery/editorial CSS

const timelineData = [
  {
    year: "2024",
    title: "AI ENGINEERING INTERN",
    org: "Army Cyber Group (AITG)",
    desc: "Developed a distributed anomaly detection framework using LLMs. Filtered massive network traffic datasets and analyzed threat intelligence.",
  },
  {
    year: "2024",
    title: "FIRST RUNNER UP",
    org: "Innovex Hackathon",
    desc: "Built a fully autonomous pipeline. It was 48 hours of Redbull, zero sleep, and merging conflicts at 4 AM.",
  },
  {
    year: "2025",
    title: "SYSTEMS ARCHITECT",
    org: "The Bureau (Personal)",
    desc: "Began focusing heavily on scalable systems, agentic architectures, and UI engineering.",
  }
];

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-scene">
      <div className="gallery-header" style={{ marginBottom: '2rem' }}>
        <h2 className="gallery-title">THE RECORD</h2>
        <p className="gallery-subtitle">OPERATIONAL HISTORY // TIMELINE</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <Link to="/" className="reader-back-btn" style={{ marginBottom: '3rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-silver)', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>
          <ArrowLeft size={18} />
          BACK TO HQ
        </Link>

        <div className="layout-timeline" style={{ marginTop: '2rem' }}>
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item" style={{ 
              background: 'var(--color-paper)', 
              padding: '2rem', 
              border: '1px solid var(--color-rule)' 
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', fontSize: '1.2rem' }}>{item.year}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', margin: '0.5rem 0', color: 'var(--color-ink)' }}>{item.title}</h3>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--color-plum)', marginBottom: '1rem' }}>{item.org}</h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-graphite)', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
