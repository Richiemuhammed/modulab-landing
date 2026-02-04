import PrimaryButton from '../../components/primary-button'
import SecondaryButton from '../../components/secondary-button'
import { colors, getTextGradient, fontFamilies } from '../../tokens'
import { CheckCircle } from '@solar-icons/react'

interface PricingPlanProps {
  title: string
  description: string
  price: string
  duration?: string
  features: string[]
  ctaText: string
  ctaHref: string
  isPrimary?: boolean
  featuresLabel?: string
}

function PricingPlanCard({ title, description, price, duration, features, ctaText, ctaHref, isPrimary, featuresLabel = 'Includes' }: PricingPlanProps) {
  return (
    <div className="relative w-full h-full flex flex-col bg-white outline-none border-0" style={{ overflow: 'visible' }}>
      <div className="flex flex-col gap-3xl flex-1 outline-none border-0">
          {/* Title and Description */}
          <div className="flex flex-col gap-xs">
            <h2 className="font-heading text-2xl font-semibold tracking-tight leading-tight" style={{ ...getTextGradient('primary'), letterSpacing: '-0.02em' }}>
              {title}
            </h2>
            <p className="text-sm font-normal leading-relaxed mt-1" style={{ letterSpacing: '0em', color: colors.text.secondary }}>
              {description}{duration && ` ${duration}.`}
            </p>
          </div>

          {/* Price Section */}
          <div className="flex flex-row items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight leading-tight" style={{ fontFamily: fontFamilies.heading, letterSpacing: '-0.02em', color: colors.text.primary }}>
              {price}
            </span>
          </div>

          {/* Divider before features */}
          <div className="w-full h-px border-t border-dashed-clean"></div>

          {/* Features Section */}
          <div className="flex flex-col gap-lg">
            {/* Features list */}
            <div className="flex flex-col gap-md pl-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-sm group">
                  <CheckCircle size={18} weight="Bold" style={{ color: colors.accent, marginTop: '2px' }} className="shrink-0" />
                  <span className="text-sm font-normal leading-relaxed flex-1" style={{ letterSpacing: '0em', color: colors.text.secondary }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-lg mt-auto outline-none border-0">
            {isPrimary ? (
              <PrimaryButton href={ctaHref} className="!w-full justify-center !outline-none !border-0 focus:!outline-none focus-visible:!outline-none">
                {ctaText}
              </PrimaryButton>
            ) : (
              <SecondaryButton href={ctaHref} className="!w-full justify-center !outline-none !border-0 focus:!outline-none focus-visible:!outline-none">
                {ctaText}
              </SecondaryButton>
            )}
          </div>
        </div>
    </div>
  )
}

/**
 * Modulab Pricing Card Component
 * Displays pricing plans for Modulab
 */
export default function ModulabPricingCard() {
  const buildFeatures = [
    'Scope + build roadmap',
    'UI/UX system design',
    'React Native (iOS + Android)',
    'Backend, auth & onboarding',
    'TestFlight & Play Store release',
  ]

  const buildLaunchKitFeatures = [
    'Everything in Build, plus',
    'Framer landing page',
    'Loops email (waitlist/newsletter)',
    'SEO + OG previews',
    'Screenshots + launch assets',
  ]

  return (
    <div className="flex flex-col gap-5xl w-full">
      {/* Main offers: Two cards side by side */}
      <div className="flex flex-col md:flex-row gap-4xl w-full justify-center md:items-stretch">
        {/* Build Engagement */}
        <div className="w-full md:w-[380px] md:shrink-0 flex">
          <PricingPlanCard
            title="Build"
            description="We build the product system."
            price="$6,500"
            duration="4–6 weeks"
            features={buildFeatures}
            ctaText="Book a 15-min call"
            ctaHref="https://cal.com/modul-lab-9hvki1/sales-meeting"
          />
        </div>

        {/* Build + Launch Kit */}
        <div className="w-full md:w-[380px] md:shrink-0 flex">
          <PricingPlanCard
            title="Build + Launch"
            description="Product system plus public launch."
            price="$9,500"
            duration="5–7 weeks"
            features={buildLaunchKitFeatures}
            ctaText="Book a 15-min call"
            ctaHref="https://cal.com/modul-lab-9hvki1/sales-meeting"
            isPrimary={true}
          />
        </div>
      </div>

      {/* Phase 0 — bottom */}
      <div className="flex flex-col items-center text-center pt-3xl border-t border-dashed-clean">
        <div className="w-full max-w-[480px] flex flex-col gap-lg pt-3xl">
          <h3 className="font-heading text-lg font-semibold tracking-tight" style={{ letterSpacing: '-0.02em', color: colors.text.primary }}>
            Phase zero
          </h3>
          <p className="text-sm font-normal" style={{ color: colors.text.secondary }}>
            $1,500–$2,000 · 1 week. Scope + architecture. Credited toward a full build.
          </p>
          <div className="flex justify-center">
            <SecondaryButton href="https://cal.com/modul-lab-9hvki1/sales-meeting" target="_blank" rel="noopener noreferrer" trackLabel="Phase 0">
              Book a call
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
