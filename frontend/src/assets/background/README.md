# Background Assets Directory

This directory contains SVG icons used for the animated background in the frontend application.

## Contents
- **50 SVG icons** - Fashion and clothing related icons
- **ASSETS_LICENSE.md** - Legal documentation for licensed assets

## Usage
These icons are used in the starfield animation on the landing page. They are loaded dynamically via JavaScript and displayed as floating particles.

## File Naming Convention
Icons are numbered sequentially (001-050) with descriptive names:
- `001-watch.svg` through `050-shirt.svg`
- All icons follow the pattern: `XXX-description.svg`

## Technical Details
- **Format**: SVG (Scalable Vector Graphics)
- **Usage**: Animated background particles
- **Loading**: Dynamic loading via `icon-list.js`
- **Animation**: Implemented in `script.js` with canvas-based rendering

## Legal Notice
⚠️ **IMPORTANT**: These assets are licensed from Flaticon and are NOT open source. 

**For repository cloners**: If you want these exact icons, you must purchase your own license from [Flaticon - Clothing Style 5 Pack](https://www.flaticon.com/packs/clothing-style-5).

See `ASSETS_LICENSE.md` for full licensing details.

## Development Notes
- Icons are preloaded before animation starts
- Random selection and positioning for natural movement
- Responsive sizing based on screen dimensions
- Performance optimized with requestAnimationFrame
