import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../../styles/scenes/cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    // Don't run on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const trails = trailRefs.current.filter(Boolean);
    
    // Set initial position off-screen
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    trails.forEach(t => gsap.set(t, { xPercent: -50, yPercent: -50, opacity: 0 }));

    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power3.out',
        opacity: 1
      });

      // Trailing dots with staggered delay
      trails.forEach((trail, i) => {
        gsap.to(trail, {
          x: mouseX,
          y: mouseY,
          duration: 0.3 + (i * 0.15),
          ease: 'power2.out',
          opacity: 0.4 - (i * 0.1)
        });
      });
    };

    // Use event delegation instead of MutationObserver to prevent memory leaks
    const interactiveSelector = 'a, button, .archive-item, .tx-card, .record-card';

    const handleMouseOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out', mixBlendMode: 'difference' });
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out', mixBlendMode: 'normal' });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {[0, 1, 2].map(i => (
        <div
          key={i}
          className="bureau-cursor-trail"
          ref={el => trailRefs.current[i] = el}
        />
      ))}
      {/* Main cursor */}
      <div className="bureau-cursor" ref={cursorRef} />
    </>
  );
};

export default Cursor;
