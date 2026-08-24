const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// Ensure the hero image doesn't ruin the dark grey text by applying a white-to-transparent gradient over it
css = css.replace(/\.hero-scrim \{\n\s*background: rgba\(0, 0, 0, 0\.7\);\n\}/m, `.hero-scrim {\n  background: linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0.2) 100%);\n}`);

// Let's also ensure the Topbar actions icon buttons are readable (they might have white backgrounds now but we want them to look good against the Forest Green topbar)
css = css.replace(/\.icon-button,\n\.cart-button,\n\.mobile-menu-button \{\n\s*display: inline-grid;[\s\S]*?color: inherit;\n\}/m, `.icon-button,\n.cart-button,\n.mobile-menu-button {\n  display: inline-grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid rgba(255,255,255,0.2);\n  border-radius: var(--radius);\n  background: rgba(255,255,255,0.1);\n  color: #FFFFFF;\n}`);

fs.writeFileSync('src/styles.css', css, 'utf8');
console.log('Polished Premium Green contrast!');
