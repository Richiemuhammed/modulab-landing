import { useState } from 'react'
import Hero from './sections/hero/hero'
import Services from './sections/services/services'
import Process from './sections/process/process'
// import Testimonials from './sections/testimonials/testimonials'
import NotAFit from './sections/not-a-fit/not-a-fit'
import Logos from './sections/logos/logos'
import { Piggy1, Piggy2, KinMan1, KinMan2 } from './sections/illustrations/illustrations'
import { Showcase1, Showcase2, Showcase3, Showcase4 } from './sections/showcase/kin-showcase'
import ShowcaseItem from './sections/showcase/showcase-item'
import Pricing from './sections/pricing/pricing'
import FAQ from './sections/faq/faq'
import CTA from './sections/cta/cta'
import Footer from './components/footer'
import { colors } from './tokens/colors'

/**
 * App Component - Single file with Tailwind
 * Global layout styles converted to Tailwind classes
 */
function App() {
  const [activeView, setActiveView] = useState<'work' | 'pricing'>('work')

  return (
    <div className="w-full h-fit min-h-screen flex flex-col lg:flex-row items-stretch gap-0 text-gray-900 font-body antialiased box-content" style={{ background: colors.gradient.background }}>
      {/* Left Side Container - Max Width with Hero */}
      <header className="w-full lg:max-w-[440px] lg:shrink-0 flex flex-col lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
        <Hero activeView={activeView} onViewChange={setActiveView} />
      </header>

      {/* Right Side Container - Showcase Content */}
      <main className="flex-1 flex flex-col gap-[64px] p-2 border-l border-r border-dashed-clean lg:h-screen lg:overflow-y-auto">
        {activeView === 'work' && (
          <>
            <ShowcaseItem id="work">
              <Showcase1 />
            </ShowcaseItem>
            <ShowcaseItem>
              <Showcase2 />
            </ShowcaseItem>
            <Piggy1 />
            <ShowcaseItem>
              <Showcase3 />
            </ShowcaseItem>
            <ShowcaseItem>
              <Showcase4 />
            </ShowcaseItem>
            <Logos />
            <KinMan1 />
            <Services />
            <Piggy2 />
            <Process />
            <KinMan2 />
            <NotAFit />
            <FAQ />
            <CTA />
          </>
        )}
        {activeView === 'pricing' && (
          <Pricing />
        )}
        <Footer />
      </main>
    </div>
  )
}

export default App
