import { colors } from '../tokens/colors'

/**
 * Footer Component - Minimal, matches header style
 */
export default function Footer() {
  const linkClasses = "font-label text-xs font-light tracking-wider leading-[1.5] no-underline uppercase cursor-pointer transition-colors duration-200 text-gray-500 hover:text-gray-900"

  return (
    <footer 
      className="w-full flex items-center justify-between pt-lg pb-lg px-lg border-t border-dashed-clean"
      aria-label="Footer"
    >
      {/* Left - Copyright */}
      <span 
        className="font-label text-xs font-light tracking-wider uppercase"
        style={{ letterSpacing: '0.08em', color: colors.text.tertiary }}
      >
        © {new Date().getFullYear()} Modulab
      </span>

      {/* Right - Links */}
      <nav className="flex flex-row gap-6 items-center" aria-label="Footer navigation">
        <a href="#work" className={linkClasses} style={{ letterSpacing: '0.08em' }}>
          Work
        </a>
        <a href="#pricing" className={linkClasses} style={{ letterSpacing: '0.08em' }}>
          Pricing
        </a>
        <a 
          href="https://t.me/richiemuhammed" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={linkClasses}
          style={{ letterSpacing: '0.08em' }}
        >
          Chat with us
        </a>
      </nav>
    </footer>
  )
}
