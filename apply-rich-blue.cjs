const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables (Rich Blue Financial Terminal Theme)
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: dark;
  --paper: #061121;
  --cotton: #0A192F;
  --ink: #FFFFFF;
  --ink-soft: #94a3b8;
  --line: rgba(255, 255, 255, 0.1);
  --green: #06B6D4;
  --green-dark: #0891b2;
  --saffron: #F97316;
  --cargo: #F97316;
  --cyan: #06B6D4;
  --violet: #4F46E5;
  --steel: #0f2942;
  --mist: #0A192F;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
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

// 2. Hero Scrim (Rich Ocean Blue)
css = css.replace(/\.hero-scrim \{[\s\S]*?backdrop-filter: blur\(1px\);\n\}/m, `.hero-scrim {
  background: rgba(15, 55, 105, 0.85);
  backdrop-filter: blur(4px);
}`);

// 3. Buttons (Solid Electric Cyan)
css = css.replace(/\.primary-button \{[\s\S]*?box-shadow: 0 0 15px rgba\(79, 70, 229, 0\.15\);\n\}/m, `.primary-button {
  background: var(--green);
  color: #000000;
  border: 0;
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
}`);
// Strip the hover sweeping effect
css = css.replace(/\.primary-button::before \{[\s\S]*?transition: transform 0\.4s cubic-bezier\(0\.16, 1, 0\.3, 1\);\n\}/m, `.primary-button::before { display: none; }`);
css = css.replace(/\.primary-button:hover::before \{ transform: translateX\(0\); \}/g, '');
css = css.replace(/\.primary-button:hover, \.secondary-button:hover, \.add-button:hover \{[\s\S]*?color: #ffffff;\n\}/m, `.primary-button:hover, .secondary-button:hover, .add-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.6);
}`);

// 4. Origin Desk Widget (hero-terminal - Glassmorphism dark)
css = css.replace(/\.hero-terminal \{[\s\S]*?transition: transform 0\.4s ease, border-color 0\.4s, box-shadow 0\.4s;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius);
  background: rgba(10, 25, 47, 0.7);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  transition: transform 0.4s ease, border-color 0.4s, box-shadow 0.4s;
}`);

// 5. Market Strip / Bottom Ticker (Deep Navy)
css = css.replace(/\.market-strip \{[\s\S]*?border-bottom: 1px solid rgba\(255,255,255,0\.05\);\n\}/m, `.market-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: #0A192F;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}`);
css = css.replace(/\.market-tile \{[\s\S]*?background: linear-gradient\(180deg, #E0F2FE, #F0F8FF\);\n/m, `.market-tile {
  position: relative;
  display: grid;
  gap: 0.18rem;
  min-height: 112px;
  padding: 1.2rem 4vw;
  background: #0A192F;
`);
css = css.replace(/\.market-tile:hover \{[\s\S]*?transform: translateY\(-2px\);\n\}/m, `.market-tile:hover {
  background: #112240;
  transform: translateY(-2px);
}`);
// Green for positive percentages
css = css.replace(/\.market-tile em \{\n\s*color: var\(--green-dark\);/m, `.market-tile em {\n  color: #10B981;`);

// 6. Fix panel backgrounds previously set to light colors
css = css.replace(/background: rgba\(240, 248, 255, 0\.9\);/g, 'background: rgba(10, 25, 47, 0.85);'); // topbar
css = css.replace(/background: rgba\(224, 242, 254, 0\.75\);/g, 'background: rgba(10, 25, 47, 0.5);'); // cards
css = css.replace(/background: var\(--mist\);/g, 'background: rgba(10, 25, 47, 0.4);'); // fallback panels

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Rich Blue theme applied successfully!');
