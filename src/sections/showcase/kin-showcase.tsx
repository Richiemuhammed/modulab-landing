import { motion } from 'motion/react'
import signInImage from '../../assets/optimized/sign-in.webp'
import signIn2Image from '../../assets/optimized/sign-in2.webp'
import paywallImage from '../../assets/optimized/paywall.webp'
import getStartedImage from '../../assets/optimized/get-started.webp'
import homeImage from '../../assets/optimized/home.webp'
import dixonImage from '../../assets/optimized/dixon.webp'
import settingsImage from '../../assets/optimized/settings.webp'

/**
 * Phone Mockup Component - displays screenshot with hover animation
 */
function PhoneMockup({ delay = 0, image = signInImage }: { delay?: number; image?: string }) {
  return (
    <motion.div 
      className="flex items-center justify-center shrink-0 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div 
        className="relative rounded-[36px]" 
        style={{ 
          width: '248px', 
          height: '528px', 
          padding: '4px',
          backgroundColor: '#FAFAFA',
        }}
      >
        <img 
          src={image}
          alt="App screenshot"
          width={240}
          height={520}
          loading="lazy"
          decoding="async"
          className="w-full h-full rounded-[32px] relative z-10 object-cover"
        />
        {/* Faint shadow floor to ground the mockup */}
        <div className="absolute inset-x-0 bottom-[-12px] h-6 bg-gray-100 rounded-full blur-lg opacity-40" />
      </div>
    </motion.div>
  )
}

/**
 * Showcase 1 Component - home & dixon
 */
export function Showcase1() {
  return (
    <div className="flex flex-col sm:flex-row gap-4xl sm:gap-5xl items-center justify-center w-fit">
      <PhoneMockup delay={0} image={homeImage} />
      <PhoneMockup delay={0.15} image={dixonImage} />
    </div>
  )
}

/**
 * Showcase 2 Component - settings & sign-in
 */
export function Showcase2() {
  return (
    <div className="flex flex-col sm:flex-row gap-4xl sm:gap-5xl items-center justify-center w-fit">
      <PhoneMockup delay={0} image={settingsImage} />
      <PhoneMockup delay={0.15} image={signInImage} />
    </div>
  )
}

/**
 * Showcase 3 Component - get-started & paywall
 */
export function Showcase3() {
  return (
    <div className="flex flex-col sm:flex-row gap-4xl sm:gap-5xl items-center justify-center w-fit">
      <PhoneMockup delay={0} image={getStartedImage} />
      <PhoneMockup delay={0.15} image={paywallImage} />
    </div>
  )
}

/**
 * Showcase 4 Component - sign-in2 & home
 */
export function Showcase4() {
  return (
    <div className="flex flex-col sm:flex-row gap-4xl sm:gap-5xl items-center justify-center w-fit">
      <PhoneMockup delay={0} image={signIn2Image} />
      <PhoneMockup delay={0.15} image={homeImage} />
    </div>
  )
}
