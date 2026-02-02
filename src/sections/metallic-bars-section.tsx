import MetallicBars from '../components/metallic-bars'

/**
 * Metallic Bars Section
 * Displays 3D isometric metallic bars above the CTA
 * Positioned top-right, flowing down-left
 */
export default function MetallicBarsSection() {
  return (
    <section className="w-full relative overflow-visible" style={{ height: '400px' }}>
      <div className="absolute top-0 right-0" style={{ right: '0px', top: '0px' }}>
        <MetallicBars />
      </div>
    </section>
  )
}
