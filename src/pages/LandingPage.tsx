import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

function LandingPage() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const principlesRef = useRef(null);
  
  const principles = [
    "Start with a real problem.",
    "Build fast, iterate faster.",
    "Ship before you're ready.",
    "Listen to users, not assumptions.",
    "Scale what works."
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!principlesRef.current) return;
      
      const rect = principlesRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      const windowCenter = windowHeight / 2;
      
      // Check if section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate which principle should be active based on scroll position
        const sectionProgress = (windowCenter - sectionTop) / sectionHeight;
        const newActive = Math.max(0, Math.min(principles.length - 1, Math.floor(sectionProgress * principles.length)));
        setActivePrinciple(newActive);
      } else {
        // Section not in view - keep first principle active
        setActivePrinciple(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [principles.length]);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <main className="max-w-[720px] mx-auto border-x border-neutral-200 px-8 py-12 min-h-screen" role="main">
        {/* Hero */}
        <motion.section variants={fadeUp} initial="hidden" animate="visible" className="space-y-4">
          <div className="mb-4">
            <img src="/src/assets/modulab.png" alt="Modulab - Product Studio" className="h-8 w-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Crafted tools for the modern web.
          </h1>
          <p className="text-base text-gray-700">
            Independent ideas. Built with care. Shared with the world.
          </p>
          <a href="https://x.com/modulab_" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-sm font-medium bg-[#3d348c] text-white rounded hover:bg-[#2d2563] hover:text-white transition-colors duration-200">say hi</a>
        </motion.section>

        {/* Products */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 space-y-2">
          <h2 className="uppercase text-xs tracking-wide text-gray-500">products</h2>
          <div className="text-base text-gray-700 space-y-2">
            <div>Flaire — scheduling for beauty pros. <a href="https://x.com/useflaire" target="_blank" rel="noopener noreferrer" className="text-[#3d348c] hover:text-[#2d2563] transition-colors">Twitter</a></div>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section ref={principlesRef} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 space-y-2">
          <h2 className="uppercase text-xs tracking-wide text-gray-500">approach</h2>
          <p className="text-base max-w-prose">Ideas are cheap. Execution isn't. We craft version ones — fast, functional, and alive.</p>
          <div className="relative pl-4 border-l-2 border-[#3d348c] space-y-3 mt-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`text-base transition-all duration-300 ${
                  index === activePrinciple 
                    ? 'text-[#3d348c] font-semibold' 
                    : 'text-gray-700'
                }`}
              >
                {principle}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Collaborate */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 space-y-2">
          <h2 className="uppercase text-xs tracking-wide text-gray-500">collaborate</h2>
          <p className="text-base max-w-prose">We collaborate with founders who have strong ideas and want to craft products that matter.</p>
          <p className="text-base max-w-prose">If the idea fits, a prototype comes first — no paperwork, no pitch deck. If the spark's real, things get serious.</p>
          <p className="text-base max-w-prose">Founders interested in our products can reach out on Twitter.</p>
          <p className="text-base max-w-prose">Currently open for one collaboration this quarter.</p>
        </motion.section>

        {/* Studio */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mt-10 space-y-2">
          <h2 className="uppercase text-xs tracking-wide text-gray-500">studio</h2>
          <div className="text-base text-gray-700 space-y-2">
            <div>Independent product studio.</div>
            <div>A team of builders collaborating with founders to craft ideas.</div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-gray-300 pt-8 mt-20 text-sm text-gray-600">
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="text-sm text-gray-600">© 2025 Modulab</div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/modulab_" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3d348c] transition-colors">Twitter</a>
              <a href="https://linkedin.com/company/modulab-work" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3d348c] transition-colors">LinkedIn</a>
              <a href="https://x.com/useflaire" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#3d348c] transition-colors">Flaire</a>
            </div>
          </div>
        </footer>
        </main>
    </div>
  );
}

export default LandingPage;
  