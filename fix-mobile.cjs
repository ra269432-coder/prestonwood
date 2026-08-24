const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Fix Secondary Button visibility (was dark blue on dark blue)
css = css.replace(
  /\.secondary-button \{\n\s*border: 1px solid rgba\(25,25,25,0\.6\);\n\s*background: transparent;\n\s*color: var\(--cotton\);\n\}/m,
  `.secondary-button {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: transparent;\n  color: var(--ink);\n}`
);

// 2. Reduce Hero Scrim opacity so the image is visible
css = css.replace(/background: rgba\(15, 55, 105, 0\.85\);/g, 'background: rgba(15, 55, 105, 0.55);');

// 3. Lower Cargo Grid opacity globally so it doesn't block the image
css = css.replace(
  /\.cargo-grid \{\n\s*display: grid;\n\s*grid-template-columns: repeat\(7, 1fr\);\n\s*grid-template-rows: repeat\(4, 1fr\);\n\s*opacity: 0\.56;/m,
  `.cargo-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  opacity: 0.25;`
);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Mobile fixes applied!');
