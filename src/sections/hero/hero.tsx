import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import PrimaryButton from '../../components/primary-button'
import SecondaryButton from '../../components/secondary-button'
import { colors, getTextGradient, fontFamilies } from '../../tokens'
import { UserCircle, Calendar, CheckCircle, Bolt, ShieldCheck, UsersGroupRounded } from '@solar-icons/react'

const deliverItems = [
  { icon: UserCircle, text: 'Founder-led studio' },
  { icon: CheckCircle, text: 'App Store ready' },
  { icon: Calendar, text: 'Limited slots (1–2/month)' },
  { icon: Bolt, text: 'Fast performance' },
  { icon: ShieldCheck, text: 'Crash-free code' },
  { icon: UsersGroupRounded, text: 'Built for first users' },
]

/**
 * Hero Component - Single file with Tailwind
 * Converted from hero.jsx + hero.css
 */
export default function Hero() {
  const getNavLinkClasses = (isActive: boolean) => {
    const baseClasses = "font-label text-xs font-light tracking-wider leading-[1.5] no-underline uppercase cursor-pointer transition-colors duration-200"
    
    if (isActive) {
      return `${baseClasses} text-gray-900`
    }
    
    return `${baseClasses} text-gray-500 hover:text-gray-900`
  }

  return (
    <div 
      className="w-full flex flex-col flex-1 justify-start gap-[72px] lg:gap-[64px] bg-transparent border-r border-dashed-clean" 
      aria-label="Hero"
    >
      <div className="flex items-center lg:justify-start pt-lg pb-lg px-lg border-b border-dashed-clean">
        <Logo />
        <nav className="ml-auto flex flex-row gap-6 items-center" aria-label="Navigation">
          <Link to="/" className={getNavLinkClasses(true)}>
            Work
          </Link>
          <Link to="/pricing" className={getNavLinkClasses(false)}>
            Pricing
          </Link>
        </nav>
      </div>

      <div className="flex flex-col gap-5xl lg:gap-4xl mt-2xl lg:mt-0 px-lg">
        <div className="flex flex-col gap-xl">
          <motion.h1 
            className="font-heading md:text-[36px]"
            style={{
              fontSize: '52px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: '1.05',
              ...getTextGradient('bold'),
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            We build <span style={{ color: colors.accent }}>mobile apps</span> for early-stage founders.
          </motion.h1>

          <motion.p 
            className="text-xl font-normal leading-[1.5] text-gray-600 max-w-[44ch]" 
            style={{ letterSpacing: '0em' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            Launch-ready systems and premium UI/UX - so your first users stay.
          </motion.p>
        </div>

        <div className="flex flex-col gap-xl">
          <motion.div 
            className="flex gap-md flex-wrap items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <PrimaryButton href="https://t.me/richiemuhammed" target="_blank" rel="noopener noreferrer">
              Chat with us
            </PrimaryButton>

            <SecondaryButton href="https://cal.com/modul-lab-9hvki1/sales-meeting" target="_blank" rel="noopener noreferrer">
              Book a 15-min call
            </SecondaryButton>
          </motion.div>
          
          {/* What we deliver - staggered animation */}
          <div className="flex flex-col gap-4 pt-xl">
            <div className="grid grid-cols-2 gap-3">
              {deliverItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: 'easeOut', 
                      delay: 0.4 + (index * 0.08) 
                    }}
                  >
                    <Icon size={16} weight="BoldDuotone" style={{ color: colors.text.tertiary }} />
                    <span className="text-xs font-medium" style={{ color: colors.text.primary }}>{item.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom header - pricing + availability */}
      <div className="flex flex-col mt-auto bg-transparent">
        <div 
          className="flex items-center justify-between border-t border-dashed-clean"
          style={{
            paddingTop: colors.dashboard.padding.vertical,
            paddingBottom: colors.dashboard.padding.vertical,
            paddingLeft: colors.dashboard.padding.horizontal,
            paddingRight: colors.dashboard.padding.horizontal,
          }}
        >
          <span 
            className="text-[11px] font-normal tracking-wider uppercase" 
            style={{ 
              letterSpacing: '0.15em',
              color: colors.text.label,
            }}
          >
            Starting at
          </span>
          <span 
            className="text-xl font-light tracking-tight" 
            style={{ 
              fontFamily: fontFamilies.heading,
              color: colors.text.primary,
            }}
          >
            $9,000<span className="text-xs font-normal" style={{ color: colors.text.secondary }}>/month</span>
          </span>
        </div>
        {/* Full-width availability banner */}
        <div 
          className="flex items-center justify-center gap-2 py-2.5"
          style={{ backgroundColor: colors.accent }}
        >
          <span 
            className="inline-block w-1.5 h-1.5 rounded-full bg-white"
            style={{ animation: 'ripple 2s ease-in-out infinite' }}
          />
          <span 
            className="text-[9px] font-semibold text-white tracking-wider uppercase"
            style={{ letterSpacing: '0.12em' }}
          >
            Booking for Feb '26 — Limited availability
          </span>
        </div>
      </div>
    </div>
  )
}
