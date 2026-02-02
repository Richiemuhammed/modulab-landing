import { useEffect, useRef, useCallback } from 'react'
import { usePostHog } from 'posthog-js/react'

/**
 * Track CTA button clicks
 */
export function useTrackCTA() {
  const posthog = usePostHog()
  
  return useCallback((ctaLabel: string, ctaLocation?: string) => {
    posthog?.capture('CTA Clicked', {
      cta_label: ctaLabel,
      cta_location: ctaLocation,
    })
  }, [posthog])
}

/**
 * Track when an element comes into view
 */
export function useTrackView(eventName: string, options?: { threshold?: number }) {
  const posthog = usePostHog()
  const hasTracked = useRef(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element || hasTracked.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            posthog?.capture(eventName)
            hasTracked.current = true
            observer.disconnect()
          }
        })
      },
      { threshold: options?.threshold ?? 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [posthog, eventName, options?.threshold])

  return elementRef
}

/**
 * Track scroll depth (fires once when threshold is reached)
 */
export function useTrackScrollDepth(threshold: number = 0.75) {
  const posthog = usePostHog()
  const hasTracked = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasTracked.current) return

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollTop / docHeight

      if (scrollPercent >= threshold) {
        posthog?.capture(`Scroll ${Math.round(threshold * 100)}%`)
        hasTracked.current = true
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [posthog, threshold])
}
