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
    <div className="relative w-full h-full flex flex-col bg-white border-dashed-clean rounded-lg" style={{ overflow: 'visible' }}>
      <div className="p-3xl flex flex-col gap-3xl flex-1 overflow-hidden rounded-lg">
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
                <div key={index} className="flex items-center gap-sm group">
                  <CheckCircle size={18} weight="Bold" style={{ color: colors.accent }} className="shrink-0" />
                  <span className="text-sm font-normal leading-relaxed flex-1" style={{ letterSpacing: '0em', color: colors.text.secondary }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-lg mt-auto">
            {isPrimary ? (
              <PrimaryButton href={ctaHref} className="!w-full justify-center">
                {ctaText}
              </PrimaryButton>
            ) : (
              <SecondaryButton href={ctaHref} className="!w-full justify-center">
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
    'Product scope + build plan',
    'Mobile UI/UX design',
    'React Native app (iOS + Android)',
    'Backend + auth + onboarding',
    'Analytics events + crash monitoring',
    'TestFlight / Play Store release support',
  ]

  const buildLaunchKitFeatures = [
    'Everything in Build, plus',
    'Framer landing page (premium quality)',
    'Hero + pricing copy polish',
    'Loops email setup (waitlist/newsletter)',
    'SEO basics + OG previews',
    'App Store screenshots + launch assets',
  ]

  const modulabXFeatures = [
    'Weekly shipping cadence',
    'Design + engineering support',
    'Iteration, performance + bug fixes',
    'Product advisory + technical direction',
    'Calm execution — no bloat',
  ]

  return (
    <div className="flex flex-col gap-5xl w-full">
      {/* First row: Two cards side by side */}
      <div className="flex flex-col md:flex-row gap-4xl w-full justify-center md:items-stretch">
        {/* Build */}
        <div className="w-full md:w-[340px] md:shrink-0 flex">
          <PricingPlanCard
            title="Build (App only)"
            description="For founders shipping a serious first version."
            price="$9,000"
            duration="4–6 weeks"
            features={buildFeatures}
            ctaText="Book a 15-min call"
            ctaHref="#work"
          />
        </div>

        {/* Build + Launch Kit */}
        <div className="w-full md:w-[340px] md:shrink-0 flex">
          <PricingPlanCard
            title="Build + Launch Kit"
            description="For founders who want the app + a clean launch surface."
            price="$12,000"
            duration="5–7 weeks"
            features={buildLaunchKitFeatures}
            ctaText="Book a 15-min call"
            ctaHref="#work"
            isPrimary={true}
          />
        </div>
      </div>

      {/* Second row: One card centered - no nested card, just content */}
      <div className="flex flex-col items-center w-full pt-3xl">
        <div className="w-full lg:w-auto lg:max-w-[480px] flex flex-col gap-3xl items-center text-center">
          <div className="flex flex-col gap-xs">
            <p className="text-xs font-light leading-relaxed" style={{ letterSpacing: '0.01em', color: colors.text.secondary }}>
              Weekly shipping cadence. Design + engineering support. Keep iterating without the overhead. Starting at $9,000/month. Limited to 1–2 active partnerships.
            </p>
          </div>
          <div>
            <PrimaryButton href="https://cal.com/modul-lab-9hvki1/sales-meeting" target="_blank" rel="noopener noreferrer" className="!w-full justify-center">
              Book a call
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
