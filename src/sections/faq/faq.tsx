import { useState } from 'react'
import { motion } from 'motion/react'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'

// Simple ChevronDown SVG icon component
const ChevronDownIcon = ({ size = 14, color, isOpen }: { size?: number; color: string; isOpen: boolean }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease-in-out',
      flexShrink: 0,
    }}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

/**
 * FAQ Section Component
 * Premium FAQ accordion with high trust, no noise
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Do you build for iOS and Android?',
      answer: 'Yes — Modulab builds mobile apps with **React Native**, shipped for **iOS + Android**.',
    },
    {
      question: 'Do you only work with new startups?',
      answer: 'Mostly early-stage founders, yes — but we also take on **existing apps** that need a redesign, refactor, or new features.',
    },
    {
      question: 'What\'s included in "launch support"?',
      answer: 'Clean release process: **TestFlight / internal testing**, bug fixes, and **App Store / Play Store submission support**.',
    },
    {
      question: 'Do you take equity?',
      answer: 'Not currently. Modulab is a **paid studio** (fixed packages + retainer).',
    },
    {
      question: 'How do we start?',
      answer: 'Send a message or book a quick call. If we\'re a fit, we\'ll send a **scope + timeline** within 48 hours.',
    },
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div 
      id="faq"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: FAQ"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionHeader 
          label="FAQ"
          title="Common questions, clear answers."
          className="mb-5xl"
        />
      </motion.div>

      {/* FAQ Accordion */}
      <div className="flex flex-col gap-0 max-w-[680px] mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          
          return (
            <motion.div 
              key={index} 
              className="flex flex-col"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
            >
              {/* Accordion Item */}
              <button
                onClick={() => toggleItem(index)}
                className="flex items-center justify-between w-full py-xl text-left cursor-pointer hover:opacity-70 transition-opacity duration-150"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 
                  className="font-heading text-lg font-medium tracking-tight flex-1 pr-md" 
                  style={{ letterSpacing: '-0.01em', color: colors.text.primary }}
                >
                  {faq.question}
                </h3>
                <ChevronDownIcon size={16} color={colors.text.tertiary} isOpen={isOpen} />
              </button>

              {/* Accordion Content */}
              <div
                id={`faq-answer-${index}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="pb-xl">
                  <p 
                    className="text-sm font-normal leading-relaxed" 
                    style={{ letterSpacing: '0em', color: colors.text.secondary }}
                    dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                  />
                </div>
              </div>

              {/* Divider */}
              {index < faqs.length - 1 && (
                <div className="w-full h-px border-t border-dashed-clean"></div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
