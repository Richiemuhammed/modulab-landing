import React from 'react';
import logoImg from '../assets/modulab.png';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', style, onClick }) => {
  return (
    <a href="/" onClick={onClick} className={className} style={style} aria-label="Modulab Home">
      <img src={logoImg} alt="Modulab Logo" className="h-8 w-auto" />
    </a>
  );
};

export default Logo; 