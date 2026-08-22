import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ClipReveal
 * 
 * Animates a clip-path mask to reveal its children as it scrolls into view.
 * 
 * @param {string} direction - 'up', 'down', 'left', 'right', 'center'. Default 'center'.
 * @param {number} delay - Animation delay in seconds.
 * @param {number} duration - Animation duration in seconds.
 */
const ClipReveal = ({
  children,
  direction = 'center',
  delay = 0,
  duration = 1.2,
  className = '',
  style = {}
}) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    let clipStart = 'circle(0% at 50% 50%)';
    const clipEnd = 'circle(150% at 50% 50%)';

    if (direction === 'up') clipStart = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)';
    if (direction === 'down') clipStart = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
    if (direction === 'left') clipStart = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
    if (direction === 'right') clipStart = 'polygon(0 0, 0 0, 0 100%, 0 100%)';

    const endPolygon = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

    const ctx = gsap.context(() => {
      gsap.fromTo(triggerRef.current,
        { 
          clipPath: direction === 'center' ? clipStart : clipStart,
          WebkitClipPath: direction === 'center' ? clipStart : clipStart
        },
        {
          clipPath: direction === 'center' ? clipEnd : endPolygon,
          WebkitClipPath: direction === 'center' ? clipEnd : endPolygon,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, [direction, delay, duration]);

  return (
    <div ref={triggerRef} className={`clip-reveal ${className}`} style={{ ...style, willChange: 'clip-path' }}>
      {children}
    </div>
  );
};

export default ClipReveal;
