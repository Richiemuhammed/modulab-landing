import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Logo from '../../components/logo'
import PrimaryButton from '../../components/primary-button'
import { colors } from '../../tokens'

const processSteps = [
  { number: '01', text: 'Define product scope' },
  { number: '02', text: 'Design system & UX' },
  { number: '03', text: 'Build launch-ready architecture' },
  { number: '04', text: 'Ship to App Store' },
  { number: '05', text: 'Continue as product partner' },
]

/**
 * Pricing Hero Component
 * Calm, structured positioning — product engineering leadership
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


      {/* Bottom - How Modulab Works */}
      <div className="flex flex-col mt-auto bg-transparent">
        <div 
          className="flex flex-col gap-lg border-t border-dashed-clean"
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: colors.dashboard.padding.horizontal,
            paddingRight: colors.dashboard.padding.horizontal,
          }}
        >
          <p 
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: colors.text.tertiary, letterSpacing: '0.1em' }}
          >
            How it works
          </p>
          
          <div className="flex flex-col gap-3">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 + (index * 0.08) }}
              >
                <span 
                  className="text-[10px] font-medium"
                  style={{ color: colors.text.tertiary }}
                >
                  {step.number}
                </span>
                <span 
                  className="text-sm font-normal"
                  style={{ color: colors.text.secondary }}
                >
                  {step.text}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="pt-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          >
            <PrimaryButton href="https://cal.com/modul-lab-9hvki1/sales-meeting" target="_blank" rel="noopener noreferrer">
              Book intro call
            </PrimaryButton>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
