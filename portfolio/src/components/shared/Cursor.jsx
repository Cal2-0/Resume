import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../styles/scenes/cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Set initial position off-screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
        opacity: 1
      });
    };

    const handleHover = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out', mixBlendMode: 'difference' });
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out', mixBlendMode: 'normal' });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach hover effects to links and specific interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .archive-item, .tx-card');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div className="bureau-cursor" ref={cursorRef}></div>;
};

export default Cursor;
