import ModulabPricingCard from './modulab-pricing-card'
import { colors } from '../../tokens'
import SectionHeader from '../../components/section-header'

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
      <SectionHeader 
        label="Pricing"
        title="Simple pricing for serious founders."
        subtitle="Whether you need a complete build or ongoing partnership, we've got you covered. No hourly billing, no scope creep — just focused execution."
        className="mb-5xl"
      />
      
      {/* Pricing cards */}
      <ModulabPricingCard />
    </div>
  )
}
