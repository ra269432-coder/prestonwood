const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Fix the "Haze" - update hero scrim
css = css.replace(
  /linear-gradient\(90deg, rgba\(224, 242, 254, 0\.95\), rgba\(224, 242, 254, 0\.7\) 50%, rgba\(224, 242, 254, 0\.1\)\),\s*linear-gradient\(0deg, rgba\(224, 242, 254, 0\.95\), transparent 30%\)/g,
  `linear-gradient(90deg, rgba(240, 244, 248, 0.8), rgba(240, 244, 248, 0.2) 60%, transparent),\n    linear-gradient(0deg, rgba(240, 244, 248, 0.9), transparent 40%)`
);

// 2. Upgrade Bootstrap Blue -> Cobalt/Royal Blue
css = css.replace(/--green:\s*#1d4ed8;/g, '--green: #0F4C81;');
css = css.replace(/--green-dark:\s*#1e3a8a;/g, '--green-dark: #0A365C;');

// 3. Rescue Navigation Bar -> High contrast text
css = css.replace(
  /\.desktop-nav \{\n\s*display: flex;\n\s*align-items: center;\n\s*justify-content: center;\n\s*gap: 1\.4rem;\n\s*color: var\(--ink-soft\);/g,
  `.desktop-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.4rem;\n  color: var(--ink);`
);

css = css.replace(
  /\.brand small \{\n\s*margin-top: 0\.15rem;\n\s*color: var\(--ink-soft\);/g,
  `.brand small {\n  margin-top: 0.15rem;\n  color: var(--ink);`
);

// Update paper to Ice Blue #F0F4F8 globally for bright theme
css = css.replace(/--paper:\s*#f0f9ff;/g, '--paper: #F0F4F8;');

// 4. Give the Right Card Some Depth
css = css.replace(
  /\.hero-terminal \{\n\s*justify-self: end;\n\s*width: min\(100%, 360px\);\n\s*border: 1px solid var\(--line\);\n\s*border-radius: var\(--radius\);\n\s*background: rgba\(186, 230, 253, 0\.85\);\n\s*box-shadow: var\(--shadow\);/g,
  `.hero-terminal {\n  justify-self: end;\n  width: min(100%, 360px);\n  border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: #E2E8F0;\n  box-shadow: 0 24px 48px rgba(15, 76, 129, 0.15);`
);

// 5. The Ticker (Bottom)
css = css.replace(
  /\.market-tile strong \{\n\s*font-size: 1\.5rem;\n\}/g,
  `.market-tile strong {\n  font-size: 1.6rem;\n  color: var(--ink);\n  font-weight: 900;\n}`
);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Premium contrast updates applied!');
