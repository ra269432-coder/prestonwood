const fs = require('fs');
let jsx = fs.readFileSync('src/main.jsx', 'utf8');

// Fix Hero Layout on Mobile
// Add text-center on mobile, text-left on desktop. Add px-4 for mobile breathing room.
jsx = jsx.replace(/<div className="hero-content pt-28 pb-16 flex flex-col lg:grid lg:grid-cols-\[1\.02fr_0\.48fr\] gap-12 lg:items-end">/, '<div className="hero-content px-4 lg:px-0 pt-24 pb-12 flex flex-col lg:grid lg:grid-cols-[1.02fr_0.48fr] gap-8 lg:gap-12 lg:items-end text-center lg:text-left">');

// Fix Hero Actions (Buttons) on mobile - stack them full width
jsx = jsx.replace(/<div className="hero-actions">/, '<div className="hero-actions flex flex-col sm:flex-row w-full justify-center lg:justify-start gap-3 mt-6">');
jsx = jsx.replace(/<a className="primary-button"/, '<a className="primary-button w-full sm:w-auto"');
jsx = jsx.replace(/<a className="secondary-button"/, '<a className="secondary-button w-full sm:w-auto"');

// Fix the Logo Box in the Topbar (Remove the weird background styling from the old blue theme)
jsx = jsx.replace(/style={{ background: 'rgba\(186, 230, 253, 0\.05\)', padding: '6px', borderRadius: '8px', border: '1px solid rgba\(186, 230, 253, 0\.1\)' }}/, 'style={{ display: "flex", alignItems: "center" }}');

// Fix the Terminal Widget mobile margins
jsx = jsx.replace(/<aside className="hero-terminal"/, '<aside className="hero-terminal mt-6 lg:mt-0 mx-auto"');

// Save the file
fs.writeFileSync('src/main.jsx', jsx, 'utf8');

// Now let's fix styles.css slightly to ensure the text alignment doesn't get overridden
let css = fs.readFileSync('src/styles.css', 'utf8');
css = css.replace(/\.hero-actions \{\n\s*display: flex;\n\s*flex-wrap: wrap;\n\s*gap: 0\.8rem;\n\s*margin-top: 1\.8rem;\n\}/m, '.hero-actions {}'); // Stripped, using tailwind classes instead
css = css.replace(/\.hero-actions \{ justify-content: center !important; \}/, ''); // Remove the old media query override

fs.writeFileSync('src/styles.css', css, 'utf8');

console.log('Mobile layout polished!');
