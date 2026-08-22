import React from 'react';

export const HeroCinematic = ({ title, subtitle, image }) => (
  <div className="hero-cinematic" style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="hero-content">
      <h1 className="article-title">{title}</h1>
      <p className="article-subtitle">{subtitle}</p>
    </div>
  </div>
);

export const HeroTechnical = ({ title, subtitle }) => (
  <div className="hero-technical">
    <div className="hero-content">
      <h1 className="article-title">{title}</h1>
      <p className="article-subtitle">{subtitle}</p>
    </div>
  </div>
);

export const HeroEditorial = ({ title, subtitle }) => (
  <div className="hero-editorial">
    <h1 className="article-title">{title}</h1>
    <p className="article-subtitle">{subtitle}</p>
  </div>
);
