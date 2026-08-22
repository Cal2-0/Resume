import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ParallaxLayer
 * 
 * Creates a parallax scrolling effect on its children.
 * 
 * @param {number} speed - The speed multiplier. 1 is normal scroll, 0.5 is half speed (background), 1.5 is faster (foreground).
 * @param {string} direction - 'y' (vertical) or 'x' (horizontal). Default 'y'.
 * @param {boolean} disabled - Disable the parallax effect (useful for mobile).
 */
const ParallaxLayer = ({ 
  children, 
  speed = 0.5, 
  direction = 'y',
  disabled = false,
  startPoint = 'top bottom',
  className = '',
  style = {}
}) => {
  const triggerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    if (disabled) return;
    
    // We calculate a y-offset based on speed.
    // If speed is 0.5, it lags behind (moves up slower).
    const yOffset = (1 - speed) * 100;

    const ctx = gsap.context(() => {
      gsap.to(targetRef.current, {
        [direction]: direction === 'y' ? `${yOffset}vh` : `${yOffset}vw`,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: startPoint, // Start point
          end: 'bottom top',   // End when bottom of element hits top of viewport
          scrub: true,
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [speed, direction, disabled]);

  return (
    <div ref={triggerRef} className={`parallax-trigger ${className}`} style={{ ...style }}>
      <div ref={targetRef} className="parallax-target" style={{ width: '100%', height: '100%', willChange: 'transform' }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxLayer;
