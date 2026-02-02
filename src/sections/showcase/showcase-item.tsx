import { type ReactNode } from 'react'

interface ShowcaseItemProps {
  children: ReactNode
  id?: string
}

/**
 * Showcase Item Component - Calm, spacious showcase card
 * Japanese minimalist style with consistent dashed borders
 */
export default function ShowcaseItem({ children, id }: ShowcaseItemProps) {
  return (
    <div 
      id={id}
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ 
        borderRadius: '0px', 
        paddingTop: '128px', 
        paddingBottom: '128px', 
        minHeight: '600px',
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
