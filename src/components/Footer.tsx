import React from 'react';
import Logo from './Logo';

const navLinks = [
  { label: 'FAQS', href: '#faq' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: 'https://cal.com/richie-muhammed-vwayuh' },
];

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/', icon: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.7-.02-1.36-.21-1.94-.53v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 5.1a8.36 8.36 0 0 1-2.54.7z"/></svg>
  ) },
  { label: 'GitHub', href: 'https://github.com/', icon: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
  ) },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
  ) },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-grey-70 font-semibold text-[16px] px-4 py-2 rounded-full transition-colors hover:bg-grey-20 hover:text-[#242424]"
  >
    {children}
  </a>
);

const Footer: React.FC = () => (
  <footer className="text-[#242424] pt-12 px-4 border-t border-grey-30 w-full flex flex-col" style={{ borderTopWidth: '1px', borderColor: '#e5e7eb' }}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 w-full">
      {/* Logo and tagline */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Logo className="h-5 mb-2" />
        <span className="text-sm text-[#242424]">A studio for bold ideas.</span>
      </div>
      {/* Nav links */}
      <nav className="flex flex-col items-center gap-3 md:gap-3 md:flex-row md:justify-center">
        {navLinks.map(link => (
          <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
        ))}
      </nav>
      {/* Socials */}
      <div className="flex justify-center md:justify-end gap-3 mt-6 md:mt-0">
        {socials.map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center"
            style={{ fontSize: '16px', borderRadius: '4px', color: 'white', background: '#242424' }}
          >
            {React.cloneElement(social.icon, { className: 'w-[14px] h-[14px]', style: { color: 'white' } })}
          </a>
        ))}
      </div>
    </div>
    <div className="border-t border-grey-30 mt-8 w-full"></div>
    <div className="mt-4 mb-[20px] text-center text-[14px] font-medium text-grey-60 tracking-tight">
      © {new Date().getFullYear()} Modulab. Built with <span className="text-[#f44336]" role="img" aria-label="love">♥</span> by Modulab.
    </div>
  </footer>
);

export default Footer; 