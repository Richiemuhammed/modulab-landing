import React, { type ReactNode, useRef, useEffect } from 'react'
import { CalendarMark } from '@solar-icons/react'
import { animate } from 'animejs'
import { usePostHog } from 'posthog-js/react'
import { colors } from '../tokens/colors'

interface PrimaryButtonProps {
  href?: string
  children: ReactNode
  className?: string
  trackLabel?: string
  disableHover?: boolean
  [key: string]: any
}

/**
 * Primary Button component - Single file with Tailwind
 */
export default function PrimaryButton({ 
  href, 
  children, 
  className = '', 
  trackLabel,
  disableHover = false,
  ...props 
}: PrimaryButtonProps) {
  const posthog = usePostHog()
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const iconContainerRef = useRef<HTMLSpanElement>(null)
  const iconTopRef = useRef<HTMLSpanElement>(null)
  const iconBottomRef = useRef<HTMLSpanElement>(null)

  const handleClick = () => {
    const label = trackLabel || (typeof children === 'string' ? children : 'Primary CTA')
    posthog?.capture('CTA Clicked', { cta_label: label, cta_type: 'primary' })
  }

  useEffect(() => {
    if (disableHover) return
    
    const button = buttonRef.current
    const iconTop = iconTopRef.current
    const iconBottom = iconBottomRef.current
    
    if (!button || !iconTop || !iconBottom) return

    const handleMouseEnter = () => {
      // Top icon slides up and disappears
      animate(iconTop, {
        translateY: -14,
        opacity: 0,
        duration: 300,
        easing: 'easeInOutQuad'
      })
      // Bottom icon slides into position
      animate(iconBottom, {
        translateY: 0,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      })
    }

    const handleMouseLeave = () => {
      // Top icon slides back into position
      animate(iconTop, {
        translateY: 0,
        opacity: 1,
        duration: 300,
        easing: 'easeInOutQuad'
      })
      // Bottom icon slides down and disappears
      animate(iconBottom, {
        translateY: 14,
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
  }, [disableHover])

  const baseClasses = "group relative inline-flex items-center justify-center pt-[12px] pr-[20px] pb-[12px] pl-[18px] min-h-[38px] rounded-lg overflow-hidden no-underline transition-all duration-200 ease-out shadow-[0_2px_4px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98] font-body text-xs font-medium leading-none cursor-pointer text-white gap-2 w-fit outline-none focus:outline-none focus-visible:outline-none border-0"
  const combinedClass = `${baseClasses} ${className}`.trim()
  const buttonStyle = { background: colors.gradient.primary }

  const content = (
    <>
      <span ref={iconContainerRef} className="relative inline-flex items-center justify-center w-3.5 h-3.5 shrink-0 overflow-hidden" aria-hidden="true">
        <span ref={iconTopRef} className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-current">
          <CalendarMark size={14} weight="Bold" />
        </span>
        <span ref={iconBottomRef} className="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-current" style={{ transform: 'translateY(14px)', opacity: 0 }}>
          <CalendarMark size={14} weight="Bold" />
        </span>
      </span>
      <span className="text-xs font-medium leading-none whitespace-nowrap">{children}</span>
    </>
  )

  if (href) {
    return (
      <a ref={buttonRef as React.RefObject<HTMLAnchorElement>} className={combinedClass} style={buttonStyle} href={href} onClick={handleClick} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button ref={buttonRef as React.RefObject<HTMLButtonElement>} className={combinedClass} style={buttonStyle} type="button" onClick={handleClick} {...props}>
      {content}
    </button>
  )
}
