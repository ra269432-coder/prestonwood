const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Hero Content responsive fix
css = css.replace(/\.hero-content \{[\s\S]*?padding: 7rem 0 4rem;\n\}/m, `.hero-content {
  @apply relative z-10 mx-auto w-[min(1180px,92vw)] pt-28 pb-16 flex flex-col lg:grid lg:grid-cols-[1.02fr_0.48fr] gap-12 lg:items-end;
}`);

// Trade Board responsive fix
css = css.replace(/\.trade-board \{[\s\S]*?color: var\(--ink\);\n\}/m, `.trade-board {
  @apply flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center px-[4vw] py-20 text-[var(--ink)];
  background: var(--cotton);
}`);

// Market Strip responsive fix (allow scroll on mobile)
css = css.replace(/\.market-strip \{[\s\S]*?border-bottom: 1px solid var\(--line\);\n\}/m, `.market-strip {
  @apply flex overflow-x-auto lg:grid lg:grid-cols-5 gap-[1px] bg-[var(--line)] border-b border-[var(--line)];
}`);
css = css.replace(/\.market-tile \{[\s\S]*?background: #000000;\n/m, `.market-tile {
  @apply relative flex flex-col gap-1 min-h-[112px] min-w-[200px] lg:min-w-0 p-5 px-[4vw] bg-[#000000];
`);

// Section Split responsive fix
css = css.replace(/\.section-split \{[\s\S]*?align-items: start;\n\}/m, `.section-split {
  @apply flex flex-col lg:grid lg:grid-cols-[0.65fr_1.35fr] gap-12 items-start;
}`);
css = css.replace(/\.section-split\.reverse \{[\s\S]*?0\.65fr;\n\}/m, `.section-split.reverse {
  @apply lg:grid-cols-[1.35fr_0.65fr];
}`);
// Handle reverse ordering on mobile
css = css.replace(/\.section-split\.reverse \.section-heading \{[\s\S]*?order: 2;\n\}/m, `.section-split.reverse .section-heading {
  @apply order-1 lg:order-2;
}`);
css = css.replace(/\.section-split\.reverse \.service-grid \{[\s\S]*?order: 1;\n\}/m, `.section-split.reverse .service-grid {
  @apply order-2 lg:order-1;
}`);

// Service Grid responsive fix
css = css.replace(/\.service-grid \{[\s\S]*?gap: 1rem;\n\}/m, `.service-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 w-full;
}`);

// Add robust media queries at the end of the file
css += `
/* Tailwind Mobile Overrides */
@media (max-width: 1024px) {
  h1 { font-size: 3rem !important; }
  h2 { font-size: 2.5rem !important; }
  .hero-terminal { width: 100% !important; justify-self: center !important; max-w-[480px] !important; }
}

@media (max-width: 768px) {
  h1 { font-size: 2.25rem !important; }
  h2 { font-size: 1.75rem !important; }
  .hero { min-height: auto !important; padding-bottom: 2rem !important; }
  .hero-actions { justify-content: center !important; }
  .trade-board-copy { width: 100% !important; justify-self: center !important; text-align: center !important; }
  .lane-console { width: 100% !important; }
  .lane-metrics { grid-template-columns: 1fr !important; } /* Stack metrics on small phones */
}
`;

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Tailwind responsive structures applied to CSS!');
