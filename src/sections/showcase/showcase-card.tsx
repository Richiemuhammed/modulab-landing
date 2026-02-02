import { type ReactNode } from 'react'
import { colors } from '../../tokens/colors'

/**
 * Showcase Card Component - Single file with Tailwind
 */

interface ShowcaseCardProps {
  children?: ReactNode
  className?: string
}

export default function ShowcaseCard({ 
  children, 
  className = '' 
}: ShowcaseCardProps) {
  return (
    <div 
      className={`relative w-full box-border border border-dashed border-gray-200 p-3xl bg-white ${className}`.trim()}
      style={{ borderRadius: '0px' }}
    >
      {children}
    </div>
  )
}
