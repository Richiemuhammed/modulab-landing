import { motion } from 'motion/react'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'
import { ChatRound } from '@solar-icons/react'

const testimonials = [
  {
    quote: 'They turned my scattered idea into a real app — shipped to both stores in 8 weeks.',
    name: 'Sarah K.',
    role: 'Founder, Wellness App',
  },
  {
    quote: 'No chaos. No endless revisions. Just calm, focused execution.',
    name: 'Marcus T.',
    role: 'CEO, Fintech Startup',
  },
  {
    quote: 'Finally a team that understands what early-stage founders actually need.',
    name: 'James L.',
    role: 'Solo Founder',
  },
]

/**
 * Testimonials Section Component
 * Short, founder-focused quotes about clarity, speed, and quality
 */
export default function Testimonials() {
  return (
    <div 
      id="testimonials"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: Testimonials"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionHeader 
          label="From founders"
          title="What they say."
          className="mb-5xl"
        />
      </motion.div>
      
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-[900px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="flex flex-col gap-xl p-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.5, 
              ease: 'easeOut', 
              delay: index * 0.12 
            }}
          >
            <ChatRound size={24} weight="Bold" style={{ color: colors.accent, opacity: 0.4 }} />
            <p 
              className="text-base font-normal leading-relaxed"
              style={{ color: colors.text.primary }}
            >
              "{testimonial.quote}"
            </p>
            <div className="flex flex-col gap-0.5 mt-auto">
              <span 
                className="text-sm font-semibold"
                style={{ color: colors.text.primary }}
              >
                {testimonial.name}
              </span>
              <span 
                className="text-xs font-normal"
                style={{ color: colors.text.tertiary }}
              >
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
