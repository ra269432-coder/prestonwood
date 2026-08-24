const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Replace v3 directives with v4 import
css = css.replace(/@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/g, '');
css = css.replace(/@tailwind base;\n@tailwind components;\n@tailwind utilities;\n/g, '');

const importTailwind = `@import "tailwindcss";\n@config "../tailwind.config.js";\n\n`;

// Extract the font import
const importMatch = css.match(/@import url\('.*?'\);\n/);
let fontImport = '';
if (importMatch) {
  fontImport = importMatch[0];
  css = css.replace(importMatch[0], '');
}

// Re-assemble
css = fontImport + importTailwind + css;

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Fixed Tailwind v4 syntax in styles.css');
