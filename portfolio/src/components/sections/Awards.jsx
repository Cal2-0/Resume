import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: 'Code Intrusion CTF',
      rank: '7TH / 200+',
      category: 'CTF',
      date: 'OCT 2025',
      rot: 4
    },
    {
      title: 'ACEathon Hackathon',
      rank: '2ND PLACE',
      category: 'HACKATHON',
      date: 'AUG 2025',
      rot: -3
    },
    {
      title: 'Enyugma CTF',
      rank: '14TH / 200+',
      category: 'CTF',
      date: 'SEP 2025',
      rot: 2
    },
    {
      title: 'CYSECK NITK CTF',
      rank: '14TH / 60+',
      category: 'CTF',
      date: 'NOV 2025',
      rot: -5
    },
    {
      title: 'Innovex Hackathon',
      rank: 'SPECIAL COMMENDATION',
      category: 'HACKATHON',
      date: 'FEB 2026',
      rot: 3
    },
    {
      title: 'SIH National',
      rank: 'PARTICIPANT',
      category: 'HACKATHON',
      date: 'DEC 2025',
      rot: -2
    }
  ];

  return (
    <section className="awards-section section container-wide">
      <h2 className="awards-title">AWARDS & HONORS</h2>
      
      <div className="awards-grid">
        {awards.map((award, idx) => (
          <div 
            key={idx} 
            className="award-certificate"
            style={{ '--rotation': `${award.rot}deg` }}
          >
            <div className="award-pin"></div>
            <div className="award-content">
              <span className="award-icon">{award.category === 'CTF' ? '🚩' : '🏆'}</span>
              <h3 className="award-name">{award.title}</h3>
              <div className="award-rank">{award.rank}</div>
              <div className="award-meta">
                <span className="award-category">{award.category}</span>
                <span className="award-date">{award.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
