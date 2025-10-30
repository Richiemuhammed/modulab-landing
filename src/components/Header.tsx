import React from 'react';
import profileImg from '../assets/profile.png';
import { IconBrandTwitter } from '@tabler/icons-react';

interface HeaderProps {
  name?: string;
}

const Header: React.FC<HeaderProps> = ({ name = 'Richie' }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b10]/70 bg-[#0b0b10]/90 border-b border-[#1b1c22]">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={profileImg} alt="Richie profile" className="h-7 w-7 rounded-full ring-1 ring-[#1b1c22] object-cover" />
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-gray-400 hover:text-gray-200 transition-colors underline-reveal">Projects</a>
          <a href="#notes" className="text-gray-400 hover:text-gray-200 transition-colors underline-reveal">Notes</a>
          <a href="#now" className="text-gray-400 hover:text-gray-200 transition-colors underline-reveal">Now</a>
        </nav>
        <a
          href="https://x.com/richie_muhammed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
        >
          <IconBrandTwitter size={16} />
          <span className="hidden sm:inline">say hello</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

 