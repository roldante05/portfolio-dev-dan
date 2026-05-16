# Portfolio Updates Plan v2

## Summary
This plan outlines the requested updates to the Portfolio.tsx component to:
1. Show 3 projects side by side (grid layout)
2. Remove hover zoom effects on images
3. Remove overlay icons that make images look like links
4. Add "Ver repo" buttons for personal projects with GitHub links
5. Add company website links for CyberArg and Valida projects

## Changes Required

### 1. Portfolio.tsx Updates
- Revert from carousel/slider back to grid layout
- Change grid to show 3 columns on medium+ screens (md:grid-cols-3)
- Remove hover zoom effects (group-hover:scale-110 transition-transform)
- Remove overlay icon and link effects (div with ArrowUpRight)
- Add project URLs to the projects data or create URL mapping logic
- Add conditional rendering for:
  * "Ver repo" buttons for personal projects (linking to GitHub)
  * Company website links for CyberArg and Valida projects
- Maintain category filtering functionality

### 2. Project Data Enhancement
Add URL information to projects that need external links:

**Personal Projects:**
- Scaffolding Factory: https://github.com/roldante05/scaffolding-factory
- TV-FlexDan: https://github.com/roldante05/tv-flexdan
- Sistema de Gestión de Ventas: https://github.com/roldante05/php/tree/main/sistema_ventas
- ABM Clientes Pro: https://github.com/roldante05/php/tree/main/abmclientes
- Roldy Burger E-commerce: https://github.com/roldante05/laravel/tree/main/burger2022

**CyberArg Projects:**
- CG-GLOBAL: Link to CyberArg Sistemas (https://cyberargsistemas.com.ar)
- Lamperti S.A.: https://www.lamperti.com.ar/
- NetPatagonia: https://netpatagonia.com.ar/

**Valida Projects:**
- Onboarding Digital: https://valida.ai/nosotros/
- Valida Plataforma SaaS: https://valida.ai/nosotros/

## Implementation Approach

### Grid Layout
Change from:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
```
To:
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
```

### Hover Effects Removal
Remove:
- `group-hover:scale-110 transition-transform duration-700 ease-out` from Image
- The entire overlay div that contains the ArrowUpRight icon

### URL Mapping Strategy
Option 1: Add URL field to each project object
Option 2: Create a helper function that returns URL based on project title/category

Option 1 is simpler and more explicit. I'll add a `url` field to projects that need external links.

### Conditional Link Rendering
For each project card:
- If project has a URL, wrap the card in an `<a>` tag linking to that URL
- For personal projects with GitHub links, add a "Ver repo" button overlay
- For company projects, the whole card can be clickable to the company site

### Styling Adjustments
- Ensure proper cursor pointers for clickable elements
- Maintain card hover effects (background color change) but remove zoom
- Position "Ver repo" buttons appropriately for personal projects

## Files to Modify
1. `/components/sections/Portfolio.tsx` - Main implementation

## Dependencies
No new dependencies needed - using existing Lucide icons if needed for GitHub logo.

## Testing Considerations
- Verify responsive behavior (1 column on mobile, 2 on small tablets, 3 on desktop)
- Ensure all links work correctly
- Check that category filtering still functions properly
- Confirm hover effects are removed but other interactivity remains
- Validate "Ver repo" buttons appear only on personal projects