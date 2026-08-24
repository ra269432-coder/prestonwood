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
          green: '#10B981', // Vibrant Emerald Green
          dark: '#0F172A', // Midnight Blue
          panel: '#1E293B', // Elevated Navy
          border: '#334155', // Slate-700
          text: '#FFFFFF', // Crisp White
          muted: '#94A3B8' // Ice Blue / Grey
        }
      }
    },
  },
  plugins: [],
}`;
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// Root variables
css = css.replace(/--paper: #FFFFFF;/g, '--paper: #0F172A;');
css = css.replace(/--cotton: #F8FAFC;/g, '--cotton: #1E293B;');
css = css.replace(/--mist: #F1F5F9;/g, '--mist: #0B1120;');
css = css.replace(/--ink: #1F2937;/g, '--ink: #FFFFFF;');
css = css.replace(/--ink-soft: #4B5563;/g, '--ink-soft: #94A3B8;');
css = css.replace(/--line: #E5E7EB;/g, '--line: #334155;');
// Button/Accent colors are already #10B981 from previous, but ensure it
css = css.replace(/--green: #10B981;/g, '--green: #10B981;');

// Remove old hardcoded backgrounds
css = css.replace(/background: #FFFFFF;/g, 'background: #0F172A;');
css = css.replace(/background: #F8FAFC;/g, 'background: #1E293B;');
css = css.replace(/background: #F1F5F9;/g, 'background: #1E293B;');
css = css.replace(/background: #047857;/g, 'background: #1E293B;'); // the emerald widget becomes navy
css = css.replace(/bg-\[#FFFFFF\]/g, 'bg-[#0F172A]');
css = css.replace(/border: 1px solid #E5E7EB;/g, 'border: 1px solid #334155;');

// Topbar specific
css = css.replace(/\.topbar \{[\s\S]*?background: #064E3B; \/\* Forest Green \*\/[\s\S]*?\}/m, `.topbar {
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
  background: rgba(30, 41, 59, 0.85); /* Elevated Navy with transparency */
  backdrop-filter: blur(12px);
  color: #FFFFFF;
}`);

// Revert Hero styling to absolute full width with dark navy scrim
css = css.replace(/\.hero-image,\n\.hero-scrim,\n\.cargo-grid \{\n\s*position: absolute;\n\s*inset: 1rem;\n\s*border-radius: 24px;\n\s*overflow: hidden;\n\}/m, `.hero-image,\n.hero-scrim,\n.cargo-grid {\n  position: absolute;\n  inset: 0;\n}`);
css = css.replace(/\.hero-scrim \{\n\s*background: linear-gradient\(to right, rgba\(255,255,255,1\) 30%, rgba\(255,255,255,0\.2\) 100%\);\n\}/m, `.hero-scrim {\n  background: rgba(15, 23, 42, 0.85);\n}`);

// Origin desk widget (hero-terminal)
css = css.replace(/\.hero-terminal \{[\s\S]*?background: #1E293B; \/\* Emerald Green \*\/\n\s*color: #FFFFFF;\n\s*box-shadow: 0 20px 40px rgba\(0,0,0,0\.15\);\n\s*transition: transform 0\.4s ease, box-shadow 0\.4s;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: var(--radius);
  background: #1E293B; /* Elevated Navy */
  color: #FFFFFF;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);

// Change Terminal Chart to Green
css = css.replace(/background: linear-gradient\(180deg, #1e3a8a, #0ea5e9 60%, transparent\);/m, 'background: linear-gradient(180deg, #047857, #10B981 60%, transparent);');

// Ticker (Bottom Bar) - make it the darkest blue
css = css.replace(/\.market-tile \{\n\s*position: relative;[\s\S]*?background: #0F172A;/m, `.market-tile {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  min-height: 112px;\n  min-width: 200px;\n  padding: 1.2rem 4vw;\n  background: #0B1120; /* Darkest Midnight */`);

// Primary button text color (Make sure it's dark or white depending on contrast, let's use dark for neon green)
css = css.replace(/\.primary-button \{\n\s*background: var\(--green\);\n\s*color: #FFFFFF;/m, `.primary-button {\n  background: var(--green);\n  color: #022c22;`);
// Secondary button
css = css.replace(/\.secondary-button \{\n\s*border: 1px solid #FFFFFF;\n\s*background: transparent;\n\s*color: #FFFFFF;/m, `.secondary-button {\n  border: 1px solid rgba(255,255,255,0.2);\n  background: rgba(255,255,255,0.05);\n  color: #FFFFFF;`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Pro Financial Terminal Theme!');
