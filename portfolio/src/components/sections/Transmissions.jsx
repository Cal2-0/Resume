import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { transmissions } from '../../data/transmissions';
import '../../styles/scenes/transmissions.css';

gsap.registerPlugin(ScrollTrigger);

const Transmissions = () => {
  const txRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Individual entrance animation for each card
      gsap.utils.toArray('.tx-card').forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          }
        });
      });
    }, txRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="tx-scene" id="transmissions" ref={txRef}>
      <div className="bureau-container">
        <div className="tx-header">
          <h2 className="tx-title">TRANSMISSIONS</h2>
          <span className="tx-subtitle">PUBLIC INTELLIGENCE // LINKEDIN</span>
        </div>

        <div className="tx-carousel">
          {transmissions.map((post) => (
            <a href={post.link} target="_blank" rel="noreferrer" key={post.id} className="tx-card">
              <div className="tx-card-header">
                <span className="tx-type">{post.type}</span>
                <span className="tx-date">{post.date}</span>
              </div>
              
              <div className="tx-content-wrapper">
                <p className="tx-content">{post.content}</p>
              </div>

              {post.image && (
                <div className="tx-image-container">
                  <img src={post.image} alt="Transmission attachment" className="tx-image" />
                </div>
              )}
              
              <div className="tx-card-footer">
                <span className="tx-stat">LIKS {post.stats.likes}</span>
                <span className="tx-stat">CMTS {post.stats.comments}</span>
                <span className="tx-icon">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transmissions;
