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
        className={`p-1 rounded-[6px] focus:outline-none bg-transparent transition-all duration-200 active:bg-transparent focus:bg-transparent hover:bg-transparent`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <span className="block relative w-[18px] h-[18px]">
          <span className={`absolute left-0 top-1/2 w-[18px] h-0.5 bg-[#3b338b] rounded transition-all duration-200 ${open ? 'rotate-45 top-2.5' : '-translate-y-2'}`}></span>
          <span className={`absolute left-0 top-1/2 w-[18px] h-0.5 bg-[#3b338b] rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`absolute left-0 top-1/2 w-[18px] h-0.5 bg-[#3b338b] rounded transition-all duration-200 ${open ? '-rotate-45 top-2.5' : 'translate-y-2'}`}></span>
        </span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 z-50" style={{ top: 'calc(100% + 10px)' }}>
          <div
            className="mx-[14px] w-auto rounded-[6px] bg-white shadow-2xl border border-grey-20 p-1 flex flex-col items-center animate-dropdown"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col w-full gap-[6px] items-center">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-full text-grey-60 font-semibold text-[14px] px-4 py-2 rounded-full transition-colors hover:bg-grey-20 hover:text-[#3b338b] text-center"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-grey-60 font-semibold text-[14px] px-4 py-2 rounded-full transition-colors hover:bg-grey-20 hover:text-[#3b338b] text-center"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
          <style>{`
            @keyframes dropdown {
              from { transform: translateY(-16px) scale(0.98); opacity: 0; }
              to { transform: translateY(0) scale(1); opacity: 1; }
            }
            .animate-dropdown {
              animation: dropdown 0.18s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default MobileNav; 