import { useEffect, useRef } from 'react'
import { usePostHog } from 'posthog-js/react'
import ModulabPricingCard from './modulab-pricing-card'

/**
 * Pricing Section Component
 * Japanese minimalist style - calm and spacious
 */
export default function Pricing() {
  const posthog = usePostHog()
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasTracked = useRef(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element || hasTracked.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            posthog?.capture('Viewed Pricing Section')
            hasTracked.current = true
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [posthog])

  return (
    <div 
      ref={sectionRef}
      id="pricing"
      className="w-full box-border border-dashed-clean bg-white px-3xl"
      style={{ borderRadius: '0px', paddingTop: '128px', paddingBottom: '128px' }}
      aria-label="Section: Pricing"
    >
      {/* Pricing cards */}
      <ModulabPricingCard />
    </div>
  )
}
