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
    'Product scope definition + build roadmap',
    'Mobile UI/UX system design',
    'React Native app (iOS + Android)',
    'Backend architecture, authentication & onboarding flows',
    'Analytics instrumentation + stability monitoring',
    'TestFlight / Play Store release support',
    'Option to continue with monthly product partnership',
  ]

  const buildLaunchKitFeatures = [
    'Everything in Build, plus',
    'Premium Framer landing page',
    'Hero + pricing copy polish',
    'Loops email setup (waitlist/newsletter)',
    'SEO foundations + OG previews',
    'App Store screenshots + launch assets',
    'Option to continue with monthly product partnership',
  ]

  return (
    <div className="flex flex-col gap-5xl w-full">
      {/* First row: Two cards side by side */}
      <div className="flex flex-col md:flex-row gap-4xl w-full justify-center md:items-stretch">
        {/* Build Engagement */}
        <div className="w-full md:w-[340px] md:shrink-0 flex">
          <PricingPlanCard
            title="Build Engagement"
            description="For founders shipping a serious first version."
            price="$9,000"
            duration="4–6 weeks"
            features={buildFeatures}
            ctaText="Book a 15-min call"
            ctaHref="https://cal.com/modul-lab-9hvki1/sales-meeting"
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
            ctaHref="https://cal.com/modul-lab-9hvki1/sales-meeting"
            isPrimary={true}
          />
        </div>
      </div>

      {/* Ongoing Product Partnership */}
      <div className="flex flex-col items-center w-full pt-3xl border-t border-dashed-clean">
        <div className="w-full lg:w-auto lg:max-w-[560px] flex flex-col gap-xl items-center text-center pt-3xl">
          <h3 className="font-heading text-xl font-semibold tracking-tight" style={{ letterSpacing: '-0.02em', color: colors.text.primary }}>
            Ongoing Product Partnership
          </h3>
          <p className="text-sm font-normal leading-relaxed" style={{ letterSpacing: '0em', color: colors.text.secondary }}>
            Weekly shipping cadence. Design + engineering leadership to iterate, improve performance, and expand product surface without hiring a team.
          </p>
          <p className="text-sm font-medium" style={{ color: colors.text.primary }}>
            Product engagements from $9,000/month
          </p>
          <p className="text-xs font-normal" style={{ color: colors.text.tertiary }}>
            Early-stage pilot engagements available · Limited to 1–2 active partnerships
          </p>
        </div>
      </div>
    </div>
  )
}
