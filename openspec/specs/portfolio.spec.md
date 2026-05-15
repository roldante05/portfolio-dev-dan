# Specification: Jenny Portfolio Design

## 1. Functional Requirements
- **Navbar**: Sticky navigation with scroll-to-section support.
- **Hero**: Display personal intro, years of experience, and CTA.
- **Services**: Showcase core offerings with interactive cards.
- **Experience**: Timeline displaying career history.
- **Portfolio**: Filterable gallery of projects.
- **Testimonials**: Carousel or grid of client feedback with star ratings.
- **Blog**: Grid of latest blog posts with images and dates.
- **Contact**: Prominent section with email and "Let's Talk" CTA.

## 2. Technical Requirements
- **Framework**: Next.js 16 (App Router).
- **Styling**: Tailwind CSS 4 (Vanilla CSS variables + `@theme`).
- **Icons**: Lucide React.
- **Animations**: Framer Motion for scroll reveals and hover states.
- **Images**: Next/Image for optimization.

## 3. Performance & SEO
- **Images**: Use `.webp` format and proper sizing.
- **SEO**: Semantic HTML (h1, h2, section, footer), meta tags in `layout.tsx`.
- **Lighthouse**: Target >90 score in all categories.

## 4. Accessibility (a11y)
- Proper color contrast for orange text on dark backgrounds.
- Screen reader labels for icon-only buttons.
- Keyboard navigation for filter buttons.
