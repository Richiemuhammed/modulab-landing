import React, { useState } from 'react';

interface MobileNavProps {
  navLinks: { label: string; href: string }[];
  contactUrl: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ navLinks, contactUrl }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#3b338b]"
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
      >
        <svg className="h-6 w-6 text-[#3b338b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40" onClick={() => setOpen(false)}>
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <button className="self-end mb-4" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg className="h-6 w-6 text-[#3b338b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-[#3b338b] hover:text-[#f8bc04] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-[#f8bc04] text-[#3b338b] rounded font-semibold shadow hover:bg-[#ffe082] transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MobileNav; 