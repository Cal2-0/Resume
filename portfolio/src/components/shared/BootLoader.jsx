import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const BootLoader = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = `> INIT SYSTEM...
> ESTABLISHING SECURE CONNECTION...
> BYPASSING FIREWALL...
> ACCESS GRANTED.
> WELCOME TO THE BUREAU.`;

  useEffect(() => {
    let currentText = '';
    let i = 0;
    
    // Typewriter effect
    const timer = setInterval(() => {
      currentText += fullText.charAt(i);
      setText(currentText);
      i++;
      if (i >= fullText.length) {
        clearInterval(timer);
        
        // Wait a beat, then fade out
        setTimeout(() => {
          gsap.to('.boot-loader', {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 600);
      }
    }, 20); // Fast typing speed

    return () => clearInterval(timer);
  }, [onComplete, fullText]);

  return (
    <div className="boot-loader" style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#050506',
      zIndex: 9999999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
      color: '#34D399', // Terminal Green
      whiteSpace: 'pre-wrap'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        {text}
        <span style={{
          display: 'inline-block',
          width: '8px',
          height: '1.2em',
          backgroundColor: '#34D399',
          marginLeft: '4px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite'
        }} />
      </div>
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default BootLoader;
