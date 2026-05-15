# Portfolio SEO Specification

## Purpose

Define the SEO metadata configuration, Open Graph tags, structured data, and search engine optimization requirements for the portfolio website to maximize visibility and proper representation across search engines and social platforms.

## Requirements

### Requirement: Global SEO Metadata Configuration

The system MUST provide comprehensive, configurable SEO metadata that applies across the entire portfolio site with sensible defaults and page-specific overrides.

#### Scenario: Site Metadata Configuration

- GIVEN the portfolio site configuration
- WHEN metadata loads
- THEN it includes:
  - Site title (e.g., "Dann Roldan | Backend Developer")
  - Site description (160-180 characters, compelling summary)
  - Author/Creator name
  - Site URL (canonical base URL)
  - Language (es-AR for Argentine Spanish)
  - Theme color for browser UI (dark theme: #0A0A0A)
- AND these values are accessible via configuration file

#### Scenario: Default Metadata Fallback

- GIVEN a page without custom metadata
- WHEN a user visits the page
- THEN the site uses consistent default metadata
- AND all required Open Graph and meta tags render from defaults

#### Scenario: Metadata Override Possibility

- GIVEN a specific page requiring unique metadata
- WHEN the page renders
- THEN page-specific metadata overrides global defaults
- AND overrides include: title, description, URL, and Open Graph properties

### Requirement: Page Title Structure and Optimization

The system MUST generate optimal title tags for each page following SEO best practices.

#### Scenario: Homepage Title

- GIVEN the homepage is loading
- WHEN title tag renders
- THEN it follows pattern: "{Name} | {Professional Role}"
- AND title is under 60 characters for optimal SERP display
- AND includes primary keyword "backend developer"

#### Scenario: Contact Page Title

- GIVEN the contact page is loading
- WHEN title tag renders
- THEN it follows pattern: "Contact {Name} | {Professional Role}"
- AND title is under 60 characters
- AND clearly indicates contact purpose

#### Scenario: Dynamic Title Updates

- GIVEN a user navigates between pages
- WHEN page changes
- THEN document.title updates instantly
- AND no title appears as "undefined" or blank
- AND title reflects most current page context

### Requirement: Meta Description Configuration

The system MUST provide compelling, search-engine-optimized meta descriptions for key pages.

#### Scenario: Homepage Meta Description

- GIVEN the homepage
- WHEN meta description renders
- THEN it contains 150-160 characters
- AND includes primary keywords: "backend developer", "portfolio", "services"
- AND provides clear value proposition
- AND includes call to action or compelling differentiator

#### Scenario: Contact Page Meta Description

- GIVEN the contact page
- WHEN meta description renders
- THEN it mentions "contact {name}" and "portfolio developer"
- AND encourages contact or inquiry
- AND remains under 160 characters

#### Scenario: Description Character Limiting

- Given any meta description content
- When description is generated
- Then it automatically truncates at 160 characters with ellipsis (...) if needed
- And trailing punctuation is preserved if within limit

### Requirement: Open Graph Tags for Social Sharing

The system MUST implement Open Graph protocol tags to control how the portfolio appears when shared on social media platforms.

#### Scenario: Homepage Open Graph Tags

- GIVEN someone shares the homepage URL
- WHEN platform crawls the page
- THEN it finds:
  - `og:title`: "Dann Roldan | Backend Developer"
  - `og:description`: Compelling 2-3 sentence summary
  - `og:type`: "website"
  - `og:url`: "https://danrotoldan.dev/"
  - `og:image`: High-quality 1200x630px featured image
  - `og:image:alt`: "Professional portrait of Dann Roldan"
  - `og:site_name`: "Portfolio of Dann Roldan"
  - `og:locale`: "es_AR"

#### Scenario: Contact Page Open Graph Tags

- GIVEN the contact page URL is shared
- WHEN platform crawls
- THEN it finds:
  - `og:title`: "Contact Dann Roldan | Backend Developer"
  - `og:description`: Invites communication
  - `og:type`: "article" or "website"
  - `og:image`: Same as homepage for consistency
  - `og:locale`: "es_AR"

#### Scenario: Image Specifications

- Given Open Graph image specification
- When image renders
- Then it is at least 1200x630 pixels (1.91:1 ratio)
- And includes proper alt text for accessibility
- And is hosted on reliable CDN with fast load
- And loads in WebP format with fallback

### Requirement: Twitter Card Integration

The system MUST implement Twitter Card meta tags for optimal rendering on X/Twitter and compatibility with other platforms.

#### Scenario: Twitter Card Meta Tags

- GIVEN the homepage is loaded in Twitter preview
- WHEN Twitter scrapes the page
- THEN it finds:
  - `twitter:card`: "summary_large_image"
  - `twitter:title`: Same as og:title
  - `twitter:description`: Same as og:description
  - `twitter:image`: Same as og:image
  - `twitter:site`: "@dannroldan" (handle if available)
  - `twitter:creator`: "@dannroldan" (if applicable)

#### Scenario: Large Image Display

- Given a Twitter/X share of the portfolio
- When the link renders in feed
- Then it shows large preview image with overlay text
- And image captures attention in crowded feed
- And design remains professional and consistent

### Requirement: Canonical URL Configuration

The system MUST implement proper canonical URL tags to prevent duplicate content issues and consolidate SEO value.

#### Scenario: Homepage Canonical

- GIVEN the homepage loads
- WHEN canonical tag renders
- THEN it points to "https://danrotoldan.dev/" (no trailing slash)
- AND canonical URL matches the actual page URL exactly
- AND no duplicate URLs with/without trailing slash exist

#### Scenario: Contact Page Canonical

- GIVEN the contact page loads
- THEN canonical points to "https://danrotoldan.dev/contact"
- AND canonical reflects exact path without parameters
- AND same canonical regardless of query string (if any)

#### Scenario: Canonical Priority

- Given server receives request for duplicate URL
- When canonical tag processes
- Then it indicates preferred version to search engines
- And all internal links use canonical form
- And redirects prevent canonical conflicts

### Requirement: robots.txt and Sitemap Configuration

The system MUST provide standard SEO robot control files for search engine crawlers.

#### Scenario: robots.txt File

- GIVEN search engine crawler visits /robots.txt
- WHEN robots file loads
- THEN it includes:
  - User-agent directive
  -Disallow config for admin paths (if any)
  - Sitemap location reference
  - Host directive (optional)
- AND file is accessible at standard location

#### Scenario: Sitemap.xml Generation

- Given sitemap location specified in robots.txt
- When crawler requests sitemap
- Then it returns:
  - Homepage URL with priority 1.0
  - Contact page URL with priority 0.8
  - Lastmod timestamps for each page
  - Change freq settings (always/weekly)
- And sitemap is valid XML format
- And sitemap compresses to under 10KB

### Requirement: Structured Data (Schema.org)

The system MUST implement Schema.org structured data to enable rich results and enhanced search presentation.

#### Scenario: Person/Profile Structured Data

- GIVEN search engine crawls homepage
- WHEN structured data renders
- THEN it includes Person schema with:
  - Name: "Dann Roldan"
  - Job Title: "Backend Developer"
  - Description: Professional summary
  - URL: Portfolio URL
  -同 (optional): LinkedIn, GitHub profiles
  - Email: Protected contact email
  - Address: Location (if applicable)
  - Image: Profile photo URL
  - SameAs: Social media profiles

#### Scenario: Technical SEO Optimization

- Given structured data implementation
- When Google Rich Results Test checks
- Then it validates without errors
- And person schema is properly nested
- And all required fields are present

### Requirement: Technical SEO Headers and Status

The system MUST implement proper HTTP headers and response codes for search optimization.

#### Scenario: HTTP Status Codes

- Given various page states
- When server responds:
  - Homepage returns 200
  - Contact page returns 200
  - Non-existent pages return 404
  - Moved pages return 301/302 appropriately
- Then search engines receive correct status codes
- And 404 pages include minimal HTML for crawlers

#### Scenario: HTTP Security Headers

- Given page requests
- When server responds:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: same-origin
- Then security headers present
- And modern security practices followed

### Requirement: Performance Metadata and Core Web Vitals

The system MUST optimize for Google's Core Web Vitals and performance metrics.

#### Scenario: Loading Optimization

- Given homepage loads
- When performance metrics measure:
  - LCP under 2.5 seconds
  - FID under 100ms
  - CLS under 0.1
- Then metrics pass Core Web Vitals thresholds
- And optimization techniques applied appropriately

#### Scenario: Meta Charset and Viewport

- Given mobile device visits
- When page first renders:
  - `<meta charset="utf-8">` present in head
  - `<meta name="viewport" content="width=device-width, initial-scale=1">` present
  - No deprecated meta tags
- Then mobile rendering works correctly
- And viewport prevents zoom issues

### Requirement: Internationalization and Language Metadata

The system MUST include proper language and locale configuration for Argentine Spanish audience.

#### Scenario: Language Declaration

- Given page loads
- WHEN language metadata renders:
  - `<html lang="es">` or `<html lang="es-AR">`
  - `lang` attribute on root element
- THEN搜索引擎 correctly identifies language
- AND screen readers use appropriate pronunciation rules

#### Scenario: hreflang Configuration

- Given potential multilingual expansion
- THEN structure allows adding hreflang tags:
  - `<link rel="alternate" hreflang="es-AR" href="https://danrotoldan.dev/">`
  - `<link rel="alternate" hreflang="x-default" href="https://danrotoldan.dev/">`
- AND future expansion requires minimal changes

## Non-Functional Requirements

### Performance

- **Metadata Load**: SEO tags render within first paint, no blocking
- **Core Web Vitals**: All pages pass Google's Core Web Vitals thresholds
- **Lighthouse Score**: SEO category minimum 95/100
- **PageSpeed Score**: 90+ on both mobile and desktop

### Accessibility

- **Image Alt Text**: All Open Graph images have descriptive alt text
- **Language Code**: Proper language attributes on HTML elements
- **Structured Data**: Valid JSON-LD without accessibility issues

### Reliability

- **Consistency**: All pages maintain SEO naming conventions
- **Updates**: Metadata updates propagate across all pages
- **Validation**: Structured data validated regularly

### Security

- **No Exposed Secrets**: API keys, secrets not in metadata
- **Canonical Domains**: Only secure (HTTPS) URLs in canonical tags
- **XSS Prevention**: All dynamic metadata properly escaped

## Data Structures

### SEO Configuration Interface

```typescript
interface SeoMetadata {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  author?: string;
  language?: string;
  themeColor?: string;
  
  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  
  // Twitter Card
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  
  // Additional
  robots?: {
    index: boolean;
    follow: boolean;
  };
  canonical?: string;
  lastModified?: string;
}
```

### Configuration Files

**lib/portfolioConfig.ts**:
```typescript
export const portfolioConfig = {
  // SEO Configuration
  seo: {
    // Global site information
    site: {
      title: 'Dann Roldan',
      description: 'Backend Developer specializing in Laravel, API design, and modern web technologies',
      url: 'https://danrotoldan.dev',
      locale: 'es_AR',
      author: 'Dann Roldan',
      keywords: ['backend developer', 'laravel', 'api development', 'portfolio', 'software development'],
    },
    
    // Open Graph defaults
    og: {
      image: '/images/og-portfolio.jpg',
      imageWidth: '1200',
      imageHeight: '630',
      siteName: 'Portfolio of Dann Roldan',
    },
    
    // Twitter Card defaults
    twitter: {
      card: 'summary_large_image',
      handle: '@dannroldan',
    },
    
    // Performance targets
    performance: {
      lighthouse: {
        seo: 95,
        accessibility: 95,
        bestPractices: 95,
        performance: 90,
      },
    },
  },
  
  // Social profiles for structured data
  social: {
    github: 'https://github.com/dannroldan',
    linkedin: 'https://linkedin.com/in/dannroldan',
    // Add others as needed
  },
} as const;
```

### Structured Data Markup

**JSON-LD Schema for Person Profile**:
```typescript
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Dann Roldan',
  'jobTitle': 'Backend Developer',
  'url': 'https://danrotoldan.dev',
  'sameAs': [
    'https://github.com/dannroldan',
    'https://linkedin.com/in/dannroldan',
  ],
  'knowsAbout': ['PHP', 'Laravel', 'API Design', 'Database Design', 'Backend Development'],
  'description': 'Specialized Backend Developer focused on building scalable, maintainable server-side applications using modern technologies',
  'email': 'mailto:contact@danrotoldan.dev',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'AR'
  }
};
```

**JSON-LD Schema for WebPage**:
```typescript
const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Dann Roldan | Backend Developer Portfolio',
  'description': 'Professional portfolio showcasing backend development services, projects, and technical expertise',
  'url': 'https://danrotoldan.dev',
  'datePublished': '2026-05-14',
  'dateModified': '2026-05-14',
  'primaryImageOfPage': 'https://danrotoldan.dev/images/og-portfolio.jpg',
  'inLanguage': 'es-AR'
};
```

## API Contracts

### Metadata Delivery Format

**Server Component Metadata Prop**:
```typescript
interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  keywords?: string[];
}

// Example usage
<Seo
  title="Contact"
  description="Get in touch with Dann Roldan for backend development services"
  ogType="website"
/>
```

### Structured Data Embedding

**HTML Output**:
```html
<!-- SEO Meta Tags -->
<head>
  <title>Dann Roldan | Backend Developer</title>
  <meta name="description" content="Specialized Backend Developer with expertise in Laravel, API design, and modern web technologies">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Dann Roldan | Backend Developer">
  <meta property="og:description" content="Professional portfolio showcasing backend development services">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://danrotoldan.dev/">
  <meta property="og:image" content="https://danrotoldan.dev/images/og-portfolio.jpg">
  <meta property="og:image:alt" content="Dann Roldan Professional Portrait">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Dann Roldan | Backend Developer">
  <meta name="twitter:image" content="https://danrotoldan.dev/images/og-portfolio.jpg">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://danrotoldan.dev/">
  
  <!-- Theme Color -->
  <meta name="theme-color" content="#0A0A0A">
  
  <!-- Language -->
  <html lang="es-AR">
</head>
```

**JSON-LD Script Element**:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dann Roldan",
  "jobTitle": "Backend Developer",
  "url": "https://danrotoldan.dev",
  "sameAs": [
    "https://github.com/dannroldan",
    "https://linkedin.com/in/dannroldan"
  ],
  "knowsAbout": ["PHP", "Laravel", "API Design", "Database Design"]
}
</script>
```

### robots.txt Interface

**Response Headers**:
```
HTTP/1.1 200 OK
Content-Type: text/plain

User-agent: *
Allow: /

Sitemap: https://danrotoldan.dev/sitemap.xml
```

**sitemap.xml**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://danrotoldan.dev/</loc>
    <lastmod>2026-05-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://danrotoldan.dev/contact</loc>
    <lastmod>2026-05-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Implementation Requirements

### File Structure

```
app/
├── layout.tsx              # Root layout with SEO metadata
├── page.tsx                # Homepage (uses SEO metadata)
└── contact/
    └── page.tsx            # Contact page (has custom SEO)

public/
├── robots.txt              # Robot crawler instructions
└── sitemap.xml             # Site map for search engines

lib/
└── portfolioConfig.ts      # SEO configuration centralization
```

### SEO Component Implementation

**SEO Metadata Component**:
```typescript
// components/Seo.tsx
import { DefaultSeo } from 'next-seo';
import { seoConfig } from '@/lib/seoConfig';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
}

export function Seo({
  title = seoConfig.title,
  description = seoConfig.description,
  url = seoConfig.url,
  ogImage = seoConfig.og.image,
  ogType = seoConfig.og.type,
  twitterCard = seoConfig.twitter.card,
  noindex = false,
}: SeoProps) {
  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: ogType,
          images: [{ url: ogImage, alt: title }],
        }}
        twitter={{
          cardType: twitterCard,
        }}
      />
      {noindex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </>
  );
}
```

**Root Layout with SEO**:
```typescript
// app/layout.tsx
import { Seo } from '@/components/Seo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0A" />
        
        {/* SEO Component injects head tags */}
        <Seo />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Dann Roldan',
              'jobTitle': 'Backend Developer',
              'url': 'https://danrotoldan.dev',
              'sameAs': [
                'https://github.com/dannroldan',
                'https://linkedin.com/in/dannroldan',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Sitemap Generation

**Sitemap Server Route**:
```typescript
// app/sitemap/route.ts
import { seoConfig } from '@/lib/portfolioConfig';

export async function GET() {
  const pages = [
    '',
    '/contact',
  ];
  
  const urls = pages.map((page) => ({
    url: `${seoConfig.seo.site.url}${page}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? '1.0' : '0.8',
  }));
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `
    <url>
      <loc>${url.url}</loc>
      <lastmod>${url.lastModified}</lastmod>
      <changefreq>${url.changeFrequency}</changefreq>
      <priority>${url.priority}</priority>
    </url>
    `).join('')}
  </urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
```

**Robots.txt Server Route**:
```typescript
// app/robots/route.ts
export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /
    
    Sitemap: ${seoConfig.seo.site.url}/sitemap.xml
  `.trim();
  
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
```

## SEO Quality Checks

### Lighthouse Requirements

| Metric | Target | Minimum |
|--------|--------|---------|
| Performance | 95+ | 90 |
| Accessibility | 95+ | 90 |
| Best Practices | 95+ | 90 |
| SEO | 100 | 95 |
| PWA | N/A | N/A |

### Google Search Console Requirements

- **Meta Descriptions**: 150-160 characters for all pages
- **Title/tags**: Under 60 characters, include keywords
- **Image Alt Text**: All images have descriptive alt text
- **Internal Links**: Proper linking structure
- **Mobile Friendly**: Pass Google's mobile test
- **Core Web Vitals**: All three metrics pass

### Testing Requirements

**SEO Validation Tests**:
- All required meta tags present on each page
- Open Graph tags render correctly for sharing
- Twitter Card renders with large image
- Structured data passes Google's Rich Results Test
- Canonical URLs consistent with actual URLs
- No duplicate content issues
- robots.txt accessible at /robots.txt
- sitemap.xml valid and accessible at /sitemap.xml
- HTTP headers include security and SEO headers
- Lighthouse SEO score ≥ 95

**Share Preview Tests**:
- Facebook shares show correct title, description, image
- Twitter/X shows large image card
- LinkedIn shows professional preview
- WhatsApp shares include proper metadata
- All platforms render without errors

## Configuration参考

### Environment Variables

```bash
# SEO Configuration
NEXT_PUBLIC_APP_URL="https://danrotoldan.dev"
NEXT_PUBLIC_APP_NAME="Dann Roldan"

# SEO Configuration
SEO_SITE_TITLE="Dann Roldan | Backend Developer"
SEO_SITE_DESCRIPTION="Backend Developer specializing in Laravel, API design, and modern web technologies"
SEO_SITE_URL="https://danrotoldan.dev"
SEO_SITE_LOCALE="es_AR"
```

### Google Search Console Submission

1. Verify ownership via DNS record or HTML file
2. Submit sitemap: `https://danrotoldan.dev/sitemap.xml`
3. Monitor performance metrics
4. Fix any crawl errors
5. Request indexing for new pages

### Bing Webmaster Tools

1. Verify ownership
2. Submit sitemap: `https://danrotoldan.dev/sitemap.xml`
3. Monitor indexing status
4. Check for crawl errors
