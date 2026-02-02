import { motion } from 'motion/react'
import piggy from '../../assets/optimized/piggy.webp'
import piggy2 from '../../assets/optimized/piggy2.webp'
import kinMan from '../../assets/optimized/kin-man.webp'
import kinMan2 from '../../assets/optimized/kin-man2.webp'

/**
 * Individual Mascot Section Component
 * Each mascot gets its own full-width section
 */
function MascotSection({ src, alt }: { src: string; alt: string }) {
  return (
    <div 
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ 
          duration: 0.6, 
          ease: 'easeOut',
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          width={360}
          height={360}
          loading="lazy"
          decoding="async"
          className="max-w-[360px] w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  )
}

// Export individual mascots as separate components
export function Piggy1() {
  return <MascotSection src={piggy} alt="Piggy illustration" />
}

export function Piggy2() {
  return <MascotSection src={piggy2} alt="Piggy illustration 2" />
}

export function KinMan1() {
  return <MascotSection src={kinMan} alt="Kin man illustration" />
}

export function KinMan2() {
  return <MascotSection src={kinMan2} alt="Kin man illustration 2" />
}

// Default export for backwards compatibility (all mascots together)
export default function Illustrations() {
  const illustrations = [
    { src: piggy, alt: 'Piggy illustration' },
    { src: piggy2, alt: 'Piggy illustration 2' },
    { src: kinMan, alt: 'Kin man illustration' },
    { src: kinMan2, alt: 'Kin man illustration 2' },
  ]

  return (
    <div 
      id="illustrations"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '96px', paddingBottom: '96px' }}
      aria-label="Section: Illustrations"
    >
      <div className="flex flex-wrap items-center justify-center gap-4xl">
        {illustrations.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.5, 
              ease: 'easeOut', 
              delay: index * 0.15 
            }}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              width={280}
              height={280}
              loading="lazy"
              decoding="async"
              className="max-w-[280px] w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
