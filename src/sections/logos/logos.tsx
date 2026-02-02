import { motion } from 'motion/react'
import kinIcon from '../../assets/kin-icon.png'

const logos = [
  { src: kinIcon, alt: 'Kin' },
]

/**
 * Logos Section Component
 * Shows logos of products/companies Modulab has built for
 */
export default function Logos() {
  return (
    <div 
      id="logos"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '64px', paddingBottom: '64px' }}
      aria-label="Section: Logos"
    >
      <div className="flex flex-wrap items-center justify-center gap-3xl">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.4, 
              ease: 'easeOut', 
              delay: index * 0.1 
            }}
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-12 w-12 object-cover rounded-xl shadow-sm border border-gray-100"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
