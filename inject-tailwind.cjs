const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

if (!css.includes('@tailwind base;')) {
  css = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n` + css;
  fs.writeFileSync('src/styles.css', css, 'utf8');
  console.log('Tailwind directives added to styles.css');
}
