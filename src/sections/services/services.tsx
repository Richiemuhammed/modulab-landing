import { motion } from 'motion/react'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'
import { SmartphoneIcon, CodeIcon, CloudIcon, RocketIcon } from '../../components/animated-icons'

const services = [
  {
    title: 'Mobile App Design',
    description: 'Premium UI/UX for iOS + Android',
    Icon: SmartphoneIcon,
  },
  {
    title: 'React Native Development',
    description: 'Cross-platform, App Store ready',
    Icon: CodeIcon,
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable infrastructure that grows with you',
    Icon: CloudIcon,
  },
  {
    title: 'Launch Support',
    description: 'TestFlight, App Store & Play Store submission',
    Icon: RocketIcon,
  },
]

/**
 * Services Section Component
 * Japanese minimalist style with continuously animated icons
 */
export default function Services() {
  return (
    <div 
      id="services"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: Services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionHeader 
          label="What we do"
          title="End-to-end mobile app development."
          className="mb-5xl"
        />
      </motion.div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-[680px] mx-auto">
        {services.map((service, index) => {
          const Icon = service.Icon
          return (
            <motion.div 
              key={index}
              className="flex flex-col gap-2 py-xl"
              style={{ paddingRight: index % 2 === 0 ? '24px' : '0' }}
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
                <Icon 
                  size={20} 
                  style={{ color: colors.accent }}
                />
                <h3 
                  className="font-heading text-lg font-semibold tracking-tight"
                  style={{ letterSpacing: '-0.01em', color: colors.text.primary }}
                >
                  {service.title}
                </h3>
              </div>
              <p 
                className="text-sm font-normal leading-relaxed pl-[32px]"
                style={{ letterSpacing: '0em', color: colors.text.secondary }}
              >
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
