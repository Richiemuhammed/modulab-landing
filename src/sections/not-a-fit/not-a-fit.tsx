import { motion } from 'motion/react'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'
import { CloseCircle } from '@solar-icons/react'

const notAFitItems = [
  'You want 50 features in v1',
  'You\'re looking for the cheapest option',
  'You need unlimited daily revisions',
  'You don\'t have decision authority',
  'You want to micromanage execution',
]

/**
 * Not A Fit Section Component
 * Filters out bad-fit clients, builds trust with good ones
 */
export default function NotAFit() {
  return (
    <div 
      id="not-a-fit"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: Not A Fit"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionHeader 
          label="Honest take"
          title="We're probably not a fit if..."
          subtitle="We protect our focus to deliver quality. This helps us both."
          className="mb-5xl"
        />
      </motion.div>
      
      {/* Not a fit items */}
      <div className="flex flex-col gap-md max-w-[520px] mx-auto">
        {notAFitItems.map((item, index) => (
          <motion.div 
            key={index}
            className="flex items-center gap-3 py-md"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ 
              duration: 0.4, 
              ease: 'easeOut', 
              delay: index * 0.08 
            }}
          >
            <CloseCircle size={18} weight="Bold" style={{ color: colors.text.tertiary }} />
            <span 
              className="text-base font-normal"
              style={{ color: colors.text.secondary }}
            >
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Positive flip */}
      <motion.div 
        className="mt-5xl pt-5xl border-t border-dashed-clean max-w-[520px] mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      >
        <p 
          className="text-base font-medium"
          style={{ color: colors.text.primary }}
        >
          But if you want a focused team that ships quality without chaos —
        </p>
        <p 
          className="text-base font-medium mt-1"
          style={{ color: colors.accent }}
        >
          we should talk.
        </p>
      </motion.div>
    </div>
  )
}
