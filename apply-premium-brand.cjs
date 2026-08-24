const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

// The original file used the dark paper theme heavily.
// Replace Topbar background (translucent blue)
css = css.replace(/rgba\(15, 23, 42, 0\.9\)/g, 'rgba(0, 100, 170, 0.9)');

// Replace Hero Scrim to use blue
css = css.replace(/rgba\(15, 23, 42, 1\)/g, 'rgba(0, 120, 193, 1)');
css = css.replace(/rgba\(15, 23, 42, 0\.7\)/g, 'rgba(0, 120, 193, 0.7)');

// Replace hardcoded #0A192F (Dark Paper) with a slightly darker blue for contrast
css = css.replace(/#0A192F/g, '#00629E'); 

// Replace rgba(10, 25, 47, 0.6) and (10, 25, 47, 0.7) with translucent blue
css = css.replace(/rgba\(10, 25, 47, 0\.6\)/g, 'rgba(0, 80, 130, 0.6)');
css = css.replace(/rgba\(10, 25, 47, 0\.7\)/g, 'rgba(0, 80, 130, 0.7)');

// Update primary button text back to the main brand blue so it matches when cyan is white
css = css.replace(/color: #00629E;/g, 'color: #0078C1;'); 

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Premium Brand Theme Applied!');
