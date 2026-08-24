const fs = require('fs');

// 1. Update tailwind.config.js to reflect the deepened blue
let tw = fs.readFileSync('tailwind.config.js', 'utf8');
tw = tw.replace(/dark: '#2563EB'/, "dark: '#0F172A'"); // Back to Deep Navy
tw = tw.replace(/panel: '#1E40AF'/, "panel: '#0B1120'"); // Darker panel for contrast
fs.writeFileSync('tailwind.config.js', tw, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Deepen the Blue
css = css.replace(/--paper: #2563EB;/g, '--paper: #0F172A;');
css = css.replace(/background: #2563EB;/g, 'background: #0F172A;');
css = css.replace(/bg-\[#2563EB\]/g, 'bg-[#0F172A]');

// Deepen the image overlay gradient
css = css.replace(/\.hero-scrim \{\n\s*background: linear-gradient\(to right, rgba\(37, 99, 235, 1\) 20%, rgba\(37, 99, 235, 0\.7\) 100%\);\n\}/m, `.hero-scrim {\n  background: linear-gradient(to right, rgba(15, 23, 42, 1) 20%, rgba(15, 23, 42, 0.7) 100%);\n}`);

// Topbar background also to Navy
css = css.replace(/\.topbar \{[\s\S]*?background: #1D4ED8; \/\* Slightly darker than background for definition \*\/[\s\S]*?\}/m, `.topbar {
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
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  color: #FFFFFF;
}`);

// 2. Lift the Origin Desk Card
css = css.replace(/\.hero-terminal \{[\s\S]*?background: #1E40AF;[\s\S]*?\}/m, `.hero-terminal {
  justify-self: end;
  width: min(100%, 360px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  background: rgba(11, 17, 32, 0.85); /* Darker panel with transparency */
  backdrop-filter: blur(16px);
  color: #FFFFFF;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  transition: transform 0.4s ease, box-shadow 0.4s;
}`);

// 3. Fix the Tiny Green Text (Eyebrow)
css = css.replace(/\.eyebrow \{\n\s*margin: 0 0 0\.85rem;\n\s*color: var\(--saffron\);\n\s*font-size: 0\.78rem;\n\s*font-weight: 600;\n\}/m, `.eyebrow {\n  margin: 0 0 0.85rem;\n  color: #BAE6FD; /* Soft Ice Blue */\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n}`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Applied Final Ultra-Premium Polish!');
