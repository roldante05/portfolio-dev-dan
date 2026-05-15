# Portfolio Homepage Specification

## Purpose

Define the structure, content, and behavior of the main portfolio page that showcases Dann Roldan's professional profile, services, experience, and projects as a backend developer.

## Requirements

### Requirement: Main Page Layout and Navigation

The system MUST render a complete one-page portfolio website with all required sections in a specific order, with smooth scrolling navigation and responsive layout.

#### Scenario: Desktop View Navigation

- GIVEN a desktop browser window (≥1024px width)
- WHEN the user visits the homepage
- THEN all sections render in order: Navbar, Hero, Services, Experience, Why Hire Me, Portfolio, Testimonials, CTA, Footer
- AND the navbar displays a logo, navigation links (Home, About, Services, Experience, Portfolio, Contact), and a theme toggle button
- AND the theme toggle button shows the current theme icon (dark or light)

#### Scenario: Mobile View Navigation

- GIVEN a mobile browser window (<768px width)
- WHEN the user visits the homepage
- THEN the navbar collapses into a hamburger menu
- AND when the menu is opened, all navigation links appear in a vertical overlay menu
- AND the theme toggle button remains visible in the navbar

#### Scenario: Smooth Scrolling

- GIVEN the user is on any position on the page
- WHEN the user clicks a navigation link
- THEN the page scrolls smoothly to the target section
- AND the URL hash updates to match the section ID

### Requirement: Hero Section with Personal Branding

The system MUST display a compelling hero section that introduces the developer and establishes professional identity.

#### Scenario: Hero Section Content

- GIVEN the user is on the homepage
- WHEN the hero section renders
- THEN it contains:
  - Profile image (rounded, with hover effect)
  - Professional title ("Backend Developer")
  - Professional subtitle/description
  - Call-to-action buttons (e.g., "View Projects", "Contact Me")
  - Social media links/icons
- AND the hero section occupy at least 60vh of viewport height

#### Scenario: Dynamic Content

- GIVEN the website is loaded
- WHEN the hero section renders
- THEN all content displays in the primary language (Spanish)
- AND the profile image loads from the configured path

### Requirement: Services Section with Feature Cards

The system MUST present a grid of service cards that highlight the backend technologies and services offered.

#### Scenario: Service Cards Grid

- GIVEN the user scrolls to the Services section
- WHEN the section renders
- THEN services appear in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- AND each card contains: icon, title, description
- AND hovering over a card shows a subtle scale transformation and color accent

#### Scenario: Service Items

- GIVEN the Services section
- WHEN rendered
- THEN it includes at least: API Development, Database Design, System Architecture, Backend Optimization, Cloud Services, DevOps Integration

### Requirement: Experience Section with Timeline

The system MUST display professional experience in a visually structured timeline format.

#### Scenario: Experience Timeline

- GIVEN the user scrolls to the Experience section
- WHEN rendered
- THEN experience items appear in a vertical timeline
- AND each item displays: company name, role, dates, description
- AND current position is highlighted with visual indicator

#### Scenario: Responsive Timeline

- GIVEN a mobile device
- WHEN the Experience section renders
- THEN the timeline converts to a card-based layout
- AND dates appear below company name for clarity

### Requirement: Portfolio Section with Filterable Projects

The system MUST showcase selected projects with filtering capability by technology stack.

#### Scenario: Project Cards Display

- GIVEN the user is in the Portfolio section
- WHEN projects render
- THEN each project card includes: project image, title, description, tech stack tags, links (GitHub, demo)
- AND cards maintain consistent height regardless of content

#### Scenario: Category Filtering

- GIVEN the user sees the Portfolio section
- WHEN category buttons render
- THEN available categories: "All", "Laravel", "Node.js", "API Design", "Database"
- AND clicking a category filters projects to show only matching ones
- AND clicking "All" shows all projects

### Requirement: Testimonials Section with Quote Cards

The system MUST display client or colleague testimonials in visually distinct cards.

#### Scenario: Testimonial Cards

- GIVEN the Testimonials section renders
- WHEN displayed
- THEN each testimonial card includes: author name, role/company, quote, rating (star rating)
- AND cards are arranged in a responsive grid
- AND quotes are properly attributed

#### Scenario: Automated Cycling (Optional Enhancement)

- GIVEN the testimonials section
- WHEN configured
- THEN testimonials may cycle automatically with indicator dots
- AND users can manually select specific testimonials

### Requirement: Call-to-Action (CTA) Section

The system MUST include a compelling final CTA section that encourages contact or engagement.

#### Scenario: CTA Content

- GIVEN the user scrolls near the end of the page
- WHEN the CTA section renders
- THEN it includes: engaging headline, brief supporting message, primary CTA button
- AND the section uses orange accent colors to draw attention

#### Scenario: Button Action

- GIVEN the user clicks the CTA button
- WHEN clicked
- THEN the user scrolls to the contact section or navigates to contact page

### Requirement: Footer with Contact and Links

The system MUST display a footer with essential information and links.

#### Scenario: Footer Content

- GIVEN the user scrolls to the bottom of the page
- WHEN the footer renders
- THEN it contains: copyright, professional email, social media links, quick links list
- AND all links are functional and properly styled

#### Scenario: Email Link

- GIVEN the footer email address
- WHEN clicked
- THEN the default email client opens with a pre-filled "Contact from Portfolio" subject
- AND the recipient is the configured professional email

### Requirement: Dark/Light Theme Toggle

The system MUST provide a theme toggle that allows users to switch between dark and light themes.

#### Scenario: Theme Persistence

- GIVEN a user with their preferred theme already selected
- WHEN the page reloads
- THEN their theme preference is applied
- AND the icon in the navbar reflects the current theme

#### Scenario: System Preference Fallback

- GIVEN a new user visiting for the first time
- WHEN the page loads
- THEN the theme matches their system preference (if detected)
- AND if no system preference is detectable, default to dark theme

### Requirement: Page Performance and Accessibility

The system MUST meet performance and accessibility standards for a professional portfolio.

#### Scenario: First Contentful Paint

- GIVEN a user visits the homepage on a 4G connection
- WHEN the page loads
- THEN first contentful paint occurs within 1.8 seconds
- AND all above-the-fold content loads within 2.5 seconds

#### Scenario: Accessibility Compliance

- GIVEN a user navigates the site using a screen reader
- WHEN sections render
- THEN all interactive elements are keyboard accessible
- AND images have appropriate alt text
- AND ARIA labels are present for icons and buttons
- AND color contrast meets WCAG 2.1 AA standards

## Non-Functional Requirements

### Performance

- **Page Load**: Total page load time under 2.5 seconds on 4G networks
- **Lighthouse Score**: Minimum score of 90 in performance category
- **Animation Performance**: All Framer Motion animations run at 60fps
- **Bundle Size**: Total JavaScript under 200KB critical bundle

### Responsive Design

- **Mobile First**: Design must work on screens from 320px to 4-inch width
- **Tablet**: Supported from 768px width
- **Desktop**: Optimized for 1024px+ width
- **Breakpoints**: Use standard Tailwind breakpoints (320px, 768px, 1024px, 1280px, 1440px+)

### Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Graceful Degradation**: Animations may be reduced in older browsers

### Accessibility

- **WCAG 2.1 Level AA**: Conform to accessibility standards
- **Keyboard Navigation**: All functionality accessible via keyboard
- **Screen Reader Support**: Semantic HTML and proper ARIA attributes
- **Color Contrast**: Minimum contrast ratio of 4.5:1 for normal text

### Code Quality

- **TypeScript**: All React components typed with strict mode
- **Component Architecture**: Follow atomic design principles
- **Testing**: Component unit tests for 80%+ coverage of interactive elements

## Data Structures

### Portfolio Configuration (lib/portfolioConfig.ts)

```typescript
interface PortfolioConfig {
  // Site metadata
  site: {
    title: string;
    description: string;
    url: string;
    locale: string;
  };
  
  // Theme configuration
  theme: {
    default: 'dark' | 'light';
    Colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
    };
  };
  
  // Navigation
  navigation: {
    links: {
      label: string;
      href: string;
    }[];
  };
  
  // Hero section
  hero: {
    name: string;
    title: string;
    description: string;
    photoUrl: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary?: {
      label: string;
      href: string;
    };
    socialLinks: {
      github?: string;
      linkedin?: string;
      email?: string;
    }[];
  };
  
  // Services
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
  
  // Experience
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    current?: boolean;
  }[];
  
  // Portfolio
  portfolio: {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    links: {
      github?: string;
      demo?: string;
    };
  }[];
  
  // Testimonials
  testimonials: {
    name: string;
    role: string;
    company: string;
    quote: string;
    rating: number; // 1-5
  }[];
  
  // Contact
  contact: {
    email: string;
    headline: string;
    subheadline: string;
    socialLinks: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    }[];
  };
}
```

### Section Metadata

```typescript
interface SectionMeta {
  id: string;
  title: string;
  order: number;
  visible: boolean;
  animation?: {
    trigger: 'intersection' | 'scroll';
    delay: number;
    duration: number;
  };
}
```

### Theme Preferences

```typescript
interface ThemeState {
  current: 'dark' | 'light';
  systemPrefers: 'dark' | 'light' | null;
  canUpdate: boolean;
}
```

## API Contracts

### Server Action: Contact Form Submission

**Endpoint**: `/api/contact/route.ts`

**Request**:
```typescript
interface ContactFormData {
  name: string;      // Max 100 chars
  email: string;     // Valid email format
  subject: string;   // Max 200 chars
  message: string;   // Max 2000 chars
}
```

**Response**:
```typescript
interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}
```

**Behavior**:
- Validates all fields server-side
- Checks email format and message length
- Sends email via Resend API
- Returns success/error status
- Implements rate limiting (max 3 requests per 10 minutes)

## Animation Specifications

### Framer Motion Animation Properties

All section animations use consistent configuration:

```typescript
const sectionAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: 'easeOut',
    delay: 0.2
  }
};

const staggerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.4,
    staggerChildren: 0.1
  }
};
```

### Animation Triggers

- **Navbar**: Fixed position, minimal opacity transition on scroll
- **Hero**: Single entry animation on page load
- **Services**: Staggered card animation on intersection
- **Experience**: Timeline card animation with left/right alternation
- **Portfolio**: Grid items animate in on intersection
- **Testimonials**: Staggered card entrance
- **CTA**: Section-wide fade-in and slide-up
- **Footer**: Simple fade-in on intersection

## Dependencies

### Required Packages

```json
{
  "framer-motion": "^11.0",
  "lucide-react": "^0.400",
  "@radix-ui/react-dialog": "^1.0",
  "@radix-ui/react-tabs": "^1.0"
}
```

### External Services

- **Resend**: Email sending API
  - Environment: `RESEND_API_KEY`
  - Usage: Server-side email sending only

## Design Constraints

### Color Palette (Dark Mode Default)

- Background: `#0A0A0A`
- Surface: `#1A1A1A`
- Primary (Orange Accent): `#FF6B00`
- Text: `#FFFFFF`
- Text Secondary: `#A0A0A0`
- Border: `#2A2A2A`

### Color Palette (Light Mode)

- Background: `#F7F7F7`
- Surface: `#FFFFFF`
- Primary: `#FF6B00`
- Text: `#1A1A1A`
- Text Secondary: `#606060`
- Border: `#E0E0E0`

### Typography

- **Headings**: Inter / system-ui, font-weight 600-700
- **Body**: Inter / system-ui, font-weight 400
- **Code**: JetBrains Mono / monospace
- **Font Sizes**:
  - H1: 3rem - 4.5rem (desktop), 2rem (mobile)
  - H2: 2.25rem - 3rem (desktop), 1.75rem (mobile)
  - H3: 1.5rem - 2rem (desktop), 1.25rem (mobile)
  - Body: 1rem - 1.125rem

## Testing Considerations

### Component Tests

- Navbar: Theme toggle, mobile menu, link navigation
- Hero: Image loading, button actions, social links
- Services: Grid responsiveness, card hover effects
- Experience: Timeline render, current indicator
- Portfolio: Filtering logic, project card rendering
- Testimonials: Rating display, quote formatting
- CTA: Button click, scroll behavior
- Footer: Link validation, email link

### Integration Tests

- Theme switching persists across page navigations
- Smooth scrolling works for anchor links
- Mobile menu opens/closes with proper animation
- Contact form validation and submission flow
- Intersection observers trigger animations

### E2E Tests

- Full page scroll with all sections rendering
- Theme toggle across multiple visits
- Contact form successful submission
- All external links redirect correctly
- Responsive breakpoints at 768px and 1024px
