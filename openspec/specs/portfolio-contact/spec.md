# Portfolio Contact Specification

## Purpose

Define the contact form implementation, server-side email processing, and verification system for the portfolio website that enables visitors to send messages via Resend email service.

## Requirements

### Requirement: Contact Form UI Components

The system MUST provide a fully functional contact form with proper input validation, user feedback, and responsive layout.

#### Scenario: Form Structure

- GIVEN a user visits the contact page
- WHEN the page loads
- THEN the form displays: name field, email field, subject field, message textarea, and submit button
- AND all fields are properly labeled with associated form labels
- AND required fields display visual indicators

#### Scenario: Field Validation

- GIVEN a user attempts to submit the form
- WHEN any required field is empty or invalid
- THEN the form prevents submission
- AND validation errors display next to invalid fields
- AND error messages indicate the specific issue (e.g., "Invalid email format", "Name is required")

#### Scenario: Responsive Form Layout

- GIVEN a mobile device (width < 768px)
- WHEN the contact form renders
- THEN fields stack vertically in a single column
- AND buttons are full-width with comfortable touch targets (min 44px height)
- AND form padding adjusts for mobile screen width

#### Scenario: Desktop Form Layout

- GIVEN a desktop browser (width ≥ 1024px)
- WHEN the contact form renders
- THEN the form appears in a centered container withmax-width of 600px
- AND fields display side-by-side where appropriate (name/email on same row)
- AND container includes padding for visual balance

### Requirement: Contact Form State Management

The system MUST manage form state with clear feedback for all possible user interactions.

#### Scenario: Loading State

- GIVEN the user has filled all required fields
- WHEN the user clicks submit
- THEN the form enters loading state
- AND submit button shows loading spinner or progress indicator
- AND form fields become disabled during loading
- AND status message displays "Sending message..."

#### Scenario: Success State

- GIVEN the form is in loading state
- WHEN the server responds with success
- THEN the form displays success message
- AND all input fields are reset to empty state
- AND a success indicator (green checkmark or similar) appears
- AND the success message stays visible for at least 5 seconds

#### Scenario: Error State

- GIVEN the form is in loading state
- WHEN the server responds with error
- THEN the form displays error message
- AND the submit button returns to enabled state
- AND form fields return to enabled state
- AND error message includes specific error details or general indication

#### Scenario: Network Error

- GIVEN the user submits the form
- WHEN the network request fails before reaching server
- THEN the form displays network error message
- AND the error indicates "Connection failed. Please check your internet connection"
- AND the user can retry submission

### Requirement: Email Sender Server Action

The system MUST provide a secure server-side email sending mechanism using Resend API.

#### Scenario: API Endpoint Structure

- GIVEN the contact form submits data
- WHEN data is sent to `/api/contact/route.ts`
- THEN the endpoint accepts POST requests with JSON body
- AND the request follows CORS configuration for the portfolio domain

#### Scenario: Server Request Validation

- GIVEN an API request to contact endpoint
- WHEN the request body is received
- THEN the server validates:
  - `name` exists and is string with 1-100 characters
  - `email` exists and matches email format regex
  - `subject` exists and is string with 1-200 characters
  - `message` exists and is string with 1-2000 characters
- AND validation errors return 400 status with error details

#### Scenario: Email Sending Process

- GIVEN request data passes validation
- WHEN the email sending process begins
- THEN the system:
  1. Extracts sender info from form data
  2. Constructs email object with:
     - from: "Portfolio Contact <contact@domain.com>"
     - to: Dann's professional email (from config)
     - subject: "[Portfolio] {user subject}"
     - html: Formatted email body with sender info
  3. Calls Resend API with email object
  4. Returns success response with Resend email ID

#### Scenario: Resend Integration

- GIVEN the Resend API call is made
- WHEN the API responds
- THEN the endpoint returns:
  - Success: 200 status with email ID and success message
  - Error: 400/500 status with error details from Resend
  - Rate limit: 429 status if daily limit exceeded
- AND the Resend API key is fetched from environment

#### Scenario: Email Template Structure

- GIVEN an email is being constructed
- WHEN the HTML body is generated
- THEN the template includes:
  - greetin with sender name
  - sender email for reply
  - subject line from form
  - message content formatted as blockquote or preformatted
  - footer with portfolio link and date
  - optional: sender IP and timestamp for admin reference

#### Scenario: Daily Email Limit Handling

- GIVEN the Resend API returns rate limit error
- WHEN daily email limit is reached
- THEN the endpoint returns 429 status
- AND error message indicates "Daily email limit reached. Please try again later"
- AND the form UI displays appropriate user-friendly error message

### Requirement: Rate Limiting and Security

The system MUST implement security measures to prevent abuse and maintain service availability.

#### Scenario: Rate Limiting by IP

- GIVEN the contact endpoint receives requests
- WHEN the same IP makes requests within rate limit window
- THEN the system:
  - tracks requests per IP address
  - maintains 15-minute sliding window
  - allows max 5 requests per window
  - returns 429 when limit exceeded
- AND rate limit headers include remaining requests and reset time

#### Scenario: Spam Protection

- GIVEN a form submission
- WHEN the submission contains:
  - URLs in name, subject, or message fields
  - Suspicious keywords (common spam triggers)
  - Unusual payload structure
- THEN the system either:
  - Blocks the request with 403 status
  - OR logs and flags for manual review
- AND the response to user indicates "Message could not be delivered" without revealing blocking mechanism

#### Scenario: Input Sanitization

- GIVEN form data passes initial validation
- WHEN data is prepared for email
- THEN the system:
  - Sanitizes HTML entities in all fields
  - Removes control characters
  - Strips markdown syntax from message
  - Normalizes whitespace in text fields
- AND sanitized data is used in email template

### Requirement: User Experience Enhancements

The system MUST provide a smooth, intuitive contact experience with helpful guidance and feedback.

#### Scenario: Form Placeholder Text

- GIVEN the contact page loads
- WHEN fields render
- THEN placeholders provide usage guidance:
  - Name: "Your full name"
  - Email: "your.email@example.com"
  - Subject: "Brief subject line"
  - Message: "Tell me about your project or inquiry..."
- AND placeholders disappear when input receives focus

#### Scenario: Character Counters

- GIVEN the message textarea
- WHEN the user types
- THEN a character counter shows current/max length
- AND counter changes color when approaching limit (80% used)
- AND input prevents typing beyond max limit

#### Scenario: Auto-Focus Behavior

- GIVEN the page loads or validation errors exist
- WHEN the page renders
- THEN the first invalid field or first required field receives focus
- AND the field is scrolled into view smoothly

#### Scenario: Accessibility for Screen Readers

- Given a screen reader user navigates the form
- WHEN the form renders
- THEN:
  - All fields have proper ARIA labels
  - Error messages announce when they appear
  - Success message announces when form submits successfully
  - Form role is properly set (form, article)
- AND keyboard navigation follows logical tab order

### Requirement: Email Delivery Verification

The system MUST provide mechanisms for verifying and tracking sent messages.

#### Scenario: Email Confirmation Log

- GIVEN an email is sent successfully
- WHEN the email is processed
- THEN the system:
  - Logs email timestamp, sender info (masked email), subject
  - Stores in console log or error reporting service
  - Excludes full email content from logs
- AND the log entry is tagged with email ID for traceability

#### Scenario: Admin Notification

- GIVEN the portfolio owner receives a contact email
- WHEN the email arrives in their inbox
- THEN the email:
  - Has clear "[Portfolio]" prefix in subject
  - Includes sender name and email in body
  - Contains original message content
  - May include timestamp and sender IP in footer
- AND the email appears in inbox within 30 seconds of submission

#### Scenario: Email Receipt Acknowledgment

- Given the admin receives a contact email
- When they need to verify delivery
- Then they can search for emails with "[Portfolio]" in subject
- AND the Resend email ID is available in server logs for cross-reference

## Non-Functional Requirements

### Performance

- **Form Load Time**: Contact page loads in under 1 second
- **Form Submission Latency**: API response in under 2 seconds under normal load
- **Email Delivery**: Email arrives in inbox within 30 seconds (typically immediate)

### Reliability

- **Uptime**: API endpoint should be available 99.9% of the time
- **Retry Logic**: On transient failures, retry up to 2 times before giving up
- **Fallback**: If email fails, display user-friendly message without technical details

### Security

- **CSRF Protection**: Server action includes Next.js built-in CSRF protection
- **Rate Limiting**: Maximum 5 requests per 15 minutes per IP
- **Input Validation**: Strict server-side validation in addition to client-side
- **Environment Variables**: API keys never exposed to client bundle
- **XSS Protection**: All user inputs sanitized before inclusion in email

### Accessibility

- **WCAG 2.1 AA**: Full compliance for form elements and feedback mechanisms
- **Keyboard Navigation**: Tab order follows logical flow
- **Error Announcements**: Screen readers announce errors immediately
- **Focus Management**: Focus returns to appropriate element after actions

### Email Delivery

- **Email Provider**: Resend API v2
- **Domain**: Custom domain for sender email
- **SPF/DKIM**: Proper DNS configuration for deliverability
- **Bounce Handling**: Integration with Resend bounce webhooks if available

## Data Structures

### Contact Form Input (Client-side)

```typescript
interface ContactFormData {
  name: string;      // Required, 1-100 chars
  email: string;     // Required, valid email format
  subject: string;   // Required, 1-200 chars
  message: string;   // Required, 1-2000 chars
}

interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: string;
}
```

### Contact Form Response (Server-side)

```typescript
interface ContactSuccessResponse {
  success: true;
  message: string;
  emailId: string;      // Resend email ID for tracking
  status: number;       // 200
}

interface ContactErrorResponse {
  success: false;
  message: string;
  error?: string;       // Detailed error for debugging
  status: number;       // 400, 429, 500, etc.
}

type ContactResponse = ContactSuccessResponse | ContactErrorResponse;
```

### Contact Form API Request/Response

```typescript
// Request
interface ContactApiRequest {
  method: 'POST';
  headers: {
    'Content-Type': 'application/json';
    'X-Forwarded-For'?: string; // Client IP
  };
  body: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

// Response
interface ContactApiResponse {
  ok: boolean;
  status: number;
  statusText: string;
  headers: Headers;
  json: () => Promise<ContactResponse>;
}
```

### Rate Limit Tracking

```typescript
interface RateLimitState {
  ip: string;
  requests: number;
  windowStart: number;      // Timestamp in ms
  windowMs: number;         // 15 * 60 * 1000 (15 minutes)
  maxRequests: number;      // 5
}

interface RateLimitHeaders {
  'X-RateLimit-Limit': string;
  'X-RateLimit-Remaining': string;
  'X-RateLimit-Reset': string;  // ISO timestamp
}
```

## API Contracts

### Contact API Endpoint

**Endpoint**: `POST /api/contact/route.ts`

**Request Format**:
```typescript
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your backend development services..."
}
```

**Response Format (Success)**:
```typescript
{
  "success": true,
  "message": "Message sent successfully",
  "emailId": "email_1234567890",
  "status": 200
}
```

**Response Format (Validation Error)**:
```typescript
{
  "success": false,
  "message": "Invalid email format",
  "status": 400,
  "field": "email"
}
```

**Response Format (Rate Limit)**:
```typescript
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "status": 429,
  "retryAfter": 900  // seconds
}
```

**Response Format (Email Failure)**:
```typescript
{
  "success": false,
  "message": "Failed to send message. Please try again.",
  "error": "Resend API error details",
  "status": 500
}
```

**Headers on Rate Limit**:
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 2026-05-14T15:45:00Z
Retry-After: 900
```

### Resend Email API Integration

**Service**: Resend API (v2)

**Configuration**:
```typescript
interface ResendConfig {
  apiKey: string;           // From process.env.RESEND_API_KEY
  fromEmail: string;        // "contact@domain.com"
  toEmail: string;          // Portfolio owner's email
}
```

**Email Object**:
```typescript
interface ResendEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
  reply_to?: string;
}
```

**Email HTML Template**:
```typescript
const emailTemplate = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">New Contact from Portfolio</h2>
    <p><strong>Sender:</strong> ${senderName}</p>
    <p><strong>Email:</strong> ${senderEmail}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
    <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
      <p style="white-space: pre-wrap; margin: 0;">${message}</p>
    </div>
    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
    <p style="color: #666; font-size: 12px;">
      Received at: ${timestamp}<br />
      Sender IP: ${senderIP}
    </p>
  </div>
`;
```

## Implementation Requirements

### File Structure

```
app/
├── contact/
│   └── page.tsx               # Contact page component
└── api/
    └── contact/
        └── route.ts           # Next.js API route handler
```

### Client-Side Component Requirements

**ContactForm Component**:
- Controlled inputs with validation
- Loading, success, error states
- Accessibility attributes
- Keyboard navigation support
- Responsive styling with Tailwind

**ContactPage Component**:
- SEO metadata (using `portfolio-seo` spec)
- Form component integration
- Success/error announcements
- Heading structure with proper semantics

### Server Action Implementation

**Validation Logic**:
```typescript
function validateContactData(data: ContactFormData): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  
  if (!data.name || data.name.trim().length < 1 || data.name.length > 100) {
    errors.name = 'Name must be between 1 and 100 characters';
  }
  
  if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.subject || data.subject.length < 1 || data.subject.length > 200) {
    errors.subject = 'Subject must be between 1 and 200 characters';
  }
  
  if (!data.message || data.message.length < 1 || data.message.length > 2000) {
    errors.message = 'Message must be between 1 and 2000 characters';
  }
  
  return { valid: Object.keys(errors).length === 0, errors };
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.toLowerCase());
}
```

**Rate Limiting Function**:
```typescript
function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;  // Timestamp in ms
} {
  // Implementation using Redis or in-memory Map for production
  // For development: simple in-memory tracking
}
```

### Testing Requirements

**Unit Tests**:
- Form validation for all fields
- Email format validation
- Rate limit checking logic
- Email template generation
- Input sanitization

**Integration Tests**:
- Contact form submission flow
- API endpoint response handling
- Resend API integration
- Success state transitions
- Error state handling

**E2E Tests**:
- Complete user journey from form load to success
- Theme toggling on contact page
- MobileResponsive form behavior
- Invalid submission handling
- Rate limiting enforcement

### Environment Variables

```bash
# Configuration
NEXT_PUBLIC_APP_NAME="Portfolio"
NEXT_PUBLIC_APP_URL="https://danrotoldan.dev"

# Email
RESEND_API_KEY="re_1234567890_abcde"  # Required, from Resend dashboard
PORTFOLIO_EMAIL="contact@danrotoldan.dev"  # Your professional email
```

### Error Handling Scenarios

| Error Type | HTTP Status | User Message | Log Level |
|------------|-------------|--------------|-----------|
| Validation error | 400 | "Please correct the errors below" | Warning |
| Rate limited | 429 | "Too many requests. Try again later" | Warning |
| Resend API error | 500 | "Message failed to send. Try again" | Error |
| Network error | 503 | "Connection failed. Check internet" | Error |
| Unknown error | 500 | "Unexpected error occurred" | Error |

## Accessibility Requirements

### Form Accessibility

- **Labels**: All inputs have `<label for="field-id">` elements
- **Errors**: Invalid fields have `aria-invalid="true"` and error message associated with `aria-describedby`
- **Focus**: Error messages receive focus when displayed
- **Required**: Required fields have `aria-required="true"`

### Screen Reader Compatibility

- Form section has `role="form"` or semantic `<form>` element
- Success message uses `role="status"` or `aria-live="polite"`
- Error messages use `role="alert"` or `aria-live="assertive"`
- All interactive elements focusable via tab key

### Keyboard Navigation

- Tab order: Name → Email → Subject → Message → Submit
- Form submission with Enter key in any field
- Validation errors prevent submission but allow corrections
- No keyboard traps inside form elements
