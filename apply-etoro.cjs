const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables (eToro Theme)
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: light;
  --paper: #FFFFFF;
  --cotton: #F4F6F8;
  --ink: #1E293B;
  --ink-soft: #64748B;
  --line: rgba(0, 0, 0, 0.08);
  --green: #6AAE22;
  --green-dark: #558B1B;
  --saffron: #F59E0B;
  --cargo: #F59E0B;
  --cyan: #6AAE22;
  --violet: #6AAE22;
  --steel: #F4F6F8;
  --mist: #FFFFFF;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  --radius: 8px;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--ink);
  background: var(--cotton);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`);

// Change body background
css = css.replace(/body \{\n\s*margin: 0;\n\s*min-width: 320px;\n\s*background: var\(--paper\);\n\}/m, `body {\n  margin: 0;\n  min-width: 320px;\n  background: var(--cotton);\n}`);

// 2. Fix Topbar
css = css.replace(/\.topbar \{[\s\S]*?backdrop-filter: blur\(24px\);\n\}/m, `.topbar {
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
  background: #FFFFFF;
  color: var(--ink);
}`);

// 3. Fix Buttons (Solid eToro green, Pill shape)
css = css.replace(/\.primary-button \{[\s\S]*?box-shadow: 0 0 20px rgba\(6, 182, 212, 0\.4\);\n\}/m, `.primary-button {
  background: var(--green);
  color: #ffffff;
  border: 0;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(106, 174, 34, 0.3);
}`);
css = css.replace(/\.primary-button:hover, \.secondary-button:hover, \.add-button:hover \{[\s\S]*?box-shadow: 0 10px 30px rgba\(6, 182, 212, 0\.6\);\n\}/m, `.primary-button:hover, .secondary-button:hover, .add-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(106, 174, 34, 0.4);
}`);
css = css.replace(/\.secondary-button \{[\s\S]*?color: var\(--ink\);\n\}/m, `.secondary-button {
  border: 1px solid var(--line);
  background: #FFFFFF;
  color: var(--ink);
  font-weight: 600;
}`);

// 4. Hero Section (Clean white frost)
css = css.replace(/\.hero-scrim \{[\s\S]*?backdrop-filter: blur\(4px\);\n\}/m, `.hero-scrim {
  background: rgba(244, 246, 248, 0.92);
  backdrop-filter: blur(12px);
}`);

// Tweak typography weights
css = css.replace(/font-weight: 800;/g, 'font-weight: 600;');
css = css.replace(/text-transform: uppercase;/g, '');

// 5. Hero Terminal (Origin desk widget)
css = css.replace(/\.hero-terminal \{[\s\S]*?transition: transform 0\.4s ease, border-color 0\.4s, box-shadow 0\.4s;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #FFFFFF;
  box-shadow: var(--shadow);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);
css = css.replace(/\.hero-terminal:hover \{[\s\S]*?transform: translateY\(-6px\);\n\}/m, `.hero-terminal:hover {
  border-color: var(--green);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}`);

// 6. Market Strip (Ticker)
css = css.replace(/\.market-strip \{[\s\S]*?border-bottom: 1px solid rgba\(255,255,255,0\.05\);\n\}/m, `.market-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border-bottom: 1px solid var(--line);
}`);
css = css.replace(/\.market-tile \{[\s\S]*?background: #0A192F;\n/m, `.market-tile {
  position: relative;
  display: grid;
  gap: 0.18rem;
  min-height: 112px;
  padding: 1.2rem 4vw;
  background: #FFFFFF;
`);
css = css.replace(/\.market-tile:hover \{[\s\S]*?transform: translateY\(-2px\);\n\}/m, `.market-tile:hover {
  background: #F8FAFC;
  transform: translateY(0);
}`);
css = css.replace(/\.market-tile em \{\n\s*color: #10B981;/m, `.market-tile em {\n  color: var(--green);`);

// 7. Remove all residual dark/glass backgrounds and borders
css = css.replace(/background: rgba\(10, 25, 47, [0-9.]+\);/g, 'background: #FFFFFF;');
css = css.replace(/border: 1px solid rgba\(30, 58, 138, 0\.2\);/g, 'border: 1px solid var(--line);');
css = css.replace(/backdrop-filter: blur\([0-9]+px\);/g, ''); // Removes all the glassmorphism blurs (except the hero-scrim we just defined)
// Restore hero scrim blur since we just wiped it out globally
css = css.replace(/\.hero-scrim \{\n\s*background: rgba\(244, 246, 248, 0\.92\);\n\s*\}/m, `.hero-scrim {\n  background: rgba(244, 246, 248, 0.92);\n  backdrop-filter: blur(12px);\n}`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('eToro Theme applied successfully!');
