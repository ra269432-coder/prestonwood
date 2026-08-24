const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Replace Root
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: light;
  --paper: #e0f2fe;
  --cotton: #bae6fd;
  --ink: #0f172a;
  --ink-soft: #334155;
  --line: rgba(14, 165, 233, 0.25);
  --green: #0284c7;
  --green-dark: #0369a1;
  --saffron: #ea580c;
  --cargo: #ea580c;
  --cyan: #0284c7;
  --violet: #4f46e5;
  --steel: #7dd3fc;
  --mist: #bae6fd;
  --shadow: 0 10px 30px rgba(2, 132, 199, 0.15);
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

// Colors & Layout
css = css.replace(/background: rgba\(5, 5, 5, 0\.75\);/g, 'background: rgba(224, 242, 254, 0.9);');
css = css.replace(/background: radial-gradient\(circle at center, rgba\(5,5,5,0\.3\) 0%, rgba\(5,5,5,0\.85\) 100%\);/g, 'background: radial-gradient(circle at center, rgba(224,242,254,0.4) 0%, rgba(224,242,254,0.95) 100%);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.02\);/g, 'background: rgba(186, 230, 253, 0.7);');
css = css.replace(/background: rgba\(255, 255, 255, 0\.05\);/g, 'background: rgba(186, 230, 253, 0.9);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.06\);/g, 'border: 1px solid rgba(2, 132, 199, 0.2);');
css = css.replace(/background: rgba\(17, 17, 17, 0\.7\);/g, 'background: rgba(186, 230, 253, 0.85);');
css = css.replace(/border: 1px solid rgba\(255, 255, 255, 0\.08\);/g, 'border: 1px solid rgba(2, 132, 199, 0.3);');
css = css.replace(/box-shadow: 0 40px 80px rgba\(0,0,0,0\.9\);/g, 'box-shadow: 0 30px 60px rgba(2, 132, 199, 0.2);');

// Buttons
css = css.replace(/color: #fff;/g, 'color: var(--ink);');
css = css.replace(/background: rgba\(0, 170, 84, 0\.05\);/g, 'background: rgba(2, 132, 199, 0.1);');
css = css.replace(/color: #050505;/g, 'color: #ffffff;');
css = css.replace(/box-shadow: 0 0 15px rgba\(0, 170, 84, 0\.15\);/g, 'box-shadow: 0 0 15px rgba(2, 132, 199, 0.15);');
css = css.replace(/box-shadow: 0 10px 30px rgba\(0, 170, 84, 0\.4\);/g, 'box-shadow: 0 10px 30px rgba(2, 132, 199, 0.3);');
css = css.replace(/box-shadow: 0 20px 50px rgba\(0, 170, 84, 0\.2\);/g, 'box-shadow: 0 20px 50px rgba(2, 132, 199, 0.2);');
css = css.replace(/box-shadow: 0 30px 90px rgba\(0, 170, 84, 0\.15\);/g, 'box-shadow: 0 30px 60px rgba(2, 132, 199, 0.2);');

// Typography sizing
css = css.replace(/font-size: 6\.5rem;/g, 'font-size: 4.5rem;');
css = css.replace(/font-weight: 900;/g, 'font-weight: 800;');

// Append Responsive Media Queries
if (!css.includes('@media (max-width: 900px)')) {
  css += `\n
/* Responsive Overrides */
@media (max-width: 900px) {
  h1 { font-size: 3.5rem; }
  .hero-content { grid-template-columns: 1fr; padding-top: 3rem; text-align: center; justify-items: center; gap: 3rem; }
  .hero-terminal { justify-self: center; width: 100%; max-width: 440px; }
  .hero-lede { margin: 1rem auto; text-align: center; }
  .hero-actions { justify-content: center; margin: 1.5rem auto 0; }
  .desktop-nav { display: none; }
  .mobile-menu-button { display: inline-grid; }
  .topbar { grid-template-columns: 1fr auto; }
}

@media (max-width: 768px) {
  h1 { font-size: 2.75rem; }
  h2 { font-size: 2rem; }
  .trade-board { grid-template-columns: 1fr; padding: 4rem 5vw; text-align: center; }
  .trade-board-copy { width: 100%; justify-self: center; }
  .lane-list { text-align: left; }
  .section-split, .section-split.reverse { grid-template-columns: 1fr; gap: 2rem; }
  .section-split.reverse .section-heading { order: 1; }
  .section-split.reverse .service-grid { order: 2; }
  .section-heading { text-align: center; margin: 0 auto 2rem; }
  .service-grid { grid-template-columns: 1fr; }
  .footer { grid-template-columns: 1fr; padding: 4rem 5vw; gap: 2rem; text-align: center; }
  .market-strip { grid-template-columns: repeat(2, 1fr); }
  .market-tile:nth-child(5) { grid-column: span 2; }
}
`;
}

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Mobile responsive bright theme applied successfully!');
