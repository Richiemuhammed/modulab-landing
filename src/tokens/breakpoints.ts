// Design Tokens - Breakpoints
// Modulab Design System
// Strict breakpoint system for responsive design

export const breakpoints = {
  sm: '640px',   // Small devices (tablets)
  md: '768px',   // Medium devices (small laptops)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X Extra large devices (large desktops)
} as const

// Tailwind breakpoint values (for use in className)
export const breakpointClasses = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
} as const
