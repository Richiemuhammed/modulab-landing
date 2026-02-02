import ModulabPricingCard from './modulab-pricing-card'

/**
 * Pricing Section Component
 * Japanese minimalist style - calm and spacious
 */
export default function Pricing() {
  return (
    <div 
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
