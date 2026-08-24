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
          green: '#4CFF73', // Keeping neon green for pop
          dark: '#2563EB', // TRUE ROYAL BLUE
          panel: '#1E40AF', // Slightly deeper blue for cards
          border: '#60A5FA', // Light blue border
          text: '#FFFFFF', // Pure White text
          muted: '#BFDBFE' // Soft light blue text
        }
      }
    },
  },
  plugins: [],
}`;
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables (True Blue)
css = css.replace(/color-scheme: light;/g, 'color-scheme: dark;');
css = css.replace(/--paper: #F0F8FF;/g, '--paper: #2563EB;'); // Royal Blue
css = css.replace(/--cotton: #FFFFFF;/g, '--cotton: #1E40AF;'); // Deeper blue panels
css = css.replace(/--mist: #E0F2FE;/g, '--mist: #1D4ED8;'); 
css = css.replace(/--ink: #1E3A8A;/g, '--ink: #FFFFFF;'); // White text
css = css.replace(/--ink-soft: #475569;/g, '--ink-soft: #BFDBFE;');
css = css.replace(/--line: #BFDBFE;/g, '--line: #60A5FA;');
css = css.replace(/--green: #10B981;/g, '--green: #4CFF73;'); // Back to neon green for max contrast

// Hardcoded background replacements
css = css.replace(/background: #F0F8FF;/g, 'background: #2563EB;');
css = css.replace(/background: #FFFFFF;/g, 'background: #1E40AF;');
css = css.replace(/bg-\[#F0F8FF\]/g, 'bg-[#2563EB]');
css = css.replace(/border: 1px solid #BFDBFE;/g, 'border: 1px solid #60A5FA;');

// Topbar specific (Match the Royal Blue)
css = css.replace(/\.topbar \{[\s\S]*?background: #1E3A8A; \/\* Deep Navy Solid \*\/[\s\S]*?\}/m, `.topbar {
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
  background: #1D4ED8; /* Slightly darker than background for definition */
  color: #FFFFFF;
}`);
// Topbar icons - white outline
css = css.replace(/\.icon-button,\n\.cart-button,\n\.mobile-menu-button \{\n\s*display: inline-grid;[\s\S]*?color: #FFFFFF;\n\}/m, `.icon-button,\n.cart-button,\n.mobile-menu-button {\n  display: inline-grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 2px solid rgba(255,255,255,0.4);\n  border-radius: var(--radius);\n  background: transparent;\n  color: #FFFFFF;\n}`);

// Hero Image Scrim - Solid Blue gradient to blend image
css = css.replace(/\.hero-scrim \{\n\s*background: linear-gradient\(to right, rgba\(240, 248, 255, 1\) 40%, rgba\(240, 248, 255, 0\.4\) 100%\);\n\}/m, `.hero-scrim {\n  background: linear-gradient(to right, rgba(37, 99, 235, 1) 20%, rgba(37, 99, 235, 0.7) 100%);\n}`);

// Origin desk widget (hero-terminal)
css = css.replace(/\.hero-terminal \{[\s\S]*?box-shadow: 0 10px 30px rgba\(30, 58, 138, 0\.1\);\n\s*transition: transform 0\.4s ease, box-shadow 0\.4s;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: var(--radius);
  background: #1E40AF;
  color: #FFFFFF;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);
// Text inside terminal needs to be light
css = css.replace(/\.terminal-header span,\n\.terminal-row span \{\n\s*color: var\(--ink-soft\);\n\s*font-size: 0\.84rem;\n\}/m, `.terminal-header span,\n.terminal-row span {\n  color: #BFDBFE;\n  font-size: 0.84rem;\n}`);

// Ticker (Bottom Bar) - True Blue darker
css = css.replace(/\.market-tile \{\n\s*position: relative;[\s\S]*?background: #E0F2FE; \/\* Ice Blue Darker \*\//m, `.market-tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  min-height: 112px;\n  min-width: 200px;\n  padding: 1.2rem 4vw;\n  background: #1D4ED8; /* True Blue Darker */`);

// Primary button text color (Dark text on neon green button)
css = css.replace(/\.primary-button \{\n\s*background: var\(--green\);\n\s*color: #FFFFFF;/m, `.primary-button {\n  background: var(--green);\n  color: #000000;`);
// Secondary button (White outline)
css = css.replace(/\.secondary-button \{\n\s*border: 2px solid #1E3A8A;\n\s*background: transparent;\n\s*color: #1E3A8A;/m, `.secondary-button {\n  border: 2px solid #FFFFFF;\n  background: transparent;\n  color: #FFFFFF;`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied TRUE Blue Theme!');
