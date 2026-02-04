// Design Tokens - Colors
// Modulab Design System

import type React from 'react'

export const colors = {
  // Primary Color Palette (Dark - Base #141414 at 600)
  // Scale from 25 (lightest) to 900 (darkest)
  primary: {
    25: '#FAFAFA',  // Lightest
    50: '#F5F5F5',
    100: '#E5E5E5',
    200: '#CCCCCC',
    300: '#999999',
    400: '#666666',
    500: '#333333',
    600: '#141414', // Base color
    700: '#0F0F0F',
    800: '#0A0A0A',
    900: '#050505', // Darkest
  },
  
  // Gray Scale (Neutral)
  gray: {
    25: '#FAFAFA', // Lightest (background)
    50: '#F7F7F7',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D6D6D6', // Borders
    400: '#A3A3A3', // Tertiary text
    500: '#737373',
    600: '#525252', // Secondary text
    700: '#424242',
    800: '#292929',
    900: '#141414', // Primary text
    950: '#0F0F0F',
  },
  
  // Semantic Colors
  background: '#FAFAFA',
  surface: '#FFFFFF',
  textHigh: '#141414',
  textMedium: '#525252',
  textLow: '#A3A3A3',
  link: '#141414', // Updated to use primary base
  success: '#168364',
  warning: '#E5AA00',
  danger: '#F04438',
  accent: '#D62C34', // Grenadine (bolder)
  
  // Enhanced Text Colors (more readable, darker)
  text: {
    // Primary text colors - darker for better readability
    primary: '#1A1A1A',      // Slightly lighter than pure black for softer feel
    secondary: '#4A4A4A',     // Darker than gray-600 for better contrast
    tertiary: '#6B6B6B',     // Darker than gray-500 for labels/helper text
    label: '#6B6B6B',        // For labels - darker and more readable
    muted: '#8A8A8A',        // For very subtle text - still readable
  },
  
  // Border Colors
  border: '#D6D6D6',
  borderLight: '#E5E5E5',
  borderMedium: '#D6D6D6',
  borderDark: '#A3A3A3',
  
  // Gradients
  gradient: {
    primary: 'linear-gradient(45deg, #0F0F0F 0%, #333333 100%)', // primary.700 to primary.500
    accent: 'linear-gradient(135deg, #F49062 0%, #D9534F 100%)', // Orange to accent red gradient
    background: '#FAFAFA',
    surface: 'linear-gradient(180deg, #F0F0F0 0%, #E8E8E8 100%)', // grey surface for secondary button
    
    // Text Gradients (use with background-clip: text and color: transparent)
    text: {
      // Dark gradient for light backgrounds
      primary: 'linear-gradient(135deg, #141414 0%, #333333 50%, #666666 100%)', // primary.600 to primary.500 to primary.400
      // Subtle dark gradient
      dark: 'linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #292929 100%)', // primary.800 to primary.600 to gray.800
      // Gray gradient for subtle effect
      gray: 'linear-gradient(135deg, #141414 0%, #424242 50%, #737373 100%)', // gray.900 to gray.700 to gray.500
      // Strong contrast gradient
      bold: 'linear-gradient(135deg, #050505 0%, #141414 100%)', // primary.900 to primary.600
    },
  },
  
  // Dashboard Style - Reusable dashboard/panel styling
  dashboard: {
    // Border colors for dashed borders
    border: {
      top: '#D6D6D6',      // border-gray-300
      bottom: '#D6D6D6',  // border-gray-300
      left: '#D6D6D6',    // border-gray-300
      right: '#D6D6D6',   // border-gray-300
      light: '#E8E8E8',   // lighter variant for subtle dividers
      divider: '#E5E5E5', // border-gray-200 for internal dividers
    },
    // Padding values
    padding: {
      horizontal: '16px',  // px-lg
      vertical: '12px',     // pt-md pb-md
      verticalLarge: '96px', // For section cards
      horizontalLarge: '32px', // px-3xl
    },
    // Background colors
    background: {
      default: '#FFFFFF',  // bg-white
      subtle: '#FAFAFA',  // primary.25
      gradient: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
    },
    // Text colors
    text: {
      primary: '#141414',   // text-gray-900
      secondary: '#525252', // text-gray-600
      tertiary: '#A3A3A3',  // text-gray-400
      label: '#A3A3A3',    // text-gray-400 for labels
    },
    // Border radius
    radius: '0px', // No radius for cards
    // Spacing between items
    gap: {
      small: '8px',   // gap-sm
      medium: '12px', // gap-md
      large: '16px',  // gap-lg
    },
  },
} as const

/**
 * Helper function to apply text gradient styles
 * Returns an object with all required CSS properties for text gradients
 * Usage: <h1 style={getTextGradient('primary')}>Gradient Text</h1>
 */
export const getTextGradient = (
  variant: keyof typeof colors.gradient.text = 'primary'
): React.CSSProperties => {
  return {
    background: colors.gradient.text[variant],
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  } as React.CSSProperties
}

/**
 * Helper function to apply dashboard panel styles
 * Returns an object with dashboard styling properties
 * Usage: <div style={getDashboardStyle()}>Dashboard Panel</div>
 * 
 * @param variant - Style variant: 'default' | 'header' | 'footer' | 'section'
 * @param options - Optional overrides for specific properties
 */
export const getDashboardStyle = (
  variant: 'default' | 'header' | 'footer' | 'section' = 'default',
  options?: {
    padding?: { top?: string; bottom?: string; left?: string; right?: string }
    background?: string
    border?: { top?: string; bottom?: string; left?: string; right?: string }
  }
): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    background: options?.background || colors.dashboard.background.default,
    borderRadius: colors.dashboard.radius,
  }

  // Apply padding based on variant
  if (variant === 'header' || variant === 'footer') {
    baseStyle.paddingTop = options?.padding?.top || colors.dashboard.padding.vertical
    baseStyle.paddingBottom = options?.padding?.bottom || colors.dashboard.padding.vertical
    baseStyle.paddingLeft = options?.padding?.left || colors.dashboard.padding.horizontal
    baseStyle.paddingRight = options?.padding?.right || colors.dashboard.padding.horizontal
  } else if (variant === 'section') {
    baseStyle.paddingTop = options?.padding?.top || colors.dashboard.padding.verticalLarge
    baseStyle.paddingBottom = options?.padding?.bottom || colors.dashboard.padding.verticalLarge
    baseStyle.paddingLeft = options?.padding?.left || colors.dashboard.padding.horizontalLarge
    baseStyle.paddingRight = options?.padding?.right || colors.dashboard.padding.horizontalLarge
  } else {
    baseStyle.paddingTop = options?.padding?.top || colors.dashboard.padding.vertical
    baseStyle.paddingBottom = options?.padding?.bottom || colors.dashboard.padding.vertical
    baseStyle.paddingLeft = options?.padding?.left || colors.dashboard.padding.horizontal
    baseStyle.paddingRight = options?.padding?.right || colors.dashboard.padding.horizontal
  }

  // Apply border colors if specified
  if (options?.border) {
    if (options.border.top) baseStyle.borderTopColor = options.border.top
    if (options.border.bottom) baseStyle.borderBottomColor = options.border.bottom
    if (options.border.left) baseStyle.borderLeftColor = options.border.left
    if (options.border.right) baseStyle.borderRightColor = options.border.right
  }

  return baseStyle
}
