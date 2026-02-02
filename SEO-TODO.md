# SEO To-Do List

## Favicon with Rounded Corners
- [x] Create rounded favicon to match app design (16px border radius - matches `rounded-lg`)
  - Created multiple sizes: 16x16, 32x32, 180x180 (Apple touch icon)
  - Script: `scripts/create-rounded-favicon.mjs` (can be run again if logo changes)
  - Files created: `/public/favicon-16x16.png`, `/public/favicon-32x32.png`, `/public/apple-touch-icon.png`
- [x] Update `index.html` favicon link to use new rounded favicon files

## OG Image Creation
- [ ] Create OG image (1200x630px recommended size)
  - Should include: Modulab branding/logo
  - Text: "Modulab LLC - Building Tomorrow's Solutions" (optional subtitle)
  - Design: Match brand colors (#A44F22 primary)
  - Format: PNG or JPG
  - Save as: `/public/og-image.jpg` or `/public/og-image.png`
- [ ] Update `index.html` og:image and twitter:image meta tags to point to new og-image file
- [ ] Test social sharing previews:
  - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
  - Twitter Card Validator: https://cards-dev.twitter.com/validator

## Future SEO Tasks
- [ ] Update Instagram social link when ready (currently using X/Twitter URL)
- [ ] Review and update sitemap.xml lastmod date periodically
- [ ] Set up Google Search Console (optional)
- [ ] Add analytics if needed (optional)
