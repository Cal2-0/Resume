import React, { useRef } from 'react';

const TableOfContents = () => {
  const containerRef = useRef(null);

  const sections = [
    { num: '01', title: 'ABOUT', subtitle: 'ME', rot: -5 },
    { num: '02', title: 'WORK', subtitle: 'PROJECTS', rot: 3 },
    { num: '03', title: 'AWARDS', subtitle: '& HONORS', rot: -2 },
    { num: '04', title: 'SKILLS', subtitle: 'ARSENAL', rot: 4 },
    { num: '05', title: 'CONTACT', subtitle: 'ME', rot: -3 },
  ];

  return (
    <section className="toc-section section" ref={containerRef}>
      <div className="container">
        <h2 className="toc-title">WHAT'S INSIDE THIS ISSUE</h2>
        
        <div className="toc-grid">
          {sections.map((sec, idx) => (
            <div 
              key={idx} 
              className="toc-card"
              style={{ '--rotation': `${sec.rot}deg` }}
            >
              <div className="pin"></div>
              <div className="toc-card-num">{sec.num}</div>
              <div className="toc-card-content">
                <h3>{sec.title}</h3>
                {sec.subtitle && <span>{sec.subtitle}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
