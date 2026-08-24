const fs = require('fs');

// 1. Update tailwind.config.js
let tw = fs.readFileSync('tailwind.config.js', 'utf8');
tw = tw.replace(/dark: '#061121'/, "dark: '#1D4ED8'"); // Bright Blue (Blue-700)
tw = tw.replace(/panel: '#0A192F'/, "panel: '#1E40AF'"); // Slightly deeper bright blue (Blue-800)
tw = tw.replace(/border: '#1e293b'/, "border: '#3B82F6'"); // Bright Blue border (Blue-500)
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables
css = css.replace(/--paper: #061121;/g, '--paper: #1D4ED8;');
css = css.replace(/--cotton: #0A192F;/g, '--cotton: #1E40AF;');
css = css.replace(/--mist: #0A192F;/g, '--mist: #1E40AF;');
// Adjust borders for visibility against bright blue
css = css.replace(/--line: rgba\(255, 255, 255, 0\.1\);/g, '--line: #3B82F6;');

// Hardcoded background replacements from previous swaps
css = css.replace(/background: #061121;/g, 'background: #1D4ED8;');
css = css.replace(/background: #0A192F;/g, 'background: #1E40AF;');
css = css.replace(/background: #112240;/g, 'background: #1E3A8A;');
css = css.replace(/bg-\[#061121\]/g, 'bg-[#1D4ED8]');

// Hardcoded border replacements
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border: 1px solid #3B82F6;');

// Topbar specific
css = css.replace(/background: rgba\(6, 17, 33, 0\.85\);/g, 'background: rgba(29, 78, 216, 0.85);'); 

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Swapped navy blue for bright blue!');
