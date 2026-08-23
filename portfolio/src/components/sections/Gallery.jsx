import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/scenes/gallery.css';

gsap.registerPlugin(ScrollTrigger);

const mediaFiles = [
  "1000014877.jpg",
  "1000025201.jpg",
  "1000038973.jpg",
  "1000044683.jpg",
  "1000044813.jpg",
  "1000044826.jpg",
  "1000044989.jpg",
  "1000045740.jpg",
  "1000056477.jpg",
  "1000067092.mp4",
  "1000071979.jpg",
  "1000071981.jpg",
  "1000094351.jpg",
  "1764066942042.jpg",
  "1764066942211.jpg",
  "1777230006622.jpg",
  "1777644239349.jpg",
  "1777644239620.jpg",
  "1777858503082.jpg",
  "1777858503479.jpg",
  "1785133249319.jpg",
  "IMG_20251031_165115.jpg",
  "IMG_5984.MP4",
  "IMG_6013.MP4",
  "IMG_6376.MOV",
  "IMG_6384.MP4",
  "IMG_6403.MP4",
  "proton-26_v5(story).jpg.jpeg"
];

// Helper to determine if file is video
const isVideo = (file) => file.toLowerCase().endsWith('.mp4') || file.toLowerCase().endsWith('.mov');

// Filter out unsupported videos
const supportedFiles = mediaFiles.filter(file => !isVideo(file));

// Split files into 3 columns for masonry layout
const columns = [[], [], []];
supportedFiles.forEach((file, index) => {
  columns[index % 3].push(file);
});

const GalleryItem = ({ file, index, colIndex }) => {
  const isVid = isVideo(file);
  const path = `/gallery-pics/${file}`;

  return (
    <div className="gallery-item">
      <div className="gallery-media-wrapper">
        {isVid ? (
          <video 
            src={path} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="gallery-video" 
          />
        ) : (
          <img 
            src={path} 
            alt={`Archive Evidence ${index}`} 
            className="gallery-image" 
            loading="lazy"
            style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
            onLoad={(e) => { e.target.style.opacity = 1; }}
          />
        )}
      </div>
      <div className="gallery-item-meta">
        <span className="gallery-item-id">
          EVD-{colIndex + 1}0{index}
        </span>
        <span className="gallery-item-type">
          {isVid ? 'VIDEO RECORD' : 'PHOTOGRAPH'}
        </span>
      </div>
    </div>
  );
};

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Media query check to disable complex scroll triggers on mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      const ctx = gsap.context(() => {
        // Removed opacity entrance animation to prevent items getting stuck invisible

        // Parallax scroll effect for columns
        gsap.to('.gallery-col-0', {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to('.gallery-col-1', {
          y: 150,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to('.gallery-col-2', {
          y: -250,
          ease: 'none',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }, galleryRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="gallery-scene" ref={galleryRef}>
      <div className="gallery-header">
        <h2 className="gallery-title">THE ARCHIVE</h2>
        <p className="gallery-subtitle">VISUAL EVIDENCE // FIELD CAPTURES</p>
      </div>

      <div className="gallery-grid">
        {columns.map((colFiles, colIndex) => (
          <div key={colIndex} className={`gallery-column gallery-col-${colIndex}`}>
            {colFiles.map((file, fileIndex) => (
              <GalleryItem 
                key={file} 
                file={file} 
                index={fileIndex} 
                colIndex={colIndex} 
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
