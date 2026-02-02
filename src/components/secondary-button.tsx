import React, { type ReactNode, useRef, useEffect } from 'react'
import { Library, SquareBottomUp } from '@solar-icons/react'
import { animate } from 'animejs'
import { colors } from '../tokens/colors'

interface SecondaryButtonProps {
  href?: string
  children: ReactNode
  className?: string
  [key: string]: any
}

/**
 * Secondary Button component - Single file with Tailwind
 */
export default function SecondaryButton({ 
  href, 
  children, 
  className = '', 
  ...props 
}: SecondaryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const iconContainerRef = useRef<HTMLSpanElement>(null)
  const iconLeftRef = useRef<HTMLSpanElement>(null)
  const iconRightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const iconLeft = iconLeftRef.current
    const iconRight = iconRightRef.current
    
    if (!button || !iconLeft || !iconRight) return

    const handleMouseEnter = () => {
      // Left icon (Library) slides out to the left
      animate(iconLeft, {
        translateX: -14,
        opacity: 0,
        duration: 300,
        easing: 'easeInOutQuad'
      })
      // Right icon (SquareBottomUp) slides into position
      animate(iconRight, {
        translateX: 0,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      })
    }

    const handleMouseLeave = () => {
      // Left icon (Library) slides back into position
      animate(iconLeft, {
        translateX: 0,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      })
      // Right icon (SquareBottomUp) slides out to the right
      animate(iconRight, {
        translateX: 14,
        opacity: 0,
        duration: 300,
        easing: 'easeInOutQuad'
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const baseClasses = "inline-flex items-center w-auto pt-[12px] pr-[20px] pb-[12px] pl-[18px] rounded-lg no-underline transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] font-body text-xs font-medium leading-none cursor-pointer text-primary-600 gap-2"
  const combinedClass = `${baseClasses} ${className}`.trim()
  const buttonStyle = { background: colors.gradient.surface }

  const content = (
    <>
      <span ref={iconContainerRef} className="relative inline-flex items-center justify-center w-3.5 h-3.5 shrink-0 overflow-hidden" aria-hidden="true">
        <span ref={iconLeftRef} className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-current">
          <Library size={14} weight="Bold" />
        </span>
        <span ref={iconRightRef} className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-current" style={{ transform: 'translateX(14px)', opacity: 0 }}>
          <SquareBottomUp size={14} weight="Bold" />
        </span>
      </span>
      <span className="text-xs font-medium leading-none">{children}</span>
    </>
  )

  if (href) {
    return (
      <a ref={buttonRef as React.RefObject<HTMLAnchorElement>} className={combinedClass} style={buttonStyle} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button ref={buttonRef as React.RefObject<HTMLButtonElement>} className={combinedClass} style={buttonStyle} type="button" {...props}>
      {content}
    </button>
  )
}
