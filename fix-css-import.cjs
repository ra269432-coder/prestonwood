const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Remove the injected tailwind directives
css = css.replace(/@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/g, '');
css = css.replace(/@tailwind base;\n@tailwind components;\n@tailwind utilities;\n/g, '');

// Extract the @import statement
const importMatch = css.match(/@import url\('.*?'\);\n/);
let importStmt = '';
if (importMatch) {
  importStmt = importMatch[0];
  css = css.replace(importMatch[0], '');
}

// Re-assemble
css = importStmt + `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n` + css;

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Fixed CSS import order.');
