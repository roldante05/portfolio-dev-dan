# Specification: Experience Timeline Component

## 1. Functional Requirements

### Requirement: Responsive Grid Layout

The Experience section MUST render jobs in a responsive grid layout that adapts to screen size without alternating left/right positioning.

- **Mobile (≤768px)**: Single column, top-to-bottom order
- **Tablet (769px–1024px)**: Two columns, left-to-right flow
- **Desktop (>1024px)**: Three columns, left-to-right flow

The layout MUST maintain chronological order (most recent job first) across all breakpoints.

#### Scenario: Mobile breakpoint

- GIVEN the viewport width is 768px or less
- WHEN the component renders
- THEN jobs display in a single column, top-to-bottom
- AND no alternating positions, horizontal gaps, or center-aligned timeline line

#### Scenario: Tablet breakpoint

- GIVEN the viewport width is between 769px and 1024px
- WHEN the component renders
- THEN jobs display in two columns, left-to-right flow
- AND the timeline line is hidden
- AND jobs fill available space without alternating left/right

#### Scenario: Desktop breakpoint

- GIVEN the viewport width exceeds 1024px
- WHEN the component renders
- THEN jobs display in three columns, left-to-right flow
- AND the timeline line is hidden
- AND jobs fill available space consistently

### Requirement: Framer Motion Animations

Each job card MUST animate on scroll with Framer Motion's `motion.div`.

- **Animation type**: Fade-in with horizontal offset
- **Trigger**: `whileInView` with `once: true`
- **Entrance**: `opacity: 0, x: -20` → `opacity: 1, x: 0`

#### Scenario: Scroll-triggered reveal

- GIVEN a user scrolls down to the Experience section
- WHEN the job card enters the viewport
- THEN the card fades in from left-to-right (no alternation)
- AND the animation triggers only once per card

### Requirement: Visual Style Preservation

The component MUST preserve the existing visual style after the layout change.

- **Background**: `bg-surface` (`#1C1C1C`) per design tokens
- **Border**: `border-white/5` on cards
- **Corner radius**: `rounded-3xl` on all cards
- **Timeline dot**: 4px orange circle (`bg-primary`) with black border, centered on timeline
- **Date badge**: Uppercase, primary color, tracking-widest

#### Scenario: Visual consistency

- GIVEN any breakpoint
- WHEN a job card renders
- THEN card style matches desktop/tablet/mobile (same padding, border, colors)
- AND date badge appears consistently above company name

### Requirement: accessibility

The component MUST be accessible per WCAG 2.1 AA guidelines.

- **Focus order**: Keyboard navigation follows DOM order (chronological)
- **Screenreader labels**: No duplicate IDs, no aria-hidden content
- **Color contrast**: Orange (`#FF6B00`) against dark backgrounds ≥ 4.5:1 ratio

#### Scenario: Keyboard navigation

- GIVEN a keyboard user navigates the page
- WHEN tabbing through Experience section cards
- THEN cards receive focus in chronological order
- AND no focus traps or skipped elements

#### Scenario: Color contrast

- GIVEN any user views the Experience section
- WHEN orange text appears on dark background
- THEN text meets 4.5:1 minimum contrast ratio

## 2. Technical Requirements

### Requirement: Framework Compliance

The component MUST adhere to Next.js 16.2.6 (App Router) conventions.

- **Client component**: `"use client"` directive present
- **Framer Motion version**: ≥6.5 (for `viewport.once` support)
- **TypeScript**: Full type safety with interfaces for job data

### Requirement: Performance

The component MUST meet performance targets.

- **Initial render**: < 50ms on modern devices
- **Animation cost**: < 16ms per frame (60fps)
- **Cumulative Layout Shift (CLS)**: 0 (grid layout prevents shift)

#### Scenario: Animation performance

- GIVEN a user scrolls through multiple job cards
- WHEN Framer Motion animations trigger
- THEN animation frame rate remains ≥ 60fps

## 3. Edge Cases

### Requirement: Empty or No experiences Array

The component MUST handle an empty experiences array gracefully.

- **Behavior**: Display empty state with "No experience data available"
- **UI**: Center-aligned, muted text

#### Scenario: No experiences data

- GIVEN the experiences array is empty
- WHEN the component renders
- THEN a placeholder message appears instead of cards

### Requirement: Long Description Text

The component MUST handle job descriptions with many bullet points.

- **Behavior**: Scrollable content area if bullets exceed container height
- **UI**: No overflow clipping, card expands vertically

#### Scenario: Long bullet lists

- GIVEN a job description with 8+ bullet points
- WHEN the card renders
- THEN the card expands vertically without cutting off content

## 4. Accessibility (a11y)

### Requirement: Semantic HTML

The section MUST use proper semantic elements.

- **Section element**: `id="experience"` with `aria-labelledby`
- **Headings**: `<h2>` for section title, `<h3>` for company names
- **Lists**: `<ul>/<li>` for description bullets

#### Scenario: Screen reader announcement

- GIVEN a screen reader user navigates to Experience section
- WHEN reading job cards
- THEN company, date, role, and bullet points are announced in order

### Requirement: Focus Management

The component MUST support keyboard navigation.

- **Tab order**: Cards receive focus in chronological order
- **Focus indicator**: Visible outline (Tailwind `focus:outline-none` only applied when custom focus styling present)

#### Scenario: Focus visible

- GIVEN a keyboard user tabs to a job card
- WHEN the card receives focus
- THEN a visible focus indicator appears

## 5. Requirements (Previously: Experience timeline with alternating left/right layout)

This spec replaces the previous Experience section behavior which used:

- Alternating left/right positions on desktop
- A centered vertical timeline with dot markers
- Two-column desktop layout (one job per column, alternating sides)

The new spec removes all alternating behavior and timeline alignment, replacing it with a clean responsive grid.
