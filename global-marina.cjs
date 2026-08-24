const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// 1. Root variables (Global Marina Theme)
css = css.replace(/:root \{[\s\S]*?-moz-osx-font-smoothing: grayscale;\n\}/m, `:root {
  color-scheme: light;
  --paper: #F0F8FF;
  --cotton: #E0F2FE;
  --ink: #1E3A8A;
  --ink-soft: #3b5a9b;
  --line: rgba(30, 58, 138, 0.15);
  --green: #4F46E5;
  --green-dark: #3730A3;
  --saffron: #F97316;
  --cargo: #F97316;
  --cyan: #4F46E5;
  --violet: #4F46E5;
  --steel: #E0F2FE;
  --mist: #E0F2FE;
  --shadow: 0 10px 30px rgba(30, 58, 138, 0.1);
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

// 2. Fix the hardcoded backgrounds
// Change Topbar background to a glass #F0F8FF
css = css.replace(/background: rgba\(224, 242, 254, 0\.9\);/g, 'background: rgba(240, 248, 255, 0.9);');
// Change scrim to use #F0F8FF
css = css.replace(/rgba\(224,242,254/g, 'rgba(240,248,255');
// Change panel backgrounds to #E0F2FE (ice blue)
css = css.replace(/background: rgba\(186, 230, 253, [0-9.]+\);/g, 'background: rgba(224, 242, 254, 0.75);');
// Change dark mode black backgrounds to var(--mist)
css = css.replace(/background: #0a0a0a;/g, 'background: var(--mist);');

// 3. Fix shadows and borders for the Indigo/Navy vibe
// Old sky blue was 2, 132, 199 -> change to Navy 30, 58, 138
css = css.replace(/rgba\(2, 132, 199/g, 'rgba(30, 58, 138'); 

// 4. Buttons
// Make primary button background use Indigo (4F46E5) instead of Navy
css = css.replace(/background: rgba\(30, 58, 138, 0\.1\);/g, 'background: rgba(79, 70, 229, 0.1);');
// Make button shadows use Indigo
css = css.replace(/box-shadow: 0 0 15px rgba\(30, 58, 138, 0\.15\);/g, 'box-shadow: 0 0 15px rgba(79, 70, 229, 0.15);');
css = css.replace(/box-shadow: 0 10px 30px rgba\(30, 58, 138, 0\.3\);/g, 'box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);');

// 5. Market tile gradient
css = css.replace(/linear-gradient\(180deg, #0a0a0a, #f5fdff\)/g, 'linear-gradient(180deg, #E0F2FE, #F0F8FF)');

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Global Marina theme applied successfully!');
