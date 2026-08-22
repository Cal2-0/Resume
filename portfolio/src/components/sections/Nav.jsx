import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { lenisInstance } from '../../utils/smoothScroll';
import '../../styles/scenes/nav.css';

const Nav = () => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleProfileClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
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
        <Link to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          CALVIN <span className="nav-logo-badge">DSOUZA</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <a href="#" onClick={handleProfileClick} className="nav-link">PROFILE</a>
          <Link to="/gallery" className="nav-link">ARCHIVE</Link>
          <Link to="/transmissions" className="nav-link">UPDATES</Link>
          <Link to="/field-notes" className="nav-link">ARTICLES</Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-link" style={{ color: 'var(--color-gold)' }}>DOSSIER (CV)</a>
          <a href="mailto:calvinja320@gmail.com?subject=Incoming%20Transmission%20from%20The%20Bureau&body=Hey%20Calvin%2C%20loved%20the%20portfolio.%20I%20wanted%20to%20connect%20regarding..." className="nav-link nav-cta">TRANSMIT</a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="toggle-line" />
          <span className="toggle-line" />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`nav-mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          <a href="#" onClick={handleProfileClick} className="mobile-nav-link">
            <span className="mobile-link-num">01</span> PROFILE
          </a>
          <Link to="/gallery" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
            <span className="mobile-link-num">02</span> ARCHIVE
          </Link>
          <Link to="/transmissions" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
            <span className="mobile-link-num">03</span> UPDATES
          </Link>
          <Link to="/field-notes" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
            <span className="mobile-link-num">04</span> ARTICLES
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mobile-nav-link" style={{ color: 'var(--color-gold)' }} onClick={() => setMobileOpen(false)}>
            <span className="mobile-link-num">05</span> DOSSIER (CV) ↗
          </a>
          <a href="mailto:calvinja320@gmail.com?subject=Incoming%20Transmission%20from%20The%20Bureau&body=Hey%20Calvin%2C%20loved%20the%20portfolio." className="mobile-nav-link mobile-cta" onClick={() => setMobileOpen(false)}>
            TRANSMIT SIGNAL ↗
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
