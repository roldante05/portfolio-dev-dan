# Final Portfolio Changes Plan

## Current State
The Portfolio.tsx currently implements a carousel/slider layout with:
- Single project display with navigation arrows
- Hover zoom effects on images
- Overlay link icons
- Category filtering
- Framer-motion animations

## Requested Changes
Based on user feedback, convert to:
1. Grid layout showing 3 projects side by side on desktop
2. Remove hover zoom effects
3. Remove overlay icons
4. Add "Ver repo" buttons for personal projects with GitHub links
5. Add company website links for CyberArg and Valida projects

## Implementation Plan

### 1. Modify Project Data Structure
Add `url` field to each project in the projects array:

```javascript
// VALIDA projects
url: "https://valida.ai/nosotros/"

// CYBERARG projects
{
  title: "CG-GLOBAL: Solución ERP Integral",
  url: "https://cyberargsistemas.com.ar"
}
{
  title: "Lamperti S.A. - Portal Corporativo", 
  url: "https://www.lamperti.com.ar/"
}
{
  title: "NetPatagonia - Optimización Web",
  url: "https://netpatagonia.com.ar/"
}

// PERSONAL projects
{
  title: "Scaffolding Factory",
  url: "https://github.com/roldante05/scaffolding-factory"
}
// ... and so on for other personal projects
```

### 2. Change Layout from Slider to Grid
Replace the current carousel implementation:

**REMOVE:**
- currentIndex state
- nextSlide/prevSlide functions  
- AnimatePresence wrapper with motion.div for sliding
- Navigation buttons (left/right arrows)
- Pagination indicators

**ADD:**
- Simple grid layout: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8`
- Map filteredProjects directly to motion.div cards (keeping framer-motion for entrance animations)

### 3. Update Card Content and Styling

**For each project card:**

**REMOVE:**
- `group-hover:scale-110 transition-transform duration-700 ease-out` from Image
- Overlay div containing ArrowUpRight icon
- Link wrapper that made entire card clickable (will replace with conditional linking)

**ADD:**
- Conditional linking based on project.url:
  ```javascript
  {project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
      {/* Card content */}
    </a>
  ) : (
    <div className="block">
      {/* Card content */}
    </div>
  )}
  ```

- "Ver repo" button for personal projects:
  ```javascript
  {project.category === "Personales" && project.url && (
    <div className="absolute bottom-4 left-4 right-4 flex justify-center pt-4">
      <a href={project.url} target="_blank" rel="noopener noreferrer"
         className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
        Ver repo <Github size={16} />
      </a>
    </div>
  )}
  ```

### 4. Maintain Existing Features
- Keep framer-motion entrance animations (initial={{ opacity: 0, y: 20 }}, etc.)
- Keep category filtering functionality
- Keep responsive behavior (1 column mobile, 2 tablet, 3 desktop)
- Keep button styling for category filters
- Keep section heading and layout

### 5. Required Imports
Add to existing imports:
```javascript
import { Github } from "lucide-react";
```

Remove unused imports:
- ArrowUpRight (no longer used for overlay)
- AnimatePresence, ChevronLeft, ChevronRight (from slider implementation)

## Expected Result
- Desktop view: 3 project cards per row
- Tablet view: 2 project cards per row  
- Mobile view: 1 project card per row
- Clean image display without zoom effects
- Personal projects show prominent "Ver repo" button with GitHub icon
- All cards link to appropriate URLs (GitHub for personal, company sites for business)
- Smooth entrance animations preserved
- Category filtering working correctly
- No visual indication that images are links (removing misleading overlay icons)

## Files to Modify
1. `/components/sections/Portfolio.tsx` - Complete rewrite of component

## Dependencies
No new dependencies needed - using existing lucide-react icons.

## Implementation Notes
1. Position "Ver repo" button absolutely at bottom of card with proper spacing
2. Ensure links open in new tab with security attributes (target="_blank" rel="noopener noreferrer")
3. Maintain visual hierarchy: image -> title -> description -> category tag -> button (if applicable)
4. Use subtle hover effects (like shadow lift) instead of zoom to indicate interactivity
5. Ensure button is visible and accessible on all image types