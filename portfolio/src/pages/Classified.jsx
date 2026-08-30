import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/scenes/editorial.css'; 

const Classified = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-reader-scene" style={{ backgroundColor: '#050505', backgroundImage: 'radial-gradient(circle at center, #1a0b12 0%, #050505 100%)' }}>
      <div className="bureau-container">
        
        <div className="reader-nav">
          <Link to="/" className="reader-back-btn" style={{ color: 'var(--color-gold)' }}>
            <ArrowLeft size={18} />
            ERASE HISTORY & RETURN
          </Link>
          <span className="reader-meta-tag" style={{ color: '#ff3333' }}>[ TOP SECRET ]</span>
        </div>

        <main className="reader-main">
          <header className="reader-header" style={{ borderBottom: '2px solid #ff3333', paddingBottom: '2rem' }}>
            <h1 className="reader-title" style={{ color: '#ff3333', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              DECLASSIFIED: THE OPERATIVE
            </h1>
            <p className="reader-subtitle" style={{ color: 'var(--color-silver)' }}>
              Access level verified. Konami clearance accepted.
            </p>
          </header>

          <div className="reader-content" style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ padding: '2rem', border: '1px solid #ff3333', backgroundColor: 'rgba(255,51,51,0.05)' }}>
              <h2 style={{ color: '#ff3333', marginTop: 0 }}>SUBJECT: CALVIN DSOUZA</h2>
              
              <p><strong>KNOWN ALIASES:</strong> The Architect, "That guy who builds weird AI stuff at 3 AM"</p>
              
              <p><strong>GUILTY PLEASURE:</strong> <span style={{ background: '#333', color: '#333', padding: '0 5px' }}>Redacted because it's too embarrassing</span> (Actually, it's just watching 4-hour video essays on YouTube about defunct theme parks).</p>
              
              <p><strong>WEAKNESSES:</strong> 
                <ul>
                  <li>Peer dependency conflicts in NPM</li>
                  <li>Over-engineering simple solutions</li>
                  <li>Coffee (Severe addiction, estimated 4+ cups daily)</li>
                </ul>
              </p>
              
              <p><strong>UNVERIFIED RUMORS:</strong> Reports suggest the subject once wrote a perfect regex on the first try without using StackOverflow. The Bureau considers this highly unlikely.</p>
              
              <p><strong>CURRENT OBJECTIVE:</strong> Build systems that bridge human creativity and machine intelligence, while trying not to accidentally cause the singularity.</p>
            </div>
            
            <p style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: '#ff3333' }}>
              END OF FILE. THIS MESSAGE WILL NOT SELF DESTRUCT, BUT YOU SHOULD PROBABLY LEAVE BEFORE SECURITY FINDS YOU.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Classified;
