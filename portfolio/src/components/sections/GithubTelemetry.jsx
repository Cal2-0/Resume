import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitFork, Star, ExternalLink, Bookmark, Globe } from 'lucide-react';
import '../../styles/scenes/github.css';

gsap.registerPlugin(ScrollTrigger);

const PINNED_REPOSITORIES = [
  {
    name: "Axon",
    repoUrl: "https://github.com/Cal2-0/Axon",
    description: "On-chain behavioural forensics platform tracking illicit crypto flows with DBSCAN clustering across 13,000+ malicious addresses.",
    language: "Python",
    langColor: "#3572A5",
    stars: 28,
    forks: 6,
    tags: ["Forensics", "Blockchain", "DBSCAN"],
    liveUrl: null,
  },
  {
    name: "Sentinel-IP",
    repoUrl: "https://github.com/Cal2-0/Sentinel-IP",
    description: "Automated Linux incident response engine analyzing kernel audit logs, network anomalous bursts, and zero-day execution.",
    language: "Python",
    langColor: "#3572A5",
    stars: 19,
    forks: 4,
    tags: ["eBPF", "Linux Kernel", "Incident Response"],
    liveUrl: null,
  },
  {
    name: "Kalera",
    repoUrl: "https://github.com/betrayed1996/Kalera",
    description: "Post-quantum steganography combining NIST-standard ML-KEM-1024 lattice key encapsulation and SPHINCS+ digital signatures.",
    language: "Python / C++",
    langColor: "#f34b7d",
    stars: 34,
    forks: 8,
    tags: ["Post-Quantum", "ML-KEM-1024", "Cryptography"],
    liveUrl: null,
  },
  {
    name: "Lyra",
    repoUrl: "https://github.com/Cal2-0/guide",
    description: "Developer navigation hub indexing 640+ curated developer utilities, fuzzy search, and keyboard-first ⌘K workflows.",
    language: "JavaScript / React",
    langColor: "#f1e05a",
    stars: 42,
    forks: 11,
    tags: ["Dev Tools", "⌘K Navigation", "Vite"],
    liveUrl: "https://thelyraapp.netlify.app/",
  },
  {
    name: "SecureCI",
    repoUrl: "https://github.com/Danish4h-135/SecureCI",
    description: "GitHub Actions supply-chain security analyzer detecting dependency hijacking, secret leaks, and compromised runners.",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 23,
    forks: 5,
    tags: ["AppSec", "CI/CD", "Supply Chain"],
    liveUrl: null,
  },
  {
    name: "OuchMyBrain.io",
    repoUrl: "https://github.com/ACEathon-2025/Team-39",
    description: "AI-powered multimodal education engine converting lecture notes into smart flashcards and audio synthesis. 🥈 2nd Place ACEathon.",
    language: "Python / React",
    langColor: "#61dafb",
    stars: 31,
    forks: 9,
    tags: ["OCR", "OpenAI", "ElevenLabs"],
    liveUrl: null,
  },
  {
    name: "MassEd.ex + NetScope X",
    repoUrl: "https://github.com/Cal2-0/Projects",
    description: "Dual-engine crowd density computer vision (YOLOv8) fused with raw-packet device discovery for high-density safety management.",
    language: "Python / C",
    langColor: "#3572A5",
    stars: 16,
    forks: 3,
    tags: ["YOLOv8", "Computer Vision", "Scapy"],
    liveUrl: null,
  },
  {
    name: "VaidikaAI",
    repoUrl: "https://github.com/NITHINKR06/Qwerty201_Protothon",
    description: "Multilingual offline clinical triage platform prioritizing emergency patients via contextual heuristic extraction.",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 21,
    forks: 4,
    tags: ["Healthcare AI", "Triage", "LLMs"],
    liveUrl: null,
  }
];

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
          fetch('https://api.github.com/users/Cal2-0/repos?sort=updated&per_page=6')
        ]);
        
        if (profileRes.ok && reposRes.ok) {
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          setProfile(profileData);
          setRepos(reposData);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub telemetry", error);
        setProfile({ public_repos: 42, followers: 12 });
        setRepos([
          { id: 1, name: 'Axon', html_url: 'https://github.com/Cal2-0/Axon', language: 'Python', updated_at: new Date().toISOString() },
          { id: 2, name: 'Sentinel-IP', html_url: 'https://github.com/Cal2-0/Sentinel-IP', language: 'Python', updated_at: new Date().toISOString() },
          { id: 3, name: 'guide', html_url: 'https://github.com/Cal2-0/guide', language: 'JavaScript', updated_at: new Date().toISOString() },
          { id: 4, name: 'portfolio', html_url: 'https://github.com/Cal2-0/Resume', language: 'JavaScript', updated_at: new Date().toISOString() }
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
        {/* HEADER */}
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

        {/* METRICS DASHBOARD */}
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

        {/* PINNED REPOSITORIES // CORE BUILDS */}
        <div className="gh-pinned-section">
          <div className="gh-section-subhead">
            <h3 className="gh-repos-title">
              <Bookmark size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: 'var(--color-gold)' }} />
              PINNED REPOSITORIES // CORE ARSENAL
            </h3>
            <a 
              href="https://github.com/Cal2-0?tab=repositories" 
              target="_blank" 
              rel="noreferrer" 
              className="gh-view-all-link"
            >
              VIEW ALL ON GITHUB ↗
            </a>
          </div>

          <div className="gh-pinned-grid">
            {PINNED_REPOSITORIES.map((repo, idx) => (
              <div key={idx} className="gh-pinned-card">
                <div className="gh-pinned-card-header">
                  <a href={repo.repoUrl} target="_blank" rel="noreferrer" className="gh-pinned-title">
                    <span className="gh-repo-icon-symbol">🗂️</span>
                    <span className="gh-repo-name-text">{repo.name}</span>
                  </a>
                  <span className="gh-public-badge">Public</span>
                </div>

                <p className="gh-pinned-desc">{repo.description}</p>

                <div className="gh-pinned-tags">
                  {repo.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="gh-pinned-tag">{tag}</span>
                  ))}
                </div>

                <div className="gh-pinned-footer">
                  <div className="gh-pinned-meta">
                    <span className="gh-lang-indicator">
                      <span className="gh-lang-dot" style={{ backgroundColor: repo.langColor }} />
                      {repo.language}
                    </span>
                    <span className="gh-meta-item">
                      <Star size={13} /> {repo.stars}
                    </span>
                    <span className="gh-meta-item">
                      <GitFork size={13} /> {repo.forks}
                    </span>
                  </div>

                  <div className="gh-pinned-actions">
                    {repo.liveUrl && (
                      <a href={repo.liveUrl} target="_blank" rel="noreferrer" className="gh-live-btn" title="Launch Live Demo">
                        <Globe size={12} /> LIVE DEMO
                      </a>
                    )}
                    <a href={repo.repoUrl} target="_blank" rel="noreferrer" className="gh-code-btn" title="View Source Code">
                      <ExternalLink size={12} /> CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMMIT TELEMETRY HEATMAP */}
        <div className="gh-heatmap-container">
          <h3 className="gh-repos-title">COMMIT TELEMETRY</h3>
          <img 
            src="https://ghchart.rshah.org/E8D5B5/Cal2-0" 
            alt="Calvin's GitHub Contribution Graph" 
            className="gh-heatmap-img"
            loading="lazy"
          />
        </div>

        {/* RECENT COMMITS STREAM */}
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
