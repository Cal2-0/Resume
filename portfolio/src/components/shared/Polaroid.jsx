import React from 'react';

export const Polaroid = ({ 
  image, 
  caption, 
  rotation = 0,
  size = 'medium',
  className = ''
}) => {
  const sizes = {
    small: 'max-w-[16rem]',    // ~256px
    medium: 'max-w-[20rem]',   // ~320px
    large: 'max-w-[24rem]'     // ~384px
  };

  return (
    <div 
      className={`polaroid ${className}`}
      style={{ '--rotation': `${rotation}deg`, maxWidth: size === 'small' ? '256px' : size === 'large' ? '384px' : '320px' }}
    >
      <div className="tape"></div>
      <div className="polaroid-image-container">
        {image ? (
          <img src={image} alt={caption} className="polaroid-img" loading="lazy" />
        ) : (
          <div className="polaroid-placeholder" />
        )}
      </div>
      {caption && <p className="polaroid-caption">{caption}</p>}
    </div>
  );
};
