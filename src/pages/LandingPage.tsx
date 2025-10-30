import { motion, type Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IconBrandTwitter, IconBrandLinkedin, IconExternalLink, IconMail } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import Header from '../components/Header';
import { Helmet } from 'react-helmet-async';
import profileImg from '../assets/profile.png';
import flaireImage from '../assets/flaire.jpg';
import pawporterLogo from '../assets/pawporterlogo.jpg';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.1, 0.36, 1] }
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: { duration: 0.3, ease: [0.22, 0.1, 0.36, 1] }
  }
};

function LandingPage() {
  const [activeSection, setActiveSection] = useState<'projects' | 'notes' | 'now' | null>(null);
  const projects = [
    {
      title: "Pawporter",
      description:
        "Pet transportation platform connecting owners with professional pet-friendly drivers through easy booking and transparent pricing.",
      status: "Ongoing",
      link: "https://x.com/pawporter_",
      logo: pawporterLogo,
    },
    {
      title: "Flaire",
      description:
        "All-in-one business management platform for beauty professionals — appointments, clients, and operations in one place.",
      status: "Ongoing",
      link: "https://x.com/useflaire",
      logo: flaireImage,
    },
  ];

  const notes = [
    {
      title: "Building in Public",
      date: "Dec 2024",
      excerpt: "Thoughts on sharing the journey of product building..."
    },
    {
      title: "Design Systems That Scale",
      date: "Nov 2024", 
      excerpt: "Lessons learned from creating consistent design systems..."
    },
    {
      title: "The Art of Shipping Fast",
      date: "Oct 2024",
      excerpt: "How to balance speed with quality in product development..."
    }
  ];

  const currentFocus = [
    "AI-powered design tools",
    "Design system architecture", 
    "Rapid prototyping workflows",
    "Building sustainable products"
  ];

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects' || hash === 'notes' || hash === 'now') {
        setActiveSection(hash as 'projects' | 'notes' | 'now');
      } else {
        setActiveSection(null);
      }
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b10] to-[#0a0a0d] text-gray-100">
      <Header name="Richie" />
      <Helmet>
        <title>Richie’s Sandbox — Product Builder & Maker</title>
        <meta name="description" content="Richie Muhammed — exploring ideas, building tools, learning in public." />
        <meta property="og:title" content="Richie’s Sandbox — Product Builder & Maker" />
        <meta property="og:description" content="Exploring ideas, building tools, learning in public." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={profileImg} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Richie’s Sandbox — Product Builder & Maker" />
        <meta name="twitter:description" content="Exploring ideas, building tools, learning in public." />
        <meta name="twitter:image" content={profileImg} />
        <link rel="icon" href={profileImg} />
      </Helmet>
      <main className="max-w-4xl mx-auto px-6 py-16" role="main">
        {/* Hero Section */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          animate="visible" 
          className="mb-20"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-100 mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Richie Muhammed
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-2 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Builds digital products
          </motion.p>
          <motion.p 
            className="text-[15px] text-gray-300 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ✻ Exploring AI, design systems, and fast product execution ✻
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <IconMapPin size={14} className="text-gray-400" />
            F.C.T
          </motion.p>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="mb-20"
        >
          <h2 id="projects" className={`scroll-mt-20 text-2xl font-semibold text-gray-100 mb-8 underline-reveal ${activeSection==='projects' ? 'active-underline' : ''}`}>Projects</h2>
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group block w-full"
              >
                <div className="bg-[#111216] rounded-2xl p-6 border border-[#1b1c22] transition-transform duration-300">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} cover`} className="w-full h-40 rounded-xl object-cover mb-4" />
                  ) : project.logo ? (
                    <div className="w-[42px] h-[42px] rounded-lg bg-[#1a1b20] mb-4 flex items-center justify-center overflow-hidden transition-transform duration-150 group-hover:-translate-y-px group-hover:scale-[1.005]">
                      <img src={project.logo} alt={`${project.title} logo`} className="w-[42px] h-[42px] object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-[#1a1b20] mb-4" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {project.status}
                    </span>
                    <IconExternalLink size={16} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Notes Section */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="mb-20"
        >
          <h2 id="notes" className={`scroll-mt-20 text-2xl font-semibold text-gray-100 mb-8 underline-reveal ${activeSection==='notes' ? 'active-underline' : ''}`}>Notes</h2>
          <div className="space-y-6">
            {notes.map((note, index) => (
              <motion.article
                key={note.title}
                variants={fadeUp}
                className="bg-[#111216] rounded-2xl p-6 border border-[#1b1c22] transition-transform duration-300 cursor-pointer hover:-translate-y-px hover:scale-[1.005]"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-100 hover:text-gray-300 transition-colors">
                    {note.title}
                  </h3>
                  <span className="text-xs text-gray-400 bg-[#1a1b20] rounded-full px-2 py-0.5 font-mono">{note.date}</span>
                </div>
                <p className="text-gray-400">{note.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Now Section */}
        <motion.section 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="mb-20"
        >
          <h2 id="now" className={`scroll-mt-20 text-2xl font-semibold text-gray-100 mb-8 underline-reveal ${activeSection==='now' ? 'active-underline' : ''}`}>Now</h2>
          <div className="bg-[#111216] rounded-2xl p-6 shadow-sm border border-[#1b1c22]">
            <p className="text-gray-400 mb-4">Currently exploring:</p>
            <div className="flex flex-wrap gap-2">
              {currentFocus.map((item, index) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-[#1a1b20] text-gray-300 rounded-full text-sm font-medium tag-shimmer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

      </main>

      {/* Footer (full width) */}
      <footer className="w-full border-t border-[#1b1c22]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#292a33] to-transparent" />
          <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="order-2 sm:order-1 flex flex-col items-start gap-1">
            <span>© 2025 Richie Muhammed</span>
          </div>
          <span className="order-1 sm:order-2 text-gray-400">
            Just crafted with good hands
          </span>
          <div className="order-3 flex items-center gap-3">
            <a 
              href="https://x.com/richie_muhammed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <IconBrandTwitter size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/richie-muhammed-10591a242/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} />
            </a>
            <a 
              href="mailto:richiemuhammed@gmail.com" 
              className="text-gray-500 hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <IconMail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
  