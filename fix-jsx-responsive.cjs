const fs = require('fs');

// 1. Revert styles.css (strip @apply)
let css = fs.readFileSync('src/styles.css', 'utf8');

css = css.replace(/\.hero-content \{\n\s*@apply relative z-10 mx-auto w-\[min\(1180px,92vw\)\] pt-28 pb-16 flex flex-col lg:grid lg:grid-cols-\[1\.02fr_0\.48fr\] gap-12 lg:items-end;\n\}/m, `.hero-content {
  position: relative;
  z-index: 1;
  width: min(1180px, 92vw);
  margin: 0 auto;
}`);

css = css.replace(/\.trade-board \{\n\s*@apply flex flex-col lg:grid lg:grid-cols-\[0\.95fr_1\.05fr\] gap-10 items-center px-\[4vw\] py-20 text-\[var\(--ink\)\];\n\s*background: var\(--cotton\);\n\}/m, `.trade-board {
  background: var(--cotton);
  color: var(--ink);
}`);

css = css.replace(/\.market-strip \{\n\s*@apply flex overflow-x-auto lg:grid lg:grid-cols-5 gap-\[1px\] bg-\[var\(--line\)\] border-b border-\[var\(--line\)\];\n\}/m, `.market-strip {
  display: flex;
  overflow-x: auto;
  gap: 1px;
  background: var(--line);
  border-bottom: 1px solid var(--line);
}`);

css = css.replace(/\.market-tile \{\n\s*@apply relative flex flex-col gap-1 min-h-\[112px\] min-w-\[200px\] lg:min-w-0 p-5 px-\[4vw\] bg-\[#000000\];\n/m, `.market-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  min-height: 112px;
  min-width: 200px;
  padding: 1.2rem 4vw;
  background: #000000;
`);

css = css.replace(/\.section-split \{\n\s*@apply flex flex-col lg:grid lg:grid-cols-\[0\.65fr_1\.35fr\] gap-12 items-start;\n\}/m, `.section-split {
}`);

css = css.replace(/\.section-split\.reverse \{\n\s*@apply lg:grid-cols-\[1\.35fr_0\.65fr\];\n\}/m, `.section-split.reverse {
}`);

css = css.replace(/\.section-split\.reverse \.section-heading \{\n\s*@apply order-1 lg:order-2;\n\}/m, ``);
css = css.replace(/\.section-split\.reverse \.service-grid \{\n\s*@apply order-2 lg:order-1;\n\}/m, ``);

css = css.replace(/\.service-grid \{\n\s*@apply grid grid-cols-1 md:grid-cols-2 gap-4 w-full;\n\}/m, `.service-grid {
}`);

fs.writeFileSync('src/styles.css', css, 'utf8');

// 2. Inject Tailwind into main.jsx
let jsx = fs.readFileSync('src/main.jsx', 'utf8');

// Hero Content
jsx = jsx.replace(/<div className="hero-content">/, '<div className="hero-content pt-28 pb-16 flex flex-col lg:grid lg:grid-cols-[1.02fr_0.48fr] gap-12 lg:items-end">');

// Market Strip
jsx = jsx.replace(/<section id="markets" className="market-strip" aria-label="Market watch">/, '<section id="markets" className="market-strip lg:grid lg:grid-cols-5" aria-label="Market watch">');
jsx = jsx.replace(/className="market-tile"/g, 'className="market-tile lg:min-w-0"');

// Section Split
jsx = jsx.replace(/<div className="section-split">/g, '<div className="section-split flex flex-col lg:grid lg:grid-cols-[0.65fr_1.35fr] gap-12 items-start">');
jsx = jsx.replace(/<div className="section-split reverse">/g, '<div className="section-split reverse flex flex-col lg:grid lg:grid-cols-[1.35fr_0.65fr] gap-12 items-start">');

// Reverse ordering handles
jsx = jsx.replace(/<div className="section-heading">/g, '<div className="section-heading flex-shrink-0">'); // Base, we'll let HTML source order dictate mobile
jsx = jsx.replace(/<div className="service-grid">/g, '<div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-4 w-full">');

// Trade Board
jsx = jsx.replace(/<section className="trade-board" aria-label="Export lanes">/, '<section className="trade-board flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center px-[4vw] py-20" aria-label="Export lanes">');

fs.writeFileSync('src/main.jsx', jsx, 'utf8');

console.log('Moved responsive grid definitions from styles.css to main.jsx!');
