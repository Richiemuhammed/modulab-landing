# Japanese Art Style Design Rules

## Core Philosophy

Apply Japanese art aesthetic principles throughout the Modulab design system: **minimal, refined, elegant, with careful attention to typography and negative space.**

---

## Typography

### Font Weights
- **Headlines**: Use `font-weight: 500` (medium) or `font-weight: 300` (light) instead of bold (600+)
- **Body text**: Use `font-weight: 400` (normal) or `font-weight: 300` (light)
- **Labels/Navigation**: Use `font-weight: 300` (light) or `font-weight: 400` (normal)
- **Avoid**: Heavy weights (700+) unless absolutely necessary for hierarchy

### Letter Spacing (Tracking)
- **Headlines**: `letter-spacing: -0.02em` to `-0.03em` (tighter)
- **Body text**: `letter-spacing: 0.01em` to `0.02em` (slightly wider)
- **Uppercase labels**: `letter-spacing: 0.12em` to `0.15em` (wide tracking)
- **Small text**: `letter-spacing: 0.1em` to `0.12em`

### Text Sizes
- **Headlines**: Larger sizes (44px+) with lighter weights
- **Subheadlines**: Medium sizes (17-18px) with light weight
- **Body**: Standard (14-16px) with light to normal weight
- **Labels**: Small (10-12px) with uppercase and wide tracking

### Text Colors
- **Primary text**: `text-gray-900` (headlines)
- **Secondary text**: `text-gray-600` (body)
- **Tertiary text**: `text-gray-500` (subtle)
- **Labels**: `text-gray-400` to `text-gray-500` (muted)

---

## Layout & Spacing

### Negative Space
- **Generous padding**: Use larger padding values (`pt-xl`, `pb-xl`, `px-lg`)
- **Breathing room**: Increase gaps between elements (`gap-4xl`, `gap-5xl`)
- **Asymmetrical layouts**: Prefer justified/offset layouts over centered (where appropriate)

### Alignment
- **Asymmetrical balance**: Use `justify-between` for pricing, headers
- **Left-aligned text**: Prefer left alignment for body content
- **Centered sparingly**: Only for specific emphasis

---

## Visual Elements

### Borders
- **Dashed borders**: Use `border-dashed border-gray-300` or `border-gray-200`
- **Subtle borders**: Light gray, not heavy black
- **Minimal borders**: Only where necessary for structure

### Backgrounds
- **Gradients**: Use subtle gradients (`colors.gradient.surface`) for depth
- **Transparency**: Use `bg-transparent` or `bg-white/60` for layering
- **Solid colors**: Use sparingly, prefer gradients

### Rounding
- **Consistent rounding**: Use `rounded-md` (not `rounded-full` or `rounded-lg`)
- **Subtle corners**: Avoid heavy rounding

---

## Components

### Navigation Links
```tsx
className="text-xs font-light text-gray-500 tracking-wider uppercase"
style={{ letterSpacing: '0.12em' }}
```

### Headlines
```tsx
className="font-heading text-4xl font-light tracking-tight"
style={{ letterSpacing: '-0.02em' }}
```

### Body Text
```tsx
className="text-sm font-light text-gray-500 leading-relaxed"
style={{ letterSpacing: '0.01em' }}
```

### Labels
```tsx
className="text-[10px] font-light text-gray-400 tracking-wider uppercase"
style={{ letterSpacing: '0.12em' }}
```

### Pricing Numbers
```tsx
className="font-heading text-3xl font-light text-gray-900 tracking-tight"
style={{ fontFamily: fontFamilies.heading }}
```

---

## Color Usage

### Primary Accent
- Use `colors.accent` (orange) sparingly for primary CTAs
- Use `colors.gradient.accent` for special emphasis

### Neutral Palette
- **Gray-900**: Headlines, primary text
- **Gray-600**: Body text, secondary content
- **Gray-500**: Subtle text, descriptions
- **Gray-400**: Labels, tertiary text
- **Gray-300**: Borders, dividers

### Gradients
- **Surface**: `colors.gradient.surface` for cards, chips
- **Text**: `getTextGradient('primary')` for headlines
- **Background**: Subtle gradients for depth

---

## Animation & Motion

### Principles
- **Slow and deliberate**: Use longer durations (`animation.timing.slowest`)
- **Easing**: Prefer `easeInOutCubic` for smooth transitions
- **Subtle**: Avoid bouncy or aggressive animations

### Transitions
```tsx
transition-colors duration-300 ease-in-out
```

---

## Implementation Checklist

When applying Japanese art style to a component:

- [ ] Use lighter font weights (300-500)
- [ ] Apply appropriate letter spacing
- [ ] Use uppercase with wide tracking for labels
- [ ] Increase padding and gaps for breathing room
- [ ] Use dashed borders in light gray
- [ ] Apply subtle gradients to surfaces
- [ ] Use `rounded-md` consistently
- [ ] Prefer asymmetrical layouts where appropriate
- [ ] Use muted color palette (grays)
- [ ] Ensure generous negative space

---

## Examples

### Pricing Section
- Asymmetrical layout (left label, right price)
- Light font weights throughout
- Wide tracking on labels
- Generous padding
- Dashed borders

### Navigation
- Uppercase with wide tracking
- Light font weight
- Muted colors
- Increased spacing between links

### Headlines
- Large size with light weight
- Tight letter spacing
- Text gradients for depth

---

## Anti-Patterns (What NOT to do)

❌ Heavy font weights (700+)
❌ Tight letter spacing on body text
❌ Centered everything
❌ Heavy black borders
❌ Bright, saturated colors
❌ Tight spacing
❌ Rounded-full everywhere
❌ Bold, aggressive animations
❌ All caps without tracking
❌ Flat, solid backgrounds everywhere

---

## Reference

This style is inspired by:
- Japanese minimalism (wabi-sabi)
- Modern typography (Apple, Linear, Notion)
- Calm, confident design
- Premium, unforced aesthetic

Apply these principles consistently across all Modulab components for a cohesive, refined experience.
