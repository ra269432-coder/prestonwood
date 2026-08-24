const fs = require('fs');

// 1. Update tailwind.config.js
let tw = fs.readFileSync('tailwind.config.js', 'utf8');
tw = tw.replace(/dark: '#000000'/, "dark: '#061121'");
tw = tw.replace(/panel: '#0A0A0A'/, "panel: '#0A192F'");
tw = tw.replace(/border: '#222222'/, "border: '#1e293b'");
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables
css = css.replace(/--paper: #000000;/g, '--paper: #061121;');
css = css.replace(/--cotton: #0A0A0A;/g, '--cotton: #0A192F;');
css = css.replace(/--mist: #0A0A0A;/g, '--mist: #0A192F;');
css = css.replace(/--line: #222222;/g, '--line: rgba(255, 255, 255, 0.1);');

// Hardcoded background replacements
css = css.replace(/background: #000000;/g, 'background: #061121;');
css = css.replace(/background: #0A0A0A;/g, 'background: #0A192F;');
css = css.replace(/background: #0F0F0F;/g, 'background: #112240;');
css = css.replace(/bg-\[#000000\]/g, 'bg-[#061121]');

// Hardcoded border replacements
css = css.replace(/border: 1px solid #222222;/g, 'border: 1px solid rgba(255, 255, 255, 0.1);');

// Topbar specific (if it was #000000)
css = css.replace(/\.topbar \{[\s\S]*?background: #061121;/m, (match) => match.replace('background: #061121;', 'background: rgba(6, 17, 33, 0.85);\n  backdrop-filter: blur(12px);')); // Add blur back to topbar for premium feel

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Swapped pitch black for deep rich blue!');
