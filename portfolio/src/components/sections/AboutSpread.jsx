import React from 'react';
import { Polaroid } from '../shared/Polaroid';
import { StickyNote } from '../shared/StickyNote';

const AboutSpread = () => {
  return (
    <section className="about-spread section container-wide">
      <div className="spread">
        {/* Left Page - Photo Collage */}
        <div className="page-left photo-collage">
          <Polaroid 
            image="" 
            caption="The early days" 
            rotation={-8} 
            size="large"
            className="about-photo-1"
          />
          <Polaroid 
            image="" 
            caption="Team building" 
            rotation={5} 
            size="medium"
            className="about-photo-2"
          />
          <Polaroid 
            image="" 
            caption="Late night coding" 
            rotation={12} 
            size="medium"
            className="about-photo-3"
          />
        </div>

        {/* Right Page - Story */}
        <div className="page-right story-content">
          <h2 className="story-title">THE DEVELOPER</h2>
          
          <div className="story-text two-column-text">
            <p>
              <span className="drop-cap">T</span>he journey into cybersecurity wasn't planned—it was
              inevitable. From reverse-engineering game mechanics as
              a kid to leading development teams tackling enterprise
              security challenges, I've learned that the best solutions
              come from curiosity, collaboration, and a bit of creative
              chaos.
            </p>
            <p>
              Today, I'm a Cybersecurity Developer and Team Lead at
              NMAMIT, where I engineer secure communication platforms,
              integrate AI into cryptographic pipelines, and mentor
              students through the maze of digital security. Whether
              it's cracking CTF challenges, building browser extensions,
              or architecting full-stack applications, I bring the same
              philosophy: security shouldn't be an afterthought—it
              should be elegant.
            </p>
            <p>
              When I'm not debugging or researching zero-days, you'll
              find me competing in hackathons <span className="highlight-yellow">(7th out of 200+ in Code Intrusion CTF)</span>, 
              tinkering with machine learning models, or planning the next big project with my team.
            </p>
          </div>

          <div className="leadership-roles">
            <StickyNote color="yellow" rotation={-3}>
              <strong>JR</strong><br/>
              Junior Branch Rep<br/>
              NMAMIT 2026
            </StickyNote>
            <StickyNote color="pink" rotation={2}>
              <strong>CR</strong><br/>
              Class Rep<br/>
              NMAMIT
            </StickyNote>
            <StickyNote color="mint" rotation={-4}>
              <strong>PT</strong><br/>
              Core Member<br/>
              PROTON Association
            </StickyNote>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">PROJECTS COMPLETED</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8</span>
              <span className="stat-label">YEARS EXPERIENCE</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">12</span>
              <span className="stat-label">AWARDS WON</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">CLIENTS SERVED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpread;
