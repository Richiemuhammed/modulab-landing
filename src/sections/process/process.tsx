import { motion } from 'motion/react'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'
import { ClipboardText, Settings, Code, Rocket } from '@solar-icons/react'

const processSteps = [
  {
    icon: ClipboardText,
    stage: 'Product Definition',
    description: 'We align on scope, users, and outcomes — so we build the right thing.',
  },
  {
    icon: Settings,
    stage: 'UX & System Design',
    description: 'Clean architecture that scales beyond v1. No design debt.',
  },
  {
    icon: Code,
    stage: 'Build & Ship',
    description: 'Production-ready code, not prototypes. Real apps, real stores.',
  },
  {
    icon: Rocket,
    stage: 'Post-Launch Support',
    description: 'We don\'t disappear. Bug fixes, iterations, and guidance included.',
  },
]

/**
 * Process Section Component
 * Shows how Modulab works - reduces perceived risk for founders
 */
export default function Process() {
  return (
    <div 
      id="process"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: Process"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionHeader 
          label="How we work"
          title="From idea to shipped app."
          subtitle="A calm, structured process that reduces risk and keeps you in control."
          className="mb-5xl"
        />
      </motion.div>
      
      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl max-w-[720px] mx-auto">
        {processSteps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div 
              key={index}
              className="flex flex-col gap-3 p-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                ease: 'easeOut', 
                delay: index * 0.1 
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colors.accent}15` }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{
                      duration: 2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <Icon size={18} weight="BoldDuotone" style={{ color: colors.accent }} />
                  </motion.div>
                </div>
                <span 
                  className="text-xs font-medium tracking-wider uppercase"
                  style={{ letterSpacing: '0.1em', color: colors.text.tertiary }}
                >
                  Step {index + 1}
                </span>
              </div>
              <h3 
                className="font-heading text-lg font-semibold tracking-tight"
                style={{ letterSpacing: '-0.01em', color: colors.text.primary }}
              >
                {step.stage}
              </h3>
              <p 
                className="text-sm font-normal leading-relaxed"
                style={{ letterSpacing: '0em', color: colors.text.secondary }}
              >
                {step.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
