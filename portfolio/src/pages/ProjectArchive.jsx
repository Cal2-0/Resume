import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects, labProjects } from '../data/projects';
import MarkdownRenderer from '../components/article/MarkdownRenderer';
import { X, ExternalLink } from 'lucide-react';
import HoverPreview from '../components/motion/HoverPreview';
import '../styles/scenes/archive.css';

const ReadmeModal = ({ isOpen, onClose, project }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !project || !project.links?.github) return;

    const fetchReadme = async () => {
      setLoading(true);
      try {
        // Extract owner and repo from github URL
        // e.g. "https://github.com/Cal2-0/Axon" -> Cal2-0/Axon
        const urlObj = new URL(project.links.github);
        const pathParts = urlObj.pathname.split('/').filter(Boolean);
        if (pathParts.length >= 2) {
          const owner = pathParts[0];
          const repo = pathParts[1];
          // Try main first, then master
          const response = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`);
          if (response.ok) {
            setContent(await response.text());
          } else {
            const masterRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`);
            if (masterRes.ok) {
              setContent(await masterRes.text());
            } else {
              setContent('# No README found.\n\nCould not locate a main or master README.md for this repository.');
            }
          }
        } else {
          setContent('# Invalid Repository Link');
        }
      } catch (err) {
        setContent('# Error fetching repository data\n\nPlease check the repository manually.');
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [isOpen, project]);

  if (!isOpen) return null;

  return (
    <div className="readme-modal-overlay" onClick={onClose}>
      <div className="readme-modal-content" onClick={e => e.stopPropagation()}>
        <div className="readme-modal-header">
          <div className="readme-modal-title">
            <h2>{project.title}</h2>
            <span className="readme-modal-status">[{project.status}]</span>
          </div>
          <div className="readme-modal-actions">
            {project.links?.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" className="readme-external-btn">
                ↗ VIEW SOURCE
              </a>
            )}
            <button className="readme-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="readme-modal-body">
          {loading ? (
            <div className="readme-loading">FETCHING DECRYPTED DATA...</div>
          ) : (
            <div className="reader-content" style={{ padding: '0 2rem' }}>
              <MarkdownRenderer content={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectArchive = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="magazine-container" style={{ paddingTop: '120px' }}>
      <div className="bureau-container">
        
        <div className="archive-header" style={{ marginBottom: '4rem' }}>
          <div>
            <Link to="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-silver)', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>← HOME</Link>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-white)', margin: 0, lineHeight: 1 }}>WORK</h1>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--color-gold)' }}>COMPLETE ARCHIVE</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--space-8)' }}>
          
          <div style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-gold)', borderBottom: '1px solid var(--color-rule)', paddingBottom: '1rem', marginBottom: '2rem' }}>CLASS A // FEATURED SYSTEMS</h3>
            
            <div className="archive-list">
              {projects.map(project => (
                <HoverPreview
                  key={project.id}
                  visualKey={project.visualKey}
                  image={project.image}
                  title={project.title}
                  subtitle={project.category}
                >
                  <div className="archive-item work-archive-row">
                    <span className="work-archive-id">{project.id}</span>
                    <div className="work-archive-info">
                      <h3 className="work-archive-name">{project.title}</h3>
                      <p className="work-archive-desc">{project.description}</p>
                    </div>
                    <span className="work-archive-category">{project.category}</span>
                    
                    <div className="work-archive-stack">
                      {project.stack.slice(0,3).map(s => <span key={s} className="work-archive-tag">{s}</span>)}
                    </div>

                    <button 
                      className="work-archive-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      DEEP DIVE
                    </button>
                  </div>
                </HoverPreview>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1', marginTop: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-silver)', borderBottom: '1px solid var(--color-rule)', paddingBottom: '1rem', marginBottom: '2rem' }}>CLASS B // LABORATORY EXPERIMENTS</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {labProjects.map(lab => (
                <div key={lab.id} style={{ border: '1px solid var(--color-rule)', padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-white)', margin: '0 0 1rem 0' }}>{lab.title}</h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-silver)', margin: '0 0 1.5rem 0', lineHeight: 1.5 }}>{lab.desc}</p>
                  {lab.github !== '#' && (
                    <a href={lab.github} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-gold)', textDecoration: 'none' }}>↗ VIEW REPO</a>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <ReadmeModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </div>
  );
};

export default ProjectArchive;
