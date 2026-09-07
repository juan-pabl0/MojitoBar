import React from 'react';

const GradientText = ({
  children,
  className = '',
  colors = ['#e7d393', '#ffffff', '#74d99f', '#e7d393'],
  animationSpeed = 6,
  showBorder = false,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center font-modern-negra ${
        showBorder
          ? 'py-1 px-3 rounded-full border border-white/20 backdrop-blur-sm'
          : ''
      } ${className}`}
    >
      <span
        className="inline-block animate-gradient-text"
        style={gradientStyle}
      >
        {children}
      </span>
    </span>
  );
};

export default GradientText;

