// Design Tokens - Typography
// Modulab Design System

/**
 * Font Family Definitions
 * Standardized typefaces used throughout the application
 */
export const fontFamilies = {
  body: "'Outfit', sans-serif",
  heading: "'Space Grotesk', 'Satoshi', 'General Sans', 'Outfit', sans-serif",
  display: "'Space Grotesk', 'Satoshi', 'General Sans', 'Outfit', sans-serif",
  label: "'Satoshi', 'General Sans', 'Outfit', sans-serif",
  section: "'Satoshi', 'General Sans', 'Outfit', sans-serif",
} as const

/**
 * Typography Scale
 * Font sizes, weights, line heights, and letter spacing
 */
export const typography = {
  h1: {
    fontSize: '36px',
    fontWeight: 600,
    letterSpacing: '-0.6px',
    lineHeight: '1.1',
  },
  h2: {
    fontSize: '24px',
    fontWeight: 600,
    letterSpacing: '-0.3px',
    lineHeight: '32px',
  },
  h3: {
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '-0.2px',
    lineHeight: '28px',
  },
  h4: {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '-0.1px',
    lineHeight: '24px',
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    lineHeight: '24px',
  },
  bodyLarge: {
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    lineHeight: '28px',
  },
  bodySmall: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    lineHeight: '20px',
  },
  button: {
    fontSize: '16px',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '24px',
  },
  buttonSmall: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.2px',
    lineHeight: '20px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '0.1px',
    lineHeight: '20px',
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '0.1px',
    lineHeight: '18px',
  },
} as const

/**
 * Typography Usage Guide
 * 
 * Font Family Usage:
 * - font-body: Body text, paragraphs, general content (Outfit)
 * - font-heading: Main headings, hero titles (Space Grotesk)
 * - font-display: Display text, large headings (Space Grotesk)
 * - font-label: Form labels, small text (Satoshi)
 * - font-section: Section labels, uppercase labels (Satoshi)
 * 
 * Tailwind Classes:
 * - Use `font-body` for body text
 * - Use `font-heading` for headings
 * - Use `font-label` for labels
 */
