const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');
css = css.replace('max-w-[480px]', 'max-width: 480px');
fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Fixed max-width syntax error in styles.css');
