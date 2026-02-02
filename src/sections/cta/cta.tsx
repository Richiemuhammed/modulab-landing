import { motion } from 'motion/react'
import PrimaryButton from '../../components/primary-button'
import SecondaryButton from '../../components/secondary-button'
import { colors } from '../../tokens/colors'
import SectionHeader from '../../components/section-header'

/**
 * CTA Section Component
 * Japanese minimalist style - calm and spacious
 */
export default function CTA() {
  return (
    <div 
      id="cta"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
    >
      <div className="flex flex-col gap-5xl items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionHeader 
            title={
              <>
                Ready to start your{' '}
                <span style={{ color: colors.accent }}>new project</span>?
              </>
            }
            subtitle="Get premium mobile app development delivered at startup speed. Schedule a call below."
            titleSize="xl"
          />
        </motion.div>
        
        {/* Generous white space around CTAs for better attention and conversion */}
        <motion.div 
          className="flex gap-md flex-wrap items-center justify-center py-xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <PrimaryButton href="https://t.me/richiemuhammed" target="_blank" rel="noopener noreferrer">
            Intro chat
          </PrimaryButton>

          <SecondaryButton 
            href="https://dribbble.com/modulab"
            target="_blank"
            rel="noopener noreferrer"
          >
            See our work
          </SecondaryButton>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="flex flex-row items-center justify-center gap-md flex-wrap">
            <span className="text-sm font-normal" style={{ color: colors.text.tertiary }}>
              Or send us an email →
            </span>
            <a 
              href="mailto:hello@modulab.work"
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.text.primary }}
            >
              hello@modulab.work
            </a>
          </div>
          
          {/* Timeline reminder */}
          <p 
            className="text-xs font-medium tracking-wider"
            style={{ color: colors.text.tertiary, letterSpacing: '0.05em' }}
          >
            Most projects ship in 6–10 weeks
          </p>
        </motion.div>
      </div>
    </div>
  )
}