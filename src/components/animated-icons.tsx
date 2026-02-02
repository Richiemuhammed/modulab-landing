import { motion } from 'motion/react'
import { forwardRef, type HTMLAttributes } from 'react'

interface AnimatedIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

/**
 * Animated Smartphone Icon - for Mobile App Design
 * Loops continuously
 */
export const SmartphoneIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
          <motion.rect
            width="14"
            height="20"
            x="5"
            y="2"
            rx="2"
            ry="2"
            animate={{
              rotate: [0, -3, 3, -3, 0],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
          <path d="M12 18h.01" />
        </svg>
      </div>
    )
  }
)
SmartphoneIcon.displayName = 'SmartphoneIcon'

/**
 * Animated Code Icon - for React Native Development
 * Loops continuously
 */
export const CodeIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
          <motion.polyline
            points="16 18 22 12 16 6"
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
          <motion.polyline
            points="8 6 2 12 8 18"
            animate={{
              x: [0, -2, 0],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        </svg>
      </div>
    )
  }
)
CodeIcon.displayName = 'CodeIcon'

/**
 * Animated Cloud Icon - for Backend & APIs
 * Loops continuously
 */
export const CloudIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
          <motion.path
            d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
          <motion.g
            animate={{
              y: [0, 2, 0],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <path d="M12 13v6" />
            <path d="m9 16 3 3 3-3" />
          </motion.g>
        </svg>
      </div>
    )
  }
)
CloudIcon.displayName = 'CloudIcon'

/**
 * Animated Rocket Icon - for Launch Support
 * Loops continuously
 */
export const RocketIcon = forwardRef<HTMLDivElement, AnimatedIconProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
          <motion.g
            animate={{
              y: [0, -2, 0],
              x: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </motion.g>
        </svg>
      </div>
    )
  }
)
RocketIcon.displayName = 'RocketIcon'
