import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import PrimaryButton from '../../components/primary-button'
import { colors, getTextGradient, fontFamilies } from '../../tokens'
import { CheckCircle } from '@solar-icons/react'

const trialPoints = [
  'Real deliverables in 2 weeks',
  'Love it? Continue into full build',
  'Not a fit? Walk away with everything',
]

/**
 * Pricing Hero Component
 * Dedicated hero for the pricing page
 */
export default function PricingHero() {
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
      aria-label="Pricing Hero"
    >
      {/* Navigation */}
      <div className="flex items-center lg:justify-start pt-lg pb-lg px-lg border-b border-dashed-clean">
        <Logo />
        <nav className="ml-auto flex flex-row gap-6 items-center" aria-label="Navigation">
          <Link to="/" className={getNavLinkClasses(false)}>
            Work
          </Link>
          <Link to="/pricing" className={getNavLinkClasses(true)}>
            Pricing
          </Link>
        </nav>
      </div>

      {/* Pricing Hero Content */}
      <div className="flex flex-col gap-5xl lg:gap-4xl mt-2xl lg:mt-0 px-lg">
        <div className="flex flex-col gap-xl">
          <motion.p
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: colors.text.tertiary, letterSpacing: '0.1em' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            Pricing
          </motion.p>
          
          <motion.h1 
            className="font-heading md:text-[32px]"
            style={{
              fontSize: '44px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: '1.1',
              ...getTextGradient('bold'),
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Clear packages for serious founders.
          </motion.h1>

          <motion.p 
            className="text-lg font-normal leading-[1.6] text-gray-600 max-w-[40ch]" 
            style={{ letterSpacing: '0em' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            No hourly rates. No scope creep. Senior execution with fixed outcomes.
          </motion.p>
        </div>

        {/* Trial Offer */}
        <motion.div 
          className="flex flex-col gap-lg p-lg rounded-lg border border-dashed-clean"
          style={{ backgroundColor: 'rgba(217, 66, 5, 0.04)' }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <p className="text-sm font-semibold" style={{ color: colors.accent }}>
            → Try the 2-week pilot for $4,500
          </p>
          <div className="flex flex-col gap-2">
            {trialPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={14} weight="Bold" style={{ color: colors.accent }} />
                <span className="text-xs font-normal" style={{ color: colors.text.secondary }}>
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="flex gap-md flex-wrap items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <PrimaryButton href="https://cal.com/modul-lab-9hvki1/sales-meeting" target="_blank" rel="noopener noreferrer">
            Book intro call
          </PrimaryButton>
        </motion.div>
      </div>

      {/* Bottom - Testimonial snippet */}
      <div className="flex flex-col mt-auto bg-transparent">
        <div 
          className="flex flex-col gap-3 border-t border-dashed-clean"
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: colors.dashboard.padding.horizontal,
            paddingRight: colors.dashboard.padding.horizontal,
          }}
        >
          <p 
            className="text-sm font-normal leading-relaxed italic"
            style={{ color: colors.text.secondary }}
          >
            "They turned my scattered idea into a real app — shipped to both stores in 8 weeks."
          </p>
          <p 
            className="text-xs font-medium"
            style={{ color: colors.text.tertiary }}
          >
            — Early-stage founder, Wellness App
          </p>
        </div>
      </div>
    </div>
  )
}
