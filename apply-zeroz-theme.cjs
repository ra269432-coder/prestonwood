const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables (Dark mode, Green accent, tight radius)
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: dark;
  --paper: #050505;
  --cotton: #111111;
  --ink: #ffffff;
  --ink-soft: #a1a1aa;
  --line: rgba(255, 255, 255, 0.08);
  --green: #00AA54;
  --green-dark: #008843;
  --saffron: #00AA54;
  --cargo: #00AA54;
  --cyan: #00AA54;
  --violet: #00AA54;
  --steel: #171717;
  --mist: #0a0a0a;
  --shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  --radius: 2px;
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

// 2. Topbar (Glass dark)
css = css.replace(/\.topbar \{[\s\S]*?backdrop-filter: blur\(16px\);\n\}/m, `.topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.25rem;
  min-height: 80px;
  padding: 0.85rem 4vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(5, 5, 5, 0.75);
  color: var(--ink);
  backdrop-filter: blur(24px);
}`);

// 3. Typography (Oversized, editorial)
css = css.replace(/h1,\nh2 \{[\s\S]*?\n\}/m, `h1, h2 {
  font-family: 'Inter', Arial, sans-serif;
  line-height: 0.88;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}`);
css = css.replace(/h1 \{[\s\S]*?\n\}/m, `h1 {\n  max-width: 900px;\n  margin-bottom: 1.5rem;\n  font-size: 6.5rem;\n}`);
css = css.replace(/h2 \{[\s\S]*?\n\}/m, `h2 {\n  margin-bottom: 1rem;\n  font-size: 4rem;\n}`);

// 4. Buttons (Hollow green with neon sweep)
css = css.replace(/\.primary-button \{[\s\S]*?box-shadow: 0 4px 14px rgba\(30, 58, 138, 0\.3\);\n\}/m, `.primary-button {
  background: rgba(0, 170, 84, 0.05);
  color: #fff;
  border: 1px solid var(--green);
  box-shadow: 0 0 15px rgba(0, 170, 84, 0.15);
}`);
css = css.replace(/\.primary-button::before \{[\s\S]*?transition: transform 520ms ease;\n\}/m, `.primary-button::before {
  position: absolute;
  inset: 0;
  background: var(--green);
  content: '';
  transform: translateX(-101%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}`);
css = css.replace(/\.primary-button:hover::before \{[\s\S]*?\n\}/m, `.primary-button:hover::before { transform: translateX(0); }`);
css = css.replace(/\.primary-button:hover,[\s\S]*?transform: translateY\(-2px\);\n\}/m, `.primary-button:hover, .secondary-button:hover, .add-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 170, 84, 0.4);
  color: #050505;
}`);
// Make text stay above the sweeping background
css = css.replace(/\.primary-button span,[\s\S]*?z-index: 1;\n\}/m, `.primary-button span, .primary-button svg, .secondary-button span, .secondary-button svg, .add-button span, .add-button svg {
  position: relative;
  z-index: 1;
  transition: color 0.3s;
}`);

// 5. Hero Scrim (Cinematic dark vignette)
css = css.replace(/\.hero-scrim \{[\s\S]*?-webkit-backdrop-filter: blur\(2px\);\n\}/m, `.hero-scrim {
  background: radial-gradient(circle at center, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.85) 100%);
  backdrop-filter: blur(1px);
}`);

// 6. Cards (Glassmorphism & Neon Hover)
css = css.replace(/\.service-card,\n\.product-card,\n\.insight-grid article \{[\s\S]*?border-color 180ms ease;\n\}/m, `.service-card, .product-card, .insight-grid article {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, box-shadow 0.4s;
}`);
css = css.replace(/\.service-card:hover,\n\.product-card:hover,\n\.insight-grid article:hover \{[\s\S]*?transform: translateY\(-5px\);\n\}/m, `.service-card:hover, .product-card:hover, .insight-grid article:hover {
  border-color: var(--green);
  box-shadow: 0 20px 50px rgba(0, 170, 84, 0.2);
  transform: translateY(-8px);
}`);

// 7. Hero Terminal
css = css.replace(/\.hero-terminal \{[\s\S]*?transition:[\s\S]*?border-color 180ms ease;\n\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  background: rgba(17, 17, 17, 0.7);
  box-shadow: 0 40px 80px rgba(0,0,0,0.9);
  backdrop-filter: blur(24px);
  transition: transform 0.4s ease, border-color 0.4s, box-shadow 0.4s;
}`);
css = css.replace(/\.hero-terminal:hover \{[\s\S]*?transform: translateY\(-4px\);\n\}/m, `.hero-terminal:hover {
  border-color: var(--green);
  box-shadow: 0 30px 90px rgba(0, 170, 84, 0.15);
  transform: translateY(-6px);
}`);

// 8. Market Strip
css = css.replace(/\.market-strip \{[\s\S]*?border-bottom: 1px solid var\(--line\);\n\}/m, `.market-strip {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1px;
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}`);

// 9. Clean up stray light theme colors
css = css.replace(/#E2E8F0/g, 'rgba(25,25,25,0.8)');
css = css.replace(/#F0F4F8/g, '#050505');
css = css.replace(/#bae6fd/g, '#0a0a0a');
css = css.replace(/rgba\(186, 230, 253, [0-9.]+\)/g, 'rgba(25,25,25,0.6)');
css = css.replace(/#0F4C81/g, '#00AA54');
css = css.replace(/#0A365C/g, '#008843');
css = css.replace(/background: rgba\(255, 255, 255, 0.12\);/g, 'background: rgba(255, 255, 255, 0.02);');
css = css.replace(/background: rgba\(255, 255, 255, 0.94\);/g, 'background: rgba(255, 255, 255, 0.05);');

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Zeroz theme written successfully.');
