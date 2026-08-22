import React from 'react';

const Contact = () => {
  return (
    <section style={{ padding: 'var(--space-10) 0', backgroundColor: 'var(--color-bg-dark)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="bureau-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
        
        <div 
          className="mono" 
          style={{ 
            color: 'var(--color-graphite)', 
            fontSize: 'var(--type-label)', 
            letterSpacing: '0.15em',
            marginBottom: 'var(--space-8)',
            textTransform: 'uppercase'
          }}
        >
          08 — CORRESPONDENCE
        </div>
        
        <p 
          style={{ 
            color: 'var(--color-ink)', 
            fontSize: 'var(--type-large)', 
            maxWidth: '600px', 
            marginBottom: 'var(--space-8)',
            lineHeight: 'var(--leading-loose)'
          }}
        >
          For research collaborations, internship discussions,<br/>
          or security work inquiries.
        </p>
        
        <a 
          href="mailto:calvinja320@gmail.com?subject=Inquiry:%20Research%20and%20Collaboration" 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'var(--type-heading)', 
            color: 'var(--color-ink)', 
            marginBottom: 'var(--space-10)',
            display: 'block',
            textDecoration: 'none'
          }}
        >
          calvinja320@gmail.com
        </a>
        
        <div className="mono" style={{ display: 'flex', gap: 'var(--space-5)', color: 'var(--color-silver)', fontSize: 'var(--type-caption)' }}>
          <a href="https://github.com/Cal2-0" target="_blank" rel="noreferrer" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>GitHub</a>
          <span>·</span>
          <a href="https://linkedin.com/in/calvin-jude-dsouza" target="_blank" rel="noreferrer" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>LinkedIn</a>
          <span>·</span>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-silver)', textDecoration: 'none' }}>Twitter</a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
