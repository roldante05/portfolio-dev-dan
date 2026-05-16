# Portfolio Implementation Plan

## Objective
Modify Portfolio.tsx to display projects in a 3-column grid layout (responsive) with:
- No hover zoom effects
- No overlay link icons
- "Ver repo" buttons for personal projects
- Direct links to project/company websites
- Preserved filtering and animations

## Current State Analysis
The current Portfolio.tsx implements:
1. A carousel/slider showing one project at a time
2. Hover zoom effects (group-hover:scale-110)
3. Overlay icons making images appear as links
4. Category filtering
5. Framer-motion animations for slide transitions
6. Navigation arrows and pagination dots

## Required Changes

### 1. Data Structure Enhancement
Add `url` property to each project object:
- VALIDA projects: "https://valida.ai/nosotros/"
- CyberArg CG-GLOBAL: "https://cyberargsistemas.com.ar"  
- CyberArg Lamperti: "https://www.lamperti.com.ar/"
- CyberArg NetPatagonia: "https://netpatagonia.com.ar/"
- Personal Scaffolding Factory: "https://github.com/roldante05/scaffolding-factory"
- Personal TV-FlexDan: "https://github.com/roldante05/tv-flexdan"
- Personal Sistema Ventas: "https://github.com/roldante05/php/tree/main/sistema_ventas"
- Personal Roldy Burger: "https://github.com/roldante05/laravel/tree/main/burger2022"
- Personal ABM Clientes: "https://github.com/roldante05/php/tree/main/abmclientes"

### 2. Layout Transformation
Convert from carousel to responsive grid:
- Replace carousel container with: `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">`
- Remove all carousel state (currentIndex, navigation functions)
- Remove AnimatePresence and slide transition logic
- Keep framer-motion for individual card entrance animations

### 3. Visual Modifications Per Card
For each project card:
**REMOVE:**
- `group-hover:scale-110 transition-transform duration-700 ease-out` from Image
- Overlay div containing ArrowUpRight icon (lines 141-145)
- Link wrapper that made entire card clickable

**ADD:**
- Conditional linking: wrap card in `<a>` if project.url exists
- For personal projects: add "Ver repo" button overlay
- Subtle hover indicator (shadow lift) instead of zoom
- Proper spacing and positioning for overlay elements

### 4. Implementation Details

#### Import Changes
```javascript
// ADD
import { Github } from "lucide-react"
// REMOVE (unused)
ArrowUpRight, ChevronLeft, ChevronRight
```

#### Card Template
```javascript
{motion.div
  key={project.title}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  className="group"
>
  {project.url ? (
    <a href={project.url} target="_blank" rel="noopener noreferrer" 
       className="block hover:shadow-lg transition-shadow duration-300">
      {/* Card content */}
    </a>
  ) : (
    <div className="block">
      {/* Card content */}
    </div>
  )}
  
  {/* Ver repo button for personal projects */}
  {project.category === "Personales" && project.url && (
    <div className="absolute bottom-4 left-4 right-4 flex justify-center pt-4">
      <a href={project.url} target="_blank" rel="noopener noreferrer"
         className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
        Ver repo <Github size={16} />
      </a>
    </div>
  )}
</motion.div>
```

#### Internal Card Structure
```javascript
<div className="relative aspect-video rounded-3xl overflow-hidden mb-4 bg-surface border border-white/5">
  <Image
    src={project.image}
    alt={project.title}
    fill
    className="object-cover object-top"
  />
</div>
<div className="p-4">
  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
  <p className="text-text-dim text-sm max-w-sm">{project.description}</p>
  <span className="text-xs font-bold text-primary uppercase tracking-widest block mt-2">
    {project.category}
  </span>
</div>
```

### 5. Preserved Features
- Category filtering buttons and logic
- Section heading and layout structure
- Framer-motion entrance animations for cards
- Responsive breakpoints (1→2→3 columns)
- Button styling for category filters
- External link behavior (target="_blank" rel="noopener noreferrer")

### 6. Expected Behavior
- Desktop (≥md): 3 projects per row
- Tablet (≥sm): 2 projects per row  
- Mobile: 1 project per row
- Clean image display without misleading hover effects
- Personal projects show clear "Ver repo" call-to-action
- All project cards link to appropriate destinations
- Smooth scroll-in animations maintained
- Filtering instantly updates visible projects

## Implementation Steps
1. Update projects array with URL fields
2. Replace carousel layout with responsive grid
3. Modify card content to include conditional linking
4. Add Ver repo button logic for personal projects
5. Update imports (add Github, remove unused icons)
6. Remove all carousel-specific state and functions
7. Preserve existing styling and animations where appropriate

## Files to Modify
- `/components/sections/Portfolio.tsx` (complete rewrite)

## Dependencies
No new dependencies required - uses existing lucide-react icons.

## Quality Checks
- [ ] Verify responsive behavior at all breakpoints
- [ ] Confirm all links work and open in new tab
- [ ] Ensure Ver repo button only appears on personal projects
- [ ] Validate category filtering still functions
- [ ] Check that hover effects are removed but interactivity remains
- [ ] Ensure framer-motion animations work correctly
- [ ] Confirm no linting or type errors