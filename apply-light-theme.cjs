const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

const replacements = [
  ['border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(17, 17, 17, 0.98);\n  color: var(--cotton);', 'border-bottom: 1px solid var(--line);\n  background: rgba(255, 255, 255, 0.98);\n  color: var(--ink);'],
  ['color: rgba(255, 253, 248, 0.74);', 'color: var(--ink-soft);'],
  ['color: rgba(255, 253, 248, 0.78);', 'color: var(--ink-soft);'],
  ['border: 1px solid rgba(255, 253, 248, 0.34);\n  border-radius: var(--radius);\n  background: rgba(255, 255, 255, 0.08);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--paper);'],
  ['.hero {\n  position: relative;\n  display: grid;\n  min-height: 78vh;\n  overflow: hidden;\n  color: var(--cotton);', '.hero {\n  position: relative;\n  display: grid;\n  min-height: 78vh;\n  overflow: hidden;\n  color: var(--ink);'],
  ['background:\n    linear-gradient(90deg, rgba(17, 17, 17, 0.95), rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0.1)),\n    linear-gradient(0deg, rgba(17, 17, 17, 0.95), transparent 30%);', 'background:\n    linear-gradient(90deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.1)),\n    linear-gradient(0deg, rgba(255, 255, 255, 0.95), transparent 30%);'],
  ['color: rgba(255, 253, 248, 0.82);', 'color: var(--ink-soft);'],
  ['border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius);\n  background: rgba(10, 25, 47, 0.85);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: rgba(255, 255, 255, 0.85);'],
  ['color: rgba(255, 253, 248, 0.68);', 'color: var(--ink-soft);'],
  ['border-bottom: 1px solid rgba(255, 253, 248, 0.14);', 'border-bottom: 1px solid var(--line);'],
  ['border-top: 1px solid rgba(255, 253, 248, 0.12);', 'border-top: 1px solid var(--line);'],
  ['background: #111111;\n  color: var(--cotton);', 'background: var(--mist);\n  color: var(--ink);'],
  ['color: rgba(255, 253, 248, 0.72);', 'color: var(--ink-soft);'],
  ['border: 1px solid rgba(255, 253, 248, 0.3);\n  border-radius: var(--radius);\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.12);\n  color: var(--cotton);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 1rem;\n  background: #ffffff;\n  color: var(--ink);'],
  ['border: 1px solid rgba(255, 253, 248, 0.26);\n  border-radius: var(--radius);\n  padding: 1rem;\n  background: rgba(3, 35, 71, 0.4);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 1rem;\n  background: #ffffff;\n  box-shadow: var(--shadow);'],
  ['padding: 0.4rem 0.75rem;\n  background: rgba(255, 255, 255, 0.16);', 'padding: 0.4rem 0.75rem;\n  background: var(--mist);'],
  ['border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: var(--radius);\n  padding: 0.75rem;\n  background: rgba(255, 255, 255, 0.12);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  padding: 0.75rem;\n  background: #ffffff;'],
  ['color: rgba(255, 255, 255, 0.68);', 'color: var(--ink-soft);'],
  ['border-radius: 999px;\n  background: rgba(255, 255, 255, 0.16);', 'border-radius: 999px;\n  background: var(--line);'],
  ['border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  padding: 0.42rem 0.58rem;\n  background: rgba(255, 255, 255, 0.1);\n  color: rgba(255, 255, 255, 0.82);', 'border: 1px solid var(--line);\n  border-radius: 999px;\n  padding: 0.42rem 0.58rem;\n  background: #ffffff;\n  color: var(--ink-soft);'],
  ['background: #003B8D;\n  color: var(--cotton);', 'background: var(--mist);\n  color: var(--ink);'],
  ['color: rgba(255, 253, 248, 0.75);', 'color: var(--ink-soft);'],
  ['border: 1px solid rgba(255, 253, 248, 0.32);\n  border-radius: 999px;\n  padding: 0.45rem 0.65rem;\n  background: rgba(255, 255, 255, 0.13);', 'border: 1px solid var(--line);\n  border-radius: 999px;\n  padding: 0.45rem 0.65rem;\n  background: #ffffff;'],
  ['border: 1px solid rgba(255, 253, 248, 0.32);\n  border-radius: var(--radius);\n  background: rgba(255, 255, 255, 0.24);', 'border: 1px solid var(--line);\n  border-radius: var(--radius);\n  background: var(--line);'],
  ['padding: 1.2rem;\n  background: rgba(255, 255, 255, 0.14);', 'padding: 1.2rem;\n  background: #ffffff;'],
  ['color: #fff4c2;', 'color: var(--ink);'],
  ['color: rgba(255, 253, 248, 0.7);', 'color: var(--ink-soft);']
];

for (let [search, replace] of replacements) {
  css = css.split(search).join(replace);
}

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Update complete');
