import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { labProjects } from '../../data/projects';
import '../../styles/scenes/lab.css';

gsap.registerPlugin(ScrollTrigger);

const LabBench = () => {
  const labRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lab-item', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.lab-grid',
          start: 'top 85%',
        }
      });
    }, labRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="lab-scene" ref={labRef}>
      <div className="bureau-container">
        
        <div className="lab-header">
          <h2 className="lab-title">THE LAB BENCH</h2>
          <p className="lab-subtitle">Small experiments, questionable ideas, and things I built because I wanted to know if I could.</p>
        </div>

        <div className="lab-grid">
          {labProjects.map((project) => (
            <div key={project.id} className="lab-item">
              <h3 className="lab-item-title">{project.title}</h3>
              <p className="lab-item-desc">{project.desc}</p>
              <div className="lab-item-footer">
                <span className="lab-item-id">{project.id}</span>
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="lab-item-link">↗ REPO</a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LabBench;
