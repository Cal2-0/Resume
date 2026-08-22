import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/scenes/github.css';

gsap.registerPlugin(ScrollTrigger);

const GithubTelemetry = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
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
          }
        });
        
        gsap.from('.gh-repo-row', {
          x: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gh-repos',
            start: 'top 85%',
          }
        });
      }, telemetryRef);
      return () => ctx.revert();
    }
  }, [loading]);

  if (loading) return null;

  return (
    <section className="gh-scene" id="telemetry" ref={telemetryRef}>
      <div className="bureau-container">
        <div className="gh-header">
          <h2 className="gh-title">LIVE TELEMETRY</h2>
          <span className="gh-subtitle">GITHUB ✦ SYS.MONITOR</span>
        </div>

        <div className="gh-dashboard">
          <div className="gh-stat-box">
            <span className="gh-stat-label">PUBLIC REPOSITORIES</span>
            <span className="gh-stat-val glow-gold">{profile?.public_repos || 0}</span>
          </div>
          <div className="gh-stat-box">
            <span className="gh-stat-label">FOLLOWERS</span>
            <span className="gh-stat-val">{profile?.followers || 0}</span>
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
