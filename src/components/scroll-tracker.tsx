import { useEffect, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'

interface ScrollTrackerProps {
  threshold?: number
  containerSelector?: string
}

/**
 * Tracks scroll depth within a container or window
 * Fires once when threshold is reached
 */
export default function ScrollTracker({ 
  threshold = 0.75,
  containerSelector 
}: ScrollTrackerProps) {
  const posthog = usePostHog()
  const hasTracked = useRef(false)

  useEffect(() => {
    const container = containerSelector 
      ? document.querySelector(containerSelector)
      : window

    if (!container) return

    const handleScroll = () => {
      if (hasTracked.current) return

      let scrollPercent: number

      if (container === window) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      } else {
        const el = container as HTMLElement
        const scrollTop = el.scrollTop
        const scrollHeight = el.scrollHeight - el.clientHeight
        scrollPercent = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      }

      if (scrollPercent >= threshold) {
        posthog?.capture(`Scroll ${Math.round(threshold * 100)}%`)
        hasTracked.current = true
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [posthog, threshold, containerSelector])

  return null
}
