import logoImage from '../assets/modulab.2.png'
import { colors } from '../tokens/colors'

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img 
        src={logoImage} 
        alt="Modulab Logo" 
        className="w-6 h-6 object-contain shrink-0" 
        style={{ borderRadius: '4px' }}
      />
      <span className="font-heading text-base font-medium tracking-tight w-fit h-fit" style={{ color: colors.text.primary }}>
        Modulab
      </span>
    </div>
  )
}
