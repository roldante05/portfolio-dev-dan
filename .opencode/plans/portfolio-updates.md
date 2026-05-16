# Portfolio Updates Plan

## Summary
This plan outlines the requested updates to the portfolio website including experience descriptions, services information, about section text, and portfolio display format.

## Changes Required

### 1. Experience.tsx Updates
- Update VALIDA experience (index 0) description with detailed bullet points about Laravel development
- Update CyberArg Sistemas experience (index 1) description with bullet points about PHP/Laravel stack and methodologies
- Keep Autonomo experience unchanged

### 2. Services.tsx Updates
- Add a fourth service card about IA/Development Tools usage
- Update existing service descriptions if needed to reflect AI-assisted development

### 3. WhyHireMe.tsx Updates
- Replace "Experto en lógica de negocio compleja" with "Especializado en desarrollo de lógica de negocio"
- Remove the word "experto" from the description paragraph

### 4. Portfolio.tsx Updates
- Convert current grid layout to a slider/carousel format
- Implement swipe/touch support for mobile
- Add navigation arrows and indicators
- Maintain category filtering functionality

## Implementation Approach

### Experience Changes
Replace the description strings with the provided bullet point content, maintaining the same structure but updating the text content.

### Services Changes
Add a new service object to the services array with:
- Title: "Desarrollo Asistido por IA" or similar
- Description: Mentioning use of opencode, claudecode, gentle ai ecosystem, engram, CLI workflow, IDE integrations
- Icon: Consider using a brain or robot icon from lucide-react

### WhyHireMe Changes
Modify the paragraph text to replace "Experto en lógica de negocio compleja" with appropriate alternative phrasing.

### Portfolio Changes
Replace the grid layout with a slider component using:
- A library like swiper or embla-carousel-react
- Or implement custom slider with framer-motion
- Maintain category filtering
- Add navigation controls (prev/next arrows, dots)

## Files to Modify
1. `/components/sections/Experience.tsx`
2. `/components/sections/Services.tsx`
3. `/components/sections/WhyHireMe.tsx`
4. `/components/sections/Portfolio.tsx`

## Dependencies
May need to install additional packages for slider implementation if not already available.

## Testing Considerations
- Verify responsive behavior on mobile/tablet/desktop
- Ensure all existing functionality (filtering, animations) remains intact
- Check that text updates display correctly
- Validate that new service card appears properly