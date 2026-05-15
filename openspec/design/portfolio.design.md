# Design: Jenny Portfolio

## 1. Color Palette (Tailwind 4 Tokens)
```css
--color-primary: #FD853A;
--color-background: #0B0B0B;
--color-surface: #1C1C1C;
--color-surface-hover: #2A2A2A;
--color-text-main: #FFFFFF;
--color-text-dim: #A1A1AA;
```

## 2. Layout Structure
- **Max Width**: `max-w-7xl` (1280px) for main content.
- **Section Spacing**: `py-20` to `py-32`.
- **Gaps**: `gap-6` to `gap-12`.

## 3. Component Details
### 3.1 Buttons
- **Primary**: Rounded-full, orange background, black text.
- **Outline**: Rounded-full, border orange, orange text.
- **Glass**: Rounded-full, blur background, white text.

### 3.2 Cards
- **Style**: Dark background, subtle border, rounded-3xl.
- **Glow**: Subtle orange box-shadow or gradient on hover.
- **Icon Container**: Orange circle or soft square with opacity.

### 3.3 Timeline
- Vertical line (`w-px`) in zinc-800.
- Dots for milestones (orange for current/active, zinc for past).

## 4. Assets (Placeholder Strategy)
- **Profile Image**: `jenny-hero.webp` (Generated)
- **Project Cards**: `project-1.webp`, `project-2.webp` (Generated)
- **Blog Images**: `blog-1.webp`, `blog-2.webp` (Generated)
