// Design Tokens - Borders
// Modulab Design System
// Shadow Border Technique by Derek Briggs (@PixelJanitor)
// Uses box-shadow instead of border for better blending and sizing

import type React from 'react'
import { colors } from './colors'

/**
 * Shadow Border System
 * 
 * Instead of traditional CSS borders, we use box-shadow with:
 * - 0 offset (no blur initially)
 * - Negative spread radius to maintain element dimensions
 * - Semi-transparent colors that blend with element shadows
 * - background-clip: padding-box to prevent background bleeding
 * 
 * This creates natural gradient effects and maintains correct sizing
 * with box-sizing: border-box
 */

// Helper to convert hex to rgba
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const borders = {
  // Standard shadow borders (1px)
  // Format: { boxShadow, backgroundClip }
  // Using inset box-shadow with semi-transparent colors for natural blending
  default: {
    boxShadow: `inset 0 0 0 1px ${hexToRgba(colors.border, 0.25)}`, // 25% opacity
    backgroundClip: 'padding-box' as const,
  },
  
  light: {
    boxShadow: `inset 0 0 0 1px ${hexToRgba(colors.borderLight, 0.25)}`, // 25% opacity
    backgroundClip: 'padding-box' as const,
  },
  
  medium: {
    boxShadow: `inset 0 0 0 1px ${hexToRgba(colors.borderMedium, 0.31)}`, // 31% opacity
    backgroundClip: 'padding-box' as const,
  },
  
  dark: {
    boxShadow: `inset 0 0 0 1px ${hexToRgba(colors.borderDark, 0.37)}`, // 37% opacity
    backgroundClip: 'padding-box' as const,
  },

  // Shadow borders with outer shadow (for buttons/cards with elevation)
  // These blend with the element's main shadow for natural gradient
  // The inset border sits inside, creating depth perception
  withShadow: {
    default: {
      boxShadow: `0 2px 4px rgba(0, 0, 0, 0.08), inset 0 0 0 1px ${hexToRgba(colors.border, 0.19)}`, // Main shadow + border
      backgroundClip: 'padding-box' as const,
    },
    
    light: {
      boxShadow: `0 2px 4px rgba(0, 0, 0, 0.08), inset 0 0 0 1px ${hexToRgba(colors.borderLight, 0.19)}`,
      backgroundClip: 'padding-box' as const,
    },
    
    dark: {
      boxShadow: `0 2px 4px rgba(0, 0, 0, 0.12), inset 0 0 0 1px ${hexToRgba(colors.borderDark, 0.25)}`,
      backgroundClip: 'padding-box' as const,
    },
  },

  // Focus/hover states with enhanced contrast
  focus: {
    boxShadow: `inset 0 0 0 1px ${hexToRgba(colors.primary[600], 0.5)}`, // Higher opacity for focus
    backgroundClip: 'padding-box' as const,
  },

  // For dark mode or dark surfaces (lighter borders)
  onDark: {
    boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
    backgroundClip: 'padding-box' as const,
  },
} as const

/**
 * Helper function to apply shadow border styles
 * Returns an object ready to spread into style prop
 */
export const getShadowBorder = (
  variant: keyof typeof borders = 'default'
): React.CSSProperties => {
  return borders[variant] as React.CSSProperties
}

/**
 * Helper function to combine border with existing shadow
 * Useful for buttons/cards that already have elevation shadows
 */
export const getShadowBorderWithElevation = (
  elevation: 'default' | 'light' | 'dark' = 'default'
): React.CSSProperties => {
  return borders.withShadow[elevation] as React.CSSProperties
}
