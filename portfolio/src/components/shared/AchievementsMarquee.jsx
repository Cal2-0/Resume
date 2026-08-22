import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { profile } from '../../data/profile';
import '../../styles/scenes/marquee.css';

const AchievementsMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite horizontal scroll
      gsap.to('.marquee-track', {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  // Duplicate items to ensure smooth infinite loop
  const duplicatedAwards = [...profile.awards, ...profile.awards, ...profile.awards];

  return (
    <section className="marquee-scene" ref={marqueeRef}>
      <div className="marquee-container">
        <div className="marquee-track">
          {duplicatedAwards.map((award, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-event">{award.event}</span>
              <span className="marquee-separator">✦</span>
              <span className="marquee-result">{award.result}</span>
              <span className="marquee-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsMarquee;
