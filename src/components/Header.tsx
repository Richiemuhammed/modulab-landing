import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import Button from './ui/Button';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-grey-30 ${scrolled ? 'bg-white/30 backdrop-blur-sm' : ''}`}>
      <div className="max-w-[1320px] mx-auto flex items-center justify-between py-4 border-l border-r border-grey-30 pl-[20px] pr-[20px]">
        {/* Logo left */}
        <div className="flex items-center flex-shrink-0">
          <Logo className="h-4 w-auto" />
        </div>
        {/* Nav center (desktop) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-grey-60 font-semibold text-[14px] px-4 py-2 rounded-full transition-colors hover:bg-grey-20"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* CTA right (desktop) */}
        <div className="hidden md:flex items-center">
          <Button href="mailto:hello@modulab.studio" variant="primary" size="sm" className="ml-4 text-[14px]">Contact</Button>
        </div>
        {/* Mobile nav */}
        <div className="md:hidden flex items-center">
          <MobileNav navLinks={navLinks} contactUrl="mailto:hello@modulab.studio" />
        </div>
      </div>
    </header>
  );
};

export default Header; 