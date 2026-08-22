import React from 'react';

export const StickyNote = ({ 
  children, 
  color = 'yellow',
  rotation = -3,
  className = ''
}) => {
  const colors = {
    yellow: '#FFFACD',
    pink: '#FFB3D9',
    mint: '#B3FFB3',
    blue: '#B3D9FF'
  };

  return (
    <div 
      className={`sticky-note ${className}`}
      style={{ 
        '--bg': colors[color] || colors.yellow,
        '--rotation': `${rotation}deg`
      }}
    >
      <div className="sticky-folded-corner"></div>
      <div className="sticky-content">
        {children}
      </div>
    </div>
  );
};
