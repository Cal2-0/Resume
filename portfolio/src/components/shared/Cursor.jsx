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

    let mouseX = 0, mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

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

    const handleHover = () => {
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out', mixBlendMode: 'difference' });
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out', mixBlendMode: 'normal' });
    };

    window.addEventListener('mousemove', moveCursor);

    // Attach hover effects to links and specific interactive elements
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .archive-item, .tx-card, .record-card');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleLeave);
      });
      return interactiveElements;
    };

    const elements = attachHoverListeners();

    // Re-attach on DOM changes (e.g. route changes)
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, .archive-item, .tx-card, .record-card');
      newElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
      observer.disconnect();
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
