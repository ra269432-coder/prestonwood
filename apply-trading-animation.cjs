const fs = require('fs');

// 1. Update main.jsx for the scrolling ticker
let jsx = fs.readFileSync('src/main.jsx', 'utf8');

const oldMarketStrip = `<section id="markets" className="market-strip lg:grid lg:grid-cols-5" aria-label="Market watch">
          {markets.map((market) => (
            <article key={market.label} className="market-tile lg:min-w-0">
              <span>{market.label}</span>
              <strong>{market.value}</strong>
              <em>{market.change}</em>
            </article>
          ))}
        </section>`;

const newMarketStrip = `<section id="markets" className="market-strip ticker-container" aria-label="Market watch">
          <div className="ticker-track">
            {[...markets, ...markets, ...markets, ...markets].map((market, i) => (
              <article key={market.label + i} className="market-tile">
                <span>{market.label}</span>
                <strong>{market.value}</strong>
                <em>{market.change}</em>
              </article>
            ))}
          </div>
        </section>`;

if (jsx.includes('className="market-strip lg:grid lg:grid-cols-5"')) {
  jsx = jsx.replace(oldMarketStrip, newMarketStrip);
  fs.writeFileSync('src/main.jsx', jsx, 'utf8');
  console.log('Updated main.jsx for ticker markup.');
}

// 2. Update styles.css with animations
let css = fs.readFileSync('src/styles.css', 'utf8');

const animationsCSS = `

/* --- Unique Trading Animations --- */

/* Live Volume Chart Animation for Hero Terminal */
@keyframes liveVolume {
  0% { transform: scaleY(0.7); filter: brightness(1); }
  50% { filter: brightness(1.5); }
  100% { transform: scaleY(1.4); filter: brightness(1); }
}

.terminal-chart span {
  transform-origin: bottom;
  animation: liveVolume 2s ease-in-out infinite alternate;
  will-change: transform;
}

.terminal-chart span:nth-child(1) { animation-duration: 1.5s; animation-delay: 0.1s; }
.terminal-chart span:nth-child(2) { animation-duration: 2.1s; animation-delay: 0.4s; }
.terminal-chart span:nth-child(3) { animation-duration: 1.8s; animation-delay: 0.2s; }
.terminal-chart span:nth-child(4) { animation-duration: 2.5s; animation-delay: 0.7s; }
.terminal-chart span:nth-child(5) { animation-duration: 1.9s; animation-delay: 0.3s; }
.terminal-chart span:nth-child(6) { animation-duration: 2.2s; animation-delay: 0.9s; }
.terminal-chart span:nth-child(7) { animation-duration: 1.7s; animation-delay: 0.5s; }

/* Continuous Scrolling Ticker Animation */
.ticker-container {
  overflow: hidden;
  display: flex;
  width: 100%;
}

.ticker-track {
  display: flex;
  width: fit-content;
  animation: tickerScroll 40s linear infinite;
  will-change: transform;
}

.ticker-track:hover {
  animation-play-state: paused;
}

@keyframes tickerScroll {
  0% { transform: translateX(0); }
  /* Translate exactly 25% because we duplicated the array 4 times */
  100% { transform: translateX(-25%); }
}

/* Subtle glowing pulse to the hero image for a live network feel */
@keyframes networkPulse {
  0% { opacity: 0.9; }
  100% { opacity: 1; filter: contrast(1.1) brightness(1.1); }
}

.hero-image {
  animation: networkPulse 6s ease-in-out infinite alternate !important;
}

`;

if (!css.includes('liveVolume')) {
  fs.writeFileSync('src/styles.css', css + animationsCSS, 'utf8');
  console.log('Added trading animations to styles.css.');
}
