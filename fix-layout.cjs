const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

const missingRules = `

/* --- RESTORED MISSING LAYOUT RULES --- */
.terminal-header,
.terminal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
}

.terminal-header {
  border-bottom: 1px solid var(--line);
  padding: 1rem 1.2rem;
}

.terminal-header span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink-soft);
  font-size: 0.84rem;
}

.terminal-header strong {
  color: var(--cyan);
  font-size: 0.85rem;
}

.terminal-chart {
  display: flex;
  align-items: flex-end;
  gap: 0.2rem;
  height: 60px;
  padding: 0 1.2rem;
  margin: 1rem 0;
}

.terminal-chart span {
  flex: 1;
  background: linear-gradient(180deg, var(--cyan), rgba(0,194,255,0) 100%);
  border-radius: 2px 2px 0 0;
  opacity: 0.7;
}

.terminal-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-row:last-child {
  border-bottom: 0;
}

.terminal-row span {
  color: var(--ink-soft);
  font-size: 0.84rem;
}

.market-strip {
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid var(--line);
  scrollbar-width: none;
}

.market-strip::-webkit-scrollbar {
  display: none;
}

.market-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  min-height: 112px;
  min-width: 200px;
  padding: 1.2rem 4vw;
  background: var(--paper);
  border-right: 1px solid var(--line);
}

.market-tile::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 194, 255, 0.03);
  content: '';
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms ease;
  pointer-events: none;
}
`;

// Insert the missing rules right after .hero-terminal
css = css.replace(/(\.hero-terminal \{[\s\S]*?\n\})/, `$1\n${missingRules}`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Restored missing layout rules!');
