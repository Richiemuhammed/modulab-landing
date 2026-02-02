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
        title="Clear packages. Senior execution. Limited slots."
        className="mb-5xl"
      />
      
      {/* Pricing cards */}
      <ModulabPricingCard />
    </div>
  )
}
