import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import HoverPreview from '../motion/HoverPreview';
import '../../styles/scenes/archive.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = ({ fullArchive = false }) => {
  const archiveRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed opacity entrance animation for archive items because ScrollTrigger height calculation 
      // issues were causing the items to stay invisible and leaving a giant blank space.
    }, archiveRef);

    return () => ctx.revert();
  }, []);

  // Removed ScrollTrigger.refresh() on hover because it was causing severe 
  // scroll snapping and layout jumps to the next section (Field Evidence).

  return (
    <section className="archive-scene" id="archive" ref={archiveRef}>
      <div className="bureau-container">
        
        <div className="archive-header">
          <h2 className="archive-title">FEATURED CASE FILES</h2>
          <span className="archive-subtitle">001 - 009 // SELECTED WORKS</span>
        </div>

        <div className="archive-list">
          {projects.map((project, index) => {
            // If not fullArchive, only show first 9 (all featured projects)
            if (!fullArchive && index > 8) return null;
            const isHovered = hoveredProject === project.id;

            return (
              <HoverPreview 
                key={project.id} 
                visualKey={project.visualKey}
                image={project.image}
                title={project.title}
                subtitle={project.category}
              >
                <div 
                  className={`archive-item ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setHoveredProject(hoveredProject === project.id ? null : project.id)}
                >
                  {/* collapsed state always visible */}
                <div className="archive-item-base">
                  <span className="archive-item-id">{project.id}</span>
                  <div className="archive-item-title-group">
                    <h3 className="archive-item-name">{project.title}</h3>
                    <span className="archive-item-category">{project.category}</span>
                  </div>
                  <span className={`archive-item-status status-${project.status.toLowerCase()}`}>
                    [{project.status}]
                  </span>
                  <span className="archive-mobile-expand-icon">
                    {isHovered ? '−' : '+'}
                  </span>
                </div>

                {/* the expanded accordion content */}
                <div className="archive-item-dossier" style={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0, overflow: 'hidden', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <div className="dossier-content">
                    <p className="dossier-desc">{project.description}</p>
                    <p className="dossier-why"><strong>WHY: </strong>{project.why}</p>
                    
                    {/* Evidence Metrics */}
                    {project.metrics && (
                      <div className="dossier-metrics">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="metric-chip">
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="dossier-stack">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="stack-tag">{tech}</span>
                      ))}
                    </div>

                    <div className="dossier-links" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" style={{ 
                          padding: '0.5rem 1rem', 
                          border: '1px solid var(--color-ink)', 
                          background: 'var(--color-ink)', 
                          color: 'var(--color-bg-dark)', 
                          textDecoration: 'none', 
                          fontFamily: 'var(--font-mono)', 
                          fontSize: '0.8rem',
                          fontWeight: 'bold'
                        }}>↗ INVESTIGATE SOURCE (GITHUB)</a>
                      )}
                      {project.links.research && (
                        <a href={project.links.research} target="_blank" rel="noreferrer" style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-rule)', color: 'var(--color-ink)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↗ RESEARCH NOTE</a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-rule)', color: 'var(--color-ink)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>↗ LIVE DEMO</a>
                      )}
                    </div>
                  </div>
                  
                  {/* The specific abstract visual area */}
                  <div className="dossier-visual">
                    <div className={`abstract-visual visual-${project.visualKey}`}></div>
                  </div>
                </div>
                </div>
              </HoverPreview>
            );
          })}
        </div>

        {!fullArchive && (
          <div className="archive-footer" style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <Link to="/work" className="archive-view-all" style={{ display: 'inline-block', padding: '1rem 2rem', border: '1px solid var(--color-rule)', textDecoration: 'none', color: 'var(--color-gold)', transition: 'all 0.3s' }} onMouseEnter={e => e.target.style.backgroundColor = 'rgba(232, 213, 181, 0.05)'} onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}>
              VIEW COMPLETE ARCHIVE ↗
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;
