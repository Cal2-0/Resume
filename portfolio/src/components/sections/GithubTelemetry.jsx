import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/scenes/github.css';

gsap.registerPlugin(ScrollTrigger);

// Animated counter hook
const useCountUp = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;

    const numEnd = parseInt(end) || 0;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(numEnd * eased));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
};

const GithubTelemetry = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const telemetryRef = useRef(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/Cal2-0'),
          fetch('https://api.github.com/users/Cal2-0/repos?sort=updated&per_page=4')
        ]);
        
        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          setProfile(profileData);
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub telemetry", error);
        // Fallback data in case of API rate limit
        setProfile({ public_repos: 42, followers: 12 });
        setRepos([
          { id: 1, name: 'Resume', html_url: '#', language: 'JavaScript', updated_at: new Date().toISOString() },
          { id: 2, name: 'Cal2-0', html_url: '#', language: 'SYS', updated_at: new Date().toISOString() },
          { id: 3, name: 'Axon', html_url: '#', language: 'Python', updated_at: new Date().toISOString() },
          { id: 4, name: 'VaidikaAI', html_url: '#', language: 'TypeScript', updated_at: new Date().toISOString() }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  useEffect(() => {
    if (!loading && telemetryRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.gh-stat-box', {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gh-dashboard',
            start: 'top 85%',
            onEnter: () => setInView(true),
          }
        });
        
      // Removed .gh-repo-row opacity animation because ScrollTrigger height jumps were causing them to stay invisible
      }, telemetryRef);
      return () => ctx.revert();
    }
  }, [loading]);

  const repoCount = useCountUp(profile?.public_repos || 0, 1500, inView);
  const followerCount = useCountUp(profile?.followers || 0, 1500, inView);

  if (loading) return null;

  return (
    <section className="gh-scene" id="telemetry" ref={telemetryRef}>
      <div className="bureau-container">
        <div className="gh-header">
          <div>
            <h2 className="gh-title">LIVE TELEMETRY</h2>
            <div className="gh-live-indicator">
              <span className="gh-live-dot" />
              LIVE
            </div>
          </div>
          <span className="gh-subtitle">GITHUB ✦ SYS.MONITOR</span>
        </div>

        <div className="gh-dashboard">
          <div className="gh-stat-box">
            <span className="gh-stat-label">PUBLIC REPOSITORIES</span>
            <span className="gh-stat-val glow-gold">{repoCount}</span>
          </div>
          <div className="gh-stat-box">
            <span className="gh-stat-label">FOLLOWERS</span>
            <span className="gh-stat-val">{followerCount}</span>
          </div>
          <div className="gh-stat-box">
            <span className="gh-stat-label">SYSTEM STATUS</span>
            <span className="gh-stat-val glow-violet">ONLINE</span>
          </div>
        </div>

        <div className="gh-heatmap-container">
          <h3 className="gh-repos-title">COMMIT TELEMETRY</h3>
          <img 
            src="https://ghchart.rshah.org/E8D5B5/Cal2-0" 
            alt="Calvin's GitHub Contribution Graph" 
            className="gh-heatmap-img"
            loading="lazy"
          />
        </div>

        <div className="gh-repos">
          <h3 className="gh-repos-title">RECENT COMMITS // ACTIVITY</h3>
          <div className="gh-repos-list">
            {repos.map(repo => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" key={repo.id} className="gh-repo-row">
                <span className="gh-repo-name">{repo.name}</span>
                <span className="gh-repo-lang">{repo.language || 'SYS'}</span>
                <span className="gh-repo-update">{new Date(repo.updated_at).toLocaleDateString()}</span>
                <span className="gh-repo-icon">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubTelemetry;
