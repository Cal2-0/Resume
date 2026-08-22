import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { lenisInstance } from '../../utils/smoothScroll';
import '../../styles/scenes/nav.css';

const Nav = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('person-dossier');
        if (el) {
          if (lenisInstance) lenisInstance.scrollTo(el);
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById('person-dossier');
      if (el) {
        if (lenisInstance) lenisInstance.scrollTo(el);
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bureau-nav" ref={navRef}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          CALVIN <span className="nav-logo-badge">DSOUZA</span>
        </Link>
        <nav className="nav-links">
          <a href="#" onClick={handleProfileClick} className="nav-link">PROFILE</a>
          <Link to="/gallery" className="nav-link">ARCHIVE</Link>
          <Link to="/transmissions" className="nav-link">UPDATES</Link>
          <Link to="/field-notes" className="nav-link">ARTICLES</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-link" style={{ color: 'var(--color-gold)' }}>DOSSIER (CV)</a>
          <a href="mailto:calvinja320@gmail.com?subject=Incoming%20Transmission%20from%20The%20Bureau&body=Hey%20Calvin%2C%20loved%20the%20portfolio.%20I%20wanted%20to%20connect%20regarding..." className="nav-link nav-cta">TRANSMIT</a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
