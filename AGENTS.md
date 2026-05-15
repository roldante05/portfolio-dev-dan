# Next.js Project Guidelines

## Development Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Important Notes
- **File Structure**: Uses App Router (pages in `app/` directory, not `pages/`)
- **Styling**: Tailwind CSS v4 configured via `postcss.config.mjs`
- **TypeScript**: Strict mode enabled with Next.js plugin
- **Components**: Edit `app/page.tsx` to modify the homepage
- **CSS**: No separate CSS files needed - use Tailwind classes directly

## Common Gotchas
- Next.js 16 has breaking changes from older versions - consult official docs
- Server components are default in App Router - use 'use client' for client-side logic
- Tailwind v4 uses different syntax than v3 - check configuration