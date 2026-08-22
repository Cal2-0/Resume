import React, { useEffect, useRef } from 'react';
import '../../styles/scenes/entry.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../../data/profile';
import meImage from '../../assets/me.JPG';
import ClipReveal from '../motion/ClipReveal';
import '../../styles/scenes/person.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const portraitRef = useRef(null);
  const portraitImgRef = useRef(null);

  useEffect(() => {
    // Media query check to disable complex scroll triggers on mobile if needed
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const ctx = gsap.context(() => {
      // 1. Entrance Animation (Plays once on load)
      const tlEnter = gsap.timeline();
      
      gsap.set(portraitRef.current, { 
        scale: 1.05, 
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
      });
      gsap.set('.name-char', { y: 150, opacity: 0 });
      gsap.set('.hero-reveal-element', { opacity: 0, y: 20 });
      
      // Hide the secondary elements that will appear ON SCROLL
      gsap.set('.entry-disciplines, .entry-linkedin-btn, .entry-telemetry', { opacity: 0 });

      tlEnter.to(portraitRef.current, {
        scale: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        WebkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.5,
        ease: 'power3.out'
      })
      .to('.name-char', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out'
      }, '-=1')
      .to('.hero-reveal-element', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5');

      // 2. Cinematic Scroll Parallax (Scrubbed Pinned Scene)
      if (!isMobile) {
        const tlScroll = gsap.timeline();

        tlScroll
          // Phase 1: Entry Content moves up and fades out
          .to('.entry-content-col', { opacity: 0, y: -100, duration: 1 }, 0)
          
          // Phase 2: Person Content moves up and fades in
          .fromTo('.person-content-col', 
            { opacity: 0, y: 100 }, 
            { opacity: 1, y: 0, duration: 1 }, 0.5)
            
          // Add a pause at the end so you can read the bio before it unpins
          .to({}, { duration: 0.5 });

        ScrollTrigger.create({
          trigger: containerRef.current,
          pin: stageRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          animation: tlScroll,
          pinSpacing: true
        });
      } else {
        // Fallback for mobile: ensure disciplines and action buttons are visible cleanly
        gsap.to('.entry-disciplines, .entry-linkedin-btn', { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      }

    }, containerRef);

    // 3. Mousemove Parallax on Portrait
    const handleMouseMove = (e) => {
      if (isMobile || !portraitImgRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20; // -10px to 10px
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(portraitImgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars && (st.vars.trigger === containerRef.current || st.vars.pin === stageRef.current)) {
          st.kill(true);
        }
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const words = profile.name.split(' ');

  return (
    <div className="hero-scroll-container" ref={containerRef}>
      <section className="entry-scene" id="person" ref={stageRef}>
        
        {/* Telemetry (Appears on scroll) */}
        <div className="entry-telemetry" style={{ transform: 'translateX(50px)' }}>
          <div className="telemetry-row">
            <div className="telemetry-dot" />
            <span>F1.TM_SYS.ACTIVE</span>
          </div>
          <div className="telemetry-row">
            <div className="telemetry-dot" />
            <span>FPS: 60.00 / RENDERING</span>
          </div>
          <div className="telemetry-row">
            <div className="telemetry-dot" />
            <span>V-SYNC: ENGAGED</span>
          </div>
        </div>

        <div className="entry-grid">
          
          {/* Portrait Slot */}
          <div className="entry-portrait-col">
            <div className="entry-masthead hero-reveal-element">
              <span className="entry-label">THE BUREAU</span>
              <span className="entry-label">EST. 2024 ✦ 001</span>
            </div>
            <div className="entry-portrait-wrapper" ref={portraitRef} style={{ overflow: 'hidden' }}>
              <img 
                ref={portraitImgRef}
                src={meImage} 
                alt="Calvin Dsouza" 
                className="entry-portrait-img" 
              />
            </div>
          </div>

          {/* Right Side Wrapping Container */}
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            
            {/* Typography Slot (Fades Out) */}
            <div className="entry-content-col" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1 className="entry-name" style={{ display: 'flex', flexDirection: 'column' }}>
                {words.map((word, wIdx) => (
                  <div key={wIdx} style={{ overflow: 'hidden' }}>
                    {word.split('').map((char, cIdx) => (
                      <span key={cIdx} style={{ display: 'inline-block' }} className="name-char">
                        {char}
                      </span>
                    ))}
                  </div>
                ))}
              </h1>
              
              <h2 className="entry-thesis hero-reveal-element">{profile.thesis}</h2>
              
              <div className="entry-disciplines">
                {profile.disciplines.map((disc, i) => (
                  <span key={i}>✦ {disc}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
                <a 
                  href="https://linkedin.com/in/calvin-jude-dsouza" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="entry-linkedin-btn"
                  style={{ margin: 0 }}
                >
                  [ CONNECT ON LINKEDIN ]
                </a>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="entry-linkedin-btn"
                  style={{ margin: 0, color: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
                >
                  [ DOWNLOAD DOSSIER ]
                </a>
              </div>
            </div>

            {/* Person Bio Slot (Fades In) */}
            <div className="person-content-col" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="person-header" style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--color-gold)', margin: 0, lineHeight: 1 }}>THE PERSON</h2>
                <p className="entry-label" style={{ margin: '0.5rem 0 0 0' }}>PROFILE // CLASSIFIED</p>
              </div>
              
              <div className="person-bio" style={{ marginBottom: '3rem' }}>
                {profile.bio.map((para, i) => (
                  <p key={i} className="bio-paragraph" style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', color: 'var(--color-silver)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '600px' }}>{para}</p>
                ))}
              </div>

              <div className="person-stats" style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
                {profile.stats.map((stat, i) => (
                  <div key={i} className="stat-block">
                    <span className="stat-value" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>{stat.value}</span>
                    <span className="stat-label" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-graphite)' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <div className="entry-scroll-indicator hero-reveal-element">
          SCROLL TO INVESTIGATE ↗
        </div>

      </section>
    </div>
  );
};

export default Hero;
