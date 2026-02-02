// Design Tokens - Gradients
// Modulab Design System
// Using OKLCH for perceptually uniform color gradients
// 
// OKLCH format: oklch(lightness chroma hue)
// - Lightness: 0-1 or 0-100% (controls brightness)
// - Chroma: 0-0.4 (controls color intensity, keep consistent for shades)
// - Hue: 0-360 degrees (controls color hue)
//
// For predictable shades: keep chroma and hue consistent, only change lightness
// For consistent brightness: keep lightness consistent, only change hue

export const gradients = {
  primary: {
    // OKLCH format: oklch(lightness chroma hue)
    // Brand gradient - vibrant accent colors for CTA
    // Using consistent chroma and hue, only varying lightness for predictable shades
    // Slightly higher chroma for more vibrant, attention-grabbing CTA
    colors: [
      'oklch(0.75 0.15 50)', // Lighter accent (75% lightness, higher chroma for vibrancy)
      'oklch(0.40 0.15 50)', // Darker accent (40% lightness, same chroma/hue)
    ],
    // Fallback hex colors for older browsers
    fallback: ['#F47A4A', '#9C3F14'], // accent-400 to accent-500
    direction: '135deg', // Diagonal (top-left to bottom-right)
  },
  subtle: {
    colors: ['#FFFFFF', '#F7F7F7'], // White to light gray
    direction: '180deg', // Vertical
  },
} as const
