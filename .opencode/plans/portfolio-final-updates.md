# Final Portfolio Updates Plan

## Overview
Based on the current state of Portfolio.tsx and the user's latest requests, this plan outlines the specific changes needed to:
1. Show 3 projects side by side (grid layout)
2. Remove hover zoom effects on images
3. Remove overlay icons that make images look like links
4. Add "Ver repo" buttons for personal projects with GitHub links
5. Add company website links for CyberArg and Valida projects

## Specific Changes to Portfolio.tsx

### 1. Modify Projects Array to Include URLs
Add `url` field to each project object:
- VALIDA projects: "https://valida.ai/nosotros/"
- CyberArg CG-GLOBAL: "https://cyberargsistemas.com.ar"
- CyberArg Lamperti: "https://www.lamperti.com.ar/"
- CyberArg NetPatagonia: "https://netpatagonia.com.ar/"
- Personal Scaffolding Factory: "https://github.com/roldante05/scaffolding-factory"
- Personal TV-FlexDan: "https://github.com/roldante05/tv-flexdan"
- Personal Sistema Ventas: "https://github.com/roldante05/php/tree/main/sistema_ventas"
- Personal Roldy Burger: "https://github.com/roldante05/laravel/tree/main/burger2022"
- Personal ABM Clientes: "https://github.com/roldante05/php/tree/main/abmclientes"

### 2. Revert to Grid Layout
Replace the carousel implementation with:
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    // Project card implementation
  ))}
</div>
```

### 3. Remove Hover Effects and Icons
Remove from Image component:
- `group-hover:scale-110 transition-transform duration-700 ease-out`

Remove the entire overlay div that contains the ArrowUpRight icon.

### 4. Implement Conditional Linking
For each project card:
- Wrap card in `<a href={project.url} target="_blank" rel="noopener noreferrer">` if URL exists
- For personal projects, add a "Ver repo" button overlay positioned at bottom
- For company projects, make entire card clickable to company URL

### 5. Add GitHub Icon for Personal Projects
Import `Github` from lucide-react and show it in the "Ver repo" button.

### 6. Updated Component Structure
```jsx
export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6">
      {/* Header and category filters unchanged */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                {/* Card content */}
              </a>
            ) : (
              <div className="block">
                {/* Card content without link */}
              </div>
            )}
            
            {/* Ver repo button for personal projects */}
            {project.category === "Personales" && project.url && (
              <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                <a href={project.url} target="_blank" rel="noopener noreferrer" 
                   className="px-4 py-2 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors">
                  Ver repo <Github size={16} className="ml-2" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

## Expected Outcome
- Desktop: 3 projects per row
- Tablet: 2 projects per row  
- Mobile: 1 project per row
- No zoom effects on hover
- Personal projects show "Ver repo" button with GitHub icon
- Clicking on cards navigates to appropriate URLs
- Category filtering preserved
- Animations maintained via framer-motion

## Implementation Notes
1. Need to import Github icon from lucide-react
2. Ensure proper z-index positioning for overlay buttons
3. Maintain existing framer-motion animations for card entrance
4. Make sure links open in new tab with proper security attributes