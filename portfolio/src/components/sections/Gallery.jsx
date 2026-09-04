import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryCollections } from '../../data/gallery';
import '../../styles/scenes/gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Lightbox = ({ photo, onClose, onNext, onPrev }) => {
  if (!photo) return null;
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>×</button>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        {photo.type === 'video' ? (
          <video src={photo.src} controls autoPlay className="lightbox-media" />
        ) : (
          <img src={photo.src} alt="Enlarged" className="lightbox-media" />
        )}
        <div className="lightbox-metadata">
          <span className="metadata-tag">FILE: {photo.src.split('/').pop()}</span>
          <span className="metadata-tag">TYPE: {photo.type.toUpperCase()}</span>
        </div>
      </div>
      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>←</button>
      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>→</button>
    </div>
  );
};

const GalleryItem = ({ photo, onClick, className }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <div className={`gallery-media-wrapper ${className || ''}`} onClick={() => onClick(photo)}>
      {photo.type === 'video' ? (
        <video 
          src={photo.src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="gallery-video" 
          onError={() => setHasError(true)}
        />
      ) : (
        <img 
          src={photo.src} 
          alt="Archive Capture" 
          className="gallery-image" 
          loading="lazy" 
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
};

const Gallery = () => {
  const [activeCollectionId, setActiveCollectionId] = useState(galleryCollections[0]?.id);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const activeCollection = galleryCollections.find(c => c.id === activeCollectionId) || galleryCollections[0];
  const photos = activeCollection.photos || [];

  const openLightbox = (photo) => {
    const idx = photos.findIndex(p => p.src === photo.src);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);
  
  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % photos.length);
    }
  };
  
  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="gallery-scene">
      <div className="gallery-header">
        <h2 className="gallery-title">THE ARCHIVE</h2>
        <p className="gallery-subtitle">VISUAL EVIDENCE // CURATED COLLECTIONS</p>
      </div>

      <div className="gallery-nav-wrapper">
        <div className="gallery-nav">
          {galleryCollections.map(collection => (
            <button
              key={collection.id}
              className={`collection-btn ${activeCollectionId === collection.id ? 'active' : ''}`}
              onClick={() => setActiveCollectionId(collection.id)}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </div>

      <p className="collection-desc">{activeCollection.description}</p>

      <div className={`collection-container layout-${activeCollection.layout}`}>
        {photos.map((photo, index) => {
          if (activeCollection.layout === 'magazine') {
            return <GalleryItem key={index} photo={photo} onClick={openLightbox} className="mag-item" />;
          } else if (activeCollection.layout === 'timeline') {
            return <GalleryItem key={index} photo={photo} onClick={openLightbox} className="timeline-item" />;
          } else if (activeCollection.layout === 'polaroid') {
            return <GalleryItem key={index} photo={photo} onClick={openLightbox} className="polaroid-item" />;
          } else {
            return <GalleryItem key={index} photo={photo} onClick={openLightbox} />;
          }
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          photo={photos[lightboxIndex]} 
          onClose={closeLightbox}
          onNext={nextLightbox}
          onPrev={prevLightbox}
        />
      )}
    </section>
  );
};

export default Gallery;
