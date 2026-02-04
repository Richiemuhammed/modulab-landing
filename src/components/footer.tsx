import { Link } from 'react-router-dom'
import { usePostHog } from 'posthog-js/react'
import { colors } from '../tokens/colors'

/**
 * Footer Component - Minimal, matches header style
 */
export default function Footer() {
  const posthog = usePostHog()
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
        <Link to="/" className={linkClasses} style={{ letterSpacing: '0.08em' }} onClick={() => posthog?.capture('Nav Clicked', { destination: 'Work', path: '/', location: 'footer' })}>
          Work
        </Link>
        <Link to="/pricing" className={linkClasses} style={{ letterSpacing: '0.08em' }} onClick={() => posthog?.capture('Nav Clicked', { destination: 'Pricing', path: '/pricing', location: 'footer' })}>
          Pricing
        </Link>
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
