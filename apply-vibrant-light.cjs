const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

const replacements = [
  ['background: rgba(255, 255, 255, 0.98);', 'background: rgba(224, 242, 254, 0.98);'],
  ['linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.1))', 'linear-gradient(90deg, rgba(224, 242, 254, 0.95), rgba(224, 242, 254, 0.7) 50%, rgba(224, 242, 254, 0.1))'],
  ['linear-gradient(0deg, rgba(255, 255, 255, 0.95), transparent 30%)', 'linear-gradient(0deg, rgba(224, 242, 254, 0.95), transparent 30%)'],
  ['--paper: #f4f7f6;', '--paper: #f0f9ff;'],
  ['--mist: #f4f6f8;', '--mist: #e0f2fe;'],
  ['.footer {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 2rem;\n  padding: 4rem 4vw;\n  background: var(--paper);', '.footer {\n  display: grid;\n  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\n  gap: 2rem;\n  padding: 4rem 4vw;\n  background: #bae6fd;'],
  ['.trade-board {\n  display: grid;\n  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);\n  gap: 2.5rem;\n  align-items: center;\n  padding: 5rem 4vw;\n  background: var(--mist);', '.trade-board {\n  display: grid;\n  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);\n  gap: 2.5rem;\n  align-items: center;\n  padding: 5rem 4vw;\n  background: #bae6fd;'],
  ['.risk-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 0.78fr) minmax(320px, 1fr);\n  gap: 2rem;\n  align-items: stretch;\n  border-radius: var(--radius);\n  padding: 2rem;\n  background: var(--mist);', '.risk-panel {\n  display: grid;\n  grid-template-columns: minmax(0, 0.78fr) minmax(320px, 1fr);\n  gap: 2rem;\n  align-items: stretch;\n  border-radius: var(--radius);\n  padding: 2rem;\n  background: #bae6fd;']
];

for (let [search, replace] of replacements) {
  css = css.split(search).join(replace);
}

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Vibrant blue light theme applied!');
