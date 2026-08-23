import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { transmissions } from '../../data/transmissions';
import '../../styles/scenes/transmissions.css';

gsap.registerPlugin(ScrollTrigger);

const TX_TRUNCATE_LENGTH = 280;

const TxCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = post.content.length > TX_TRUNCATE_LENGTH;

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const displayContent = expanded || !isLong
    ? post.content
    : post.content.substring(0, TX_TRUNCATE_LENGTH) + '…';

  return (
    <a href={post.link} target="_blank" rel="noreferrer" className="tx-card">
      <div className="tx-card-header">
        <span className="tx-type">{post.type}</span>
        <span className="tx-date">{post.date}</span>
      </div>
      
      <div className="tx-content-wrapper">
        <p className="tx-content">{displayContent}</p>
        {isLong && (
          <button className="tx-read-more" onClick={toggleExpand}>
            {expanded ? '← COLLAPSE' : 'READ MORE →'}
          </button>
        )}
      </div>

      {post.image && (
        <div className="tx-image-container">
          <img 
            src={post.image} 
            alt="Transmission attachment" 
            className="tx-image"
            loading="lazy"
            onLoad={(e) => e.target.classList.add('loaded')}
          />
        </div>
      )}
      
      <div className="tx-card-footer">
        <span className="tx-stat">LIKES {post.stats.likes}</span>
        <span className="tx-stat">CMTS {post.stats.comments}</span>
        <span className="tx-icon">↗</span>
      </div>
    </a>
  );
};

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
          <div className="tx-header-meta">
            <span className="tx-subtitle">PUBLIC INTELLIGENCE // LINKEDIN</span>
            <span className="tx-count">{transmissions.length} ENTRIES</span>
          </div>
        </div>

        <div className="tx-carousel">
          {transmissions.map((post) => (
            <TxCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transmissions;
