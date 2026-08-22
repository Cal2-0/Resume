import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

/**
 * HoverPreview
 * 
 * An interactive floating preview that follows the mouse cursor when a target element is hovered.
 * Ideal for revealing project abstracts or thumbnails on list hover without cluttering layout.
 * 
 * @param {string} previewContent - A CSS class or image URL for the preview visual.
 * @param {string} title - Title text to show inside the preview.
 * @param {string} subtitle - Subtitle text.
 * @param {string} image - URL of the image to display.
 */
const HoverPreview = ({ children, visualKey, image, title, subtitle }) => {
  const containerRef = useRef(null);
  const previewRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Quick GSAP to follow cursor
    const handleMouseMove = (e) => {
      if (!isHovered || !previewRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate cursor position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(previewRef.current, {
        x: x + 20, // Offset so it doesn't block cursor
        y: y - 100,
        duration: 0.4,
        ease: 'power3.out'
      });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
      gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)' });
    } else {
      gsap.to(previewRef.current, { opacity: 0, scale: 0.8, duration: 0.2, ease: 'power2.in' });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div 
      ref={containerRef}
      className="hover-preview-container" 
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Floating Preview Portal/Element */}
      <div 
        ref={previewRef}
        className="hover-preview-tooltip"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '240px',
          height: '160px',
          backgroundColor: 'var(--color-bg-dark)',
          border: '1px solid var(--color-gold)',
          pointerEvents: 'none',
          opacity: 0,
          scale: 0.8,
          zIndex: 50,
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              filter: 'grayscale(80%) contrast(1.2) brightness(0.6)', 
              mixBlendMode: 'luminosity' 
            }} 
          />
        ) : (
          <div className={`abstract-visual visual-${visualKey}`} style={{ opacity: 0.3 }} />
        )}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '0.5rem', background: 'linear-gradient(transparent, var(--color-bg-dark))' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-silver)' }}>{subtitle}</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--color-gold)' }}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverPreview;
