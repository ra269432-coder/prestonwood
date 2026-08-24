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
          green: '#10B981', // Emerald Green (keeping the requested action color)
          dark: '#F0F8FF', // Ice Blue (Light theme background)
          panel: '#FFFFFF', // Pure White panels
          border: '#BFDBFE', // Light blue borders
          text: '#1E3A8A', // Deep Navy text
          muted: '#475569' // Steel grey secondary text
        }
      }
    },
  },
  plugins: [],
}`;
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables (Swapping dark mode to light mode!)
css = css.replace(/color-scheme: dark;/g, 'color-scheme: light;');
css = css.replace(/--paper: #0F172A;/g, '--paper: #F0F8FF;'); // Ice Blue
css = css.replace(/--cotton: #1E293B;/g, '--cotton: #FFFFFF;'); // White panels
css = css.replace(/--mist: #0B1120;/g, '--mist: #E0F2FE;'); // Lighter blue for alternative areas
css = css.replace(/--ink: #FFFFFF;/g, '--ink: #1E3A8A;'); // Deep Navy text
css = css.replace(/--ink-soft: #94A3B8;/g, '--ink-soft: #475569;');
css = css.replace(/--line: #334155;/g, '--line: #BFDBFE;');

// Hardcoded background replacements
css = css.replace(/background: #0F172A;/g, 'background: #F0F8FF;');
css = css.replace(/background: #1E293B;/g, 'background: #FFFFFF;');
css = css.replace(/bg-\[#0F172A\]/g, 'bg-[#F0F8FF]');
css = css.replace(/border: 1px solid #334155;/g, 'border: 1px solid #BFDBFE;');

// Topbar specific (Make it a strong solid Navy Blue to anchor the page)
css = css.replace(/\.topbar \{[\s\S]*?background: rgba\(30, 41, 59, 0\.85\); \/\* Elevated Navy with transparency \*\/[\s\S]*?\}/m, `.topbar {
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
  background: #1E3A8A; /* Deep Navy Solid */
  color: #FFFFFF;
}`);
// Topbar icons - need to be readable on Navy
css = css.replace(/\.icon-button,\n\.cart-button,\n\.mobile-menu-button \{\n\s*display: inline-grid;[\s\S]*?color: #FFFFFF;\n\}/m, `.icon-button,\n.cart-button,\n.mobile-menu-button {\n  display: inline-grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid rgba(255,255,255,0.2);\n  border-radius: var(--radius);\n  background: rgba(255,255,255,0.1);\n  color: #FFFFFF;\n}`);

// Hero Image Scrim - light and airy
css = css.replace(/\.hero-scrim \{\n\s*background: rgba\(15, 23, 42, 0\.85\);\n\}/m, `.hero-scrim {\n  background: linear-gradient(to right, rgba(240, 248, 255, 1) 40%, rgba(240, 248, 255, 0.4) 100%);\n}`);

// Origin desk widget (hero-terminal)
css = css.replace(/\.hero-terminal \{[\s\S]*?background: #1E293B; \/\* Elevated Navy \*\/[\s\S]*?\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #FFFFFF;
  color: #1E3A8A;
  box-shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);
// Text inside terminal needs to be dark now
css = css.replace(/\.terminal-header span,\n\.terminal-row span \{\n\s*color: rgba\(255,255,255,0\.85\);\n\s*font-size: 0\.84rem;\n\}/m, `.terminal-header span,\n.terminal-row span {\n  color: var(--ink-soft);\n  font-size: 0.84rem;\n}`);

// Ticker (Bottom Bar) - Light blue background
css = css.replace(/\.market-tile \{\n\s*position: relative;[\s\S]*?background: #0B1120; \/\* Darkest Midnight \*\//m, `.market-tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  min-height: 112px;\n  min-width: 200px;\n  padding: 1.2rem 4vw;\n  background: #E0F2FE; /* Ice Blue Darker */`);

// Primary button text color (White text on green button)
css = css.replace(/\.primary-button \{\n\s*background: var\(--green\);\n\s*color: #022c22;/m, `.primary-button {\n  background: var(--green);\n  color: #FFFFFF;`);
// Secondary button (Outline blue for light mode)
css = css.replace(/\.secondary-button \{\n\s*border: 1px solid rgba\(255,255,255,0\.2\);\n\s*background: rgba\(255,255,255,0\.05\);\n\s*color: #FFFFFF;/m, `.secondary-button {\n  border: 2px solid #1E3A8A;\n  background: transparent;\n  color: #1E3A8A;`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Light Blue / Maritime Theme!');
