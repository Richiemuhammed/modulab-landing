import { type ReactNode } from 'react'
import { getTextGradient, colors } from '../tokens'

interface SectionHeaderProps {
  label?: string
  title: string | ReactNode
  subtitle?: string | ReactNode
  titleSize?: 'sm' | 'base' | 'lg' | 'xl'
  className?: string
}

/**
 * Section Header Component
 * DesignMe-inspired larger typography
 */
export default function SectionHeader({ label, title, subtitle, titleSize = 'lg', className = '' }: SectionHeaderProps) {
  const titleSizeClasses = {
    sm: 'text-xl',
    base: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`.trim()}>
      {label && (
        <span 
          className="text-xs font-medium tracking-wider uppercase mb-4 inline-block" 
          style={{ 
            letterSpacing: '0.12em', 
            color: colors.text.tertiary,
            lineHeight: '1.2'
          }}
        >
          {label}
        </span>
      )}
      {typeof title === 'string' ? (
        <h2 
          className={`font-heading ${titleSizeClasses[titleSize]} font-semibold leading-tight max-w-[52ch]`}
          style={{
            ...getTextGradient('primary'),
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h2>
      ) : (
        <h2 
          className={`font-heading ${titleSizeClasses[titleSize]} font-semibold leading-tight max-w-[52ch]`}
          style={{ 
            color: colors.text.primary,
            letterSpacing: '-0.02em'
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p 
          className="text-base font-normal leading-relaxed mt-4 max-w-[52ch] mx-auto" 
          style={{ 
            color: colors.text.secondary, 
            letterSpacing: '0em',
            lineHeight: '1.6'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
