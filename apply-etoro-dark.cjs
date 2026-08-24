const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables (eToro Dark Marketing Theme from screenshot)
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: dark;
  --paper: #000000;
  --cotton: #0A0A0A;
  --ink: #F2F2ED;
  --ink-soft: #A3A3A3;
  --line: #222222;
  --green: #4CFF73;
  --green-dark: #3bd15b;
  --saffron: #4CFF73;
  --cargo: #4CFF73;
  --cyan: #4CFF73;
  --violet: #4CFF73;
  --steel: #1A1A1A;
  --mist: #0A0A0A;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  --radius: 12px;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--ink);
  background: var(--paper);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`);

// Change body background
css = css.replace(/body \{\n\s*margin: 0;\n\s*min-width: 320px;\n\s*background: var\(--cotton\);\n\}/m, `body {\n  margin: 0;\n  min-width: 320px;\n  background: var(--paper);\n}`);

// 2. Fix Topbar
css = css.replace(/\.topbar \{[\s\S]*?color: var\(--ink\);\n\}/m, `.topbar {
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
  background: #000000;
  color: #FFFFFF;
}`);

// 3. Fix Buttons (Solid eToro neon green, Pill shape)
css = css.replace(/\.primary-button \{[\s\S]*?box-shadow: 0 4px 12px rgba\(106, 174, 34, 0\.3\);\n\}/m, `.primary-button {
  background: var(--green);
  color: #000000;
  border: 0;
  border-radius: 50px;
  font-weight: 700;
  box-shadow: none;
}`);
css = css.replace(/\.primary-button:hover, \.secondary-button:hover, \.add-button:hover \{[\s\S]*?box-shadow: 0 6px 16px rgba\(106, 174, 34, 0\.4\);\n\}/m, `.primary-button:hover, .secondary-button:hover, .add-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(76, 255, 115, 0.2);
}`);
css = css.replace(/\.secondary-button \{[\s\S]*?font-weight: 600;\n\}/m, `.secondary-button {
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-weight: 600;
  border-radius: 50px;
}`);

// 4. Hero Section & Backgrounds
css = css.replace(/\.hero-scrim \{[\s\S]*?backdrop-filter: blur\(12px\);\n\}/m, `.hero-scrim {
  background: rgba(0, 0, 0, 0.7);
}`);

// 5. Market Strip (Ticker)
css = css.replace(/\.market-tile \{[\s\S]*?background: #FFFFFF;\n/m, `.market-tile {
  position: relative;
  display: grid;
  gap: 0.18rem;
  min-height: 112px;
  padding: 1.2rem 4vw;
  background: #000000;
`);
css = css.replace(/\.market-tile:hover \{[\s\S]*?transform: translateY\(0\);\n\}/m, `.market-tile:hover {
  background: #0F0F0F;
  transform: translateY(-2px);
}`);

// 6. Clean up backgrounds that were set to white in the previous step
css = css.replace(/background: #FFFFFF;/g, 'background: #000000;');
css = css.replace(/background: rgba\(244, 246, 248, 0\.92\);/g, 'background: rgba(0, 0, 0, 0.8);');

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('eToro Dark Marketing Theme applied successfully!');
