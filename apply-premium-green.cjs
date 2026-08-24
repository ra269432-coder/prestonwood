const fs = require('fs');

// 1. Update tailwind.config.js
let tw = `export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        etoro: {
          green: '#10B981', // Vibrant Bright Green
          dark: '#FFFFFF', // White background
          panel: '#F8FAFC', // Off-white panel
          border: '#E5E7EB', // Light grey border
          text: '#1F2937', // Charcoal grey
          muted: '#4B5563' // Muted grey
        },
        forest: '#064E3B',
        emerald: '#047857'
      }
    },
  },
  plugins: [],
}`;
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Update CSS variables
css = css.replace(/--paper: #1D4ED8;/g, '--paper: #FFFFFF;');
css = css.replace(/--cotton: #1E40AF;/g, '--cotton: #F8FAFC;');
css = css.replace(/--mist: #1E40AF;/g, '--mist: #F1F5F9;');
css = css.replace(/--ink: #F2F2ED;/g, '--ink: #1F2937;');
css = css.replace(/--ink-soft: #A3A3A3;/g, '--ink-soft: #4B5563;');
css = css.replace(/--line: #3B82F6;/g, '--line: #E5E7EB;');
css = css.replace(/--green: #4CFF73;/g, '--green: #10B981;');
css = css.replace(/--saffron: #4CFF73;/g, '--saffron: #10B981;');
css = css.replace(/--cyan: #4CFF73;/g, '--cyan: #059669;');

// Remove old hardcoded backgrounds
css = css.replace(/background: #1D4ED8;/g, 'background: #FFFFFF;');
css = css.replace(/background: #1E40AF;/g, 'background: #F8FAFC;');
css = css.replace(/background: #1E3A8A;/g, 'background: #047857;'); // Using this for specific panels perhaps
css = css.replace(/bg-\[#1D4ED8\]/g, 'bg-[#FFFFFF]');
css = css.replace(/border: 1px solid #3B82F6;/g, 'border: 1px solid #E5E7EB;');

// Topbar specific
css = css.replace(/\.topbar \{[\s\S]*?background: rgba\(29, 78, 216, 0\.85\);\n\s*backdrop-filter: blur\(12px\);\n\s*color: #FFFFFF;/m, `.topbar {
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
  background: #064E3B; /* Forest Green */
  color: #FFFFFF;
`);
// Desktop nav links in topbar need to be white
css = css.replace(/\.desktop-nav \{[\s\S]*?color: var\(--ink\);/m, `.desktop-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.4rem;\n  color: #FFFFFF;`);

// Hero styling - modify to make the image a rounded banner
css = css.replace(/\.hero-image,\n\.hero-scrim,\n\.cargo-grid \{\n\s*position: absolute;\n\s*inset: 0;\n\}/m, `.hero-image,\n.hero-scrim,\n.cargo-grid {\n  position: absolute;\n  inset: 1rem;\n  border-radius: 24px;\n  overflow: hidden;\n}`);

// Origin desk widget (hero-terminal)
css = css.replace(/\.hero-terminal \{\n\s*justify-self: end;[\s\S]*?background: #000000;[\s\S]*?\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  background: #047857; /* Emerald Green */
  color: #FFFFFF;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);
// Make text inside terminal white
css = css.replace(/\.terminal-header span,\n\.terminal-row span \{\n\s*color: var\(--ink-soft\);\n\s*font-size: 0\.84rem;\n\}/m, `.terminal-header span,\n.terminal-row span {\n  color: rgba(255,255,255,0.85);\n  font-size: 0.84rem;\n}`);

// Service cards, market tiles, trade lanes need to use light backgrounds
css = css.replace(/background: #000000;/g, 'background: #FFFFFF;');
css = css.replace(/background: rgba\(25,25,25,0\.6\);/g, 'background: #F1F5F9;');

// Primary button text color
css = css.replace(/\.primary-button \{\n\s*background: var\(--green\);\n\s*color: #000000;/m, `.primary-button {\n  background: var(--green);\n  color: #FFFFFF;`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Premium Green Theme to CSS!');
