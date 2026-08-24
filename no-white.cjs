const fs = require('fs');

// Process styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');
css = css.replace(/color:\s*#ffffff/gi, 'color: #f0f9ff'); // very pale blue text
css = css.replace(/#ffffff/gi, '#bae6fd'); // sky-200 background
css = css.replace(/rgba\(255,\s*255,\s*255/gi, 'rgba(186, 230, 253'); // sky-200 rgba
fs.writeFileSync('src/styles.css', css, 'utf8');

// Process main.jsx
let jsx = fs.readFileSync('src/main.jsx', 'utf8');
jsx = jsx.replace(/rgba\(255,\s*255,\s*255/gi, 'rgba(186, 230, 253');
fs.writeFileSync('src/main.jsx', jsx, 'utf8');

console.log('Banned all whites completely!');
