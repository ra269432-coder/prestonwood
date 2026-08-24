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
        brand: {
          cyan: '#00C2FF',
          gold: '#D4AF37',
          coral: '#FF6B4A',
          dark: '#0A192F',
          panel: 'rgba(10, 25, 47, 0.7)',
          border: 'rgba(255, 255, 255, 0.1)',
          text: '#F2F2ED',
          muted: '#A3A3A3'
        }
      }
    },
  },
  plugins: [],
}`;
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables (Original Cinematic Theme)
css = css.replace(/color-scheme: light;/g, 'color-scheme: dark;');
css = css.replace(/--paper: #3B82F6;/g, '--paper: #0A192F;');
css = css.replace(/--cotton: #2563EB;/g, '--cotton: rgba(10, 25, 47, 0.7);'); 
css = css.replace(/--mist: #60A5FA;/g, '--mist: #0A192F;'); 
css = css.replace(/--ink: #FFFFFF;/g, '--ink: #F2F2ED;'); 
css = css.replace(/--ink-soft: #BFDBFE;/g, '--ink-soft: #A3A3A3;');
css = css.replace(/--line: #60A5FA;/g, '--line: rgba(255, 255, 255, 0.1);');
css = css.replace(/--green: #4CFF73;/g, '--green: #00C2FF;'); // Primary action was cyan
// Restore original specific variables if they were replaced
css = css.replace(/--saffron: #10B981;/g, '--saffron: #D4AF37;');
css = css.replace(/--cyan: #059669;/g, '--cyan: #00C2FF;');

// Hardcoded background replacements
css = css.replace(/background: #3B82F6;/g, 'background: #0A192F;');
css = css.replace(/background: #2563EB;/g, 'background: rgba(10, 25, 47, 0.7);');
css = css.replace(/bg-\[#3B82F6\]/g, 'bg-[#0A192F]');

// Topbar specific
css = css.replace(/\.topbar \{[\s\S]*?background: #2563EB; \/\* Bright Blue Solid \*\/[\s\S]*?\}/m, `.topbar {
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
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(12px);
  color: var(--ink);
}`);
// Topbar icons - revert to original
css = css.replace(/\.icon-button,\n\.cart-button,\n\.mobile-menu-button \{\n\s*display: inline-grid;[\s\S]*?color: #FFFFFF;\n\}/m, `.icon-button,\n.cart-button,\n.mobile-menu-button {\n  display: inline-grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--paper);\n  color: inherit;\n}`);

// Hero Image Scrim
css = css.replace(/\.hero-scrim \{\n\s*background: linear-gradient\(to right, rgba\(59, 130, 246, 1\) 20%, rgba\(59, 130, 246, 0\.6\) 100%\);\n\}/m, `.hero-scrim {\n  background: rgba(10, 25, 47, 0.85);\n}`);

// Origin desk widget (hero-terminal)
css = css.replace(/\.hero-terminal \{[\s\S]*?transition: transform 0\.4s ease, box-shadow 0\.4s;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(10, 25, 47, 0.6);
  backdrop-filter: blur(16px);
  color: var(--ink);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);
// Text inside terminal
css = css.replace(/\.terminal-header span,\n\.terminal-row span \{\n\s*color: #BFDBFE;\n\s*font-size: 0\.84rem;\n\}/m, `.terminal-header span,\n.terminal-row span {\n  color: var(--ink-soft);\n  font-size: 0.84rem;\n}`);

// Chart
css = css.replace(/background: linear-gradient\(180deg, #047857, #10B981 60%, transparent\);/m, 'background: linear-gradient(180deg, #1e3a8a, #0ea5e9 60%, transparent);');

// Ticker (Bottom Bar)
css = css.replace(/\.market-tile \{\n\s*position: relative;[\s\S]*?background: #2563EB; \/\* Slightly darker than main bright blue \*\//m, `.market-tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  min-height: 112px;\n  min-width: 200px;\n  padding: 1.2rem 4vw;\n  background: var(--paper);`);

// Primary button text color
css = css.replace(/\.primary-button \{\n\s*background: var\(--green\);\n\s*color: #000000;/m, `.primary-button {\n  background: var(--cyan);\n  color: #0A192F;`);
// Secondary button
css = css.replace(/\.secondary-button \{\n\s*border: 2px solid #FFFFFF;\n\s*background: transparent;\n\s*color: #FFFFFF;/m, `.secondary-button {\n  border: 1px solid var(--cyan);\n  background: transparent;\n  color: var(--cyan);`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Original Cinematic Theme!');
