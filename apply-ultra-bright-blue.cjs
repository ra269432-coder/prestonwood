const fs = require('fs');

// 1. Update tailwind.config.js
let tw = fs.readFileSync('tailwind.config.js', 'utf8');
tw = tw.replace(/dark: '#2563EB'/, "dark: '#3B82F6'"); // Bright Blue (Tailwind blue-500)
tw = tw.replace(/panel: '#1E40AF'/, "panel: '#2563EB'"); // Slightly deeper blue for cards
tw = tw.replace(/dark: '#0F172A'/, "dark: '#3B82F6'"); // In case it was stuck on navy
tw = tw.replace(/panel: '#0B1120'/, "panel: '#2563EB'"); 
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables (Ultra Bright Blue)
css = css.replace(/--paper: #2563EB;/g, '--paper: #3B82F6;'); 
css = css.replace(/--paper: #0F172A;/g, '--paper: #3B82F6;'); // Failsafe
css = css.replace(/--cotton: #1E40AF;/g, '--cotton: #2563EB;'); 
css = css.replace(/--mist: #1D4ED8;/g, '--mist: #60A5FA;'); 
css = css.replace(/--ink: #FFFFFF;/g, '--ink: #FFFFFF;'); 

// Hardcoded background replacements
css = css.replace(/background: #2563EB;/g, 'background: #3B82F6;');
css = css.replace(/background: #0F172A;/g, 'background: #3B82F6;'); // Failsafe
css = css.replace(/background: #1E40AF;/g, 'background: #2563EB;');
css = css.replace(/bg-\[#2563EB\]/g, 'bg-[#3B82F6]');
css = css.replace(/bg-\[#0F172A\]/g, 'bg-[#3B82F6]'); // Failsafe

// Topbar specific
css = css.replace(/\.topbar \{[\s\S]*?background: #1D4ED8;[\s\S]*?\}/m, `.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.25rem;
  min-height: 80px;
  padding: 0.85rem 4vw;
  border-bottom: 1px solid var(--line);
  background: #2563EB; /* Bright Blue Solid */
  color: #FFFFFF;
}`);

// Hero Image Scrim - Solid Bright Blue gradient
css = css.replace(/\.hero-scrim \{\n\s*background: linear-gradient\(to right, rgba\(37, 99, 235, 1\) 20%, rgba\(37, 99, 235, 0\.7\) 100%\);\n\}/m, `.hero-scrim {\n  background: linear-gradient(to right, rgba(59, 130, 246, 1) 20%, rgba(59, 130, 246, 0.6) 100%);\n}`);

// Ticker (Bottom Bar)
css = css.replace(/\.market-tile \{\n\s*position: relative;[\s\S]*?background: #1D4ED8; \/\* True Blue Darker \*\//m, `.market-tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  min-height: 112px;\n  min-width: 200px;\n  padding: 1.2rem 4vw;\n  background: #2563EB; /* Slightly darker than main bright blue */`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Ultra Bright Blue Theme!');
