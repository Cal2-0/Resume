import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * PinnedScene
 * 
 * Pins an element in place while the user scrolls, creating a scrubbable timeline effect.
 * Perfect for deep dive articles where text scrolls past a fixed diagram.
 */
const PinnedScene = ({ children, pinDuration = '100%', className = '', style = {} }) => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinRef.current,
        start: 'top top',
        end: `+=${pinDuration}`,
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pinDuration]);

  return (
    <div ref={containerRef} className={`pinned-scene-container ${className}`} style={{ ...style, position: 'relative' }}>
      <div ref={pinRef} className="pinned-scene-target">
        {children}
      </div>
    </div>
  );
};

export default PinnedScene;
