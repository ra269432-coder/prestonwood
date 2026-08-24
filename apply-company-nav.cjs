const fs = require('fs');

// 1. Update main.jsx
let jsx = fs.readFileSync('src/main.jsx', 'utf8');

// Replace desktop nav Contact link
const oldDesktopNav = `<a href="#contact">Contact</a>`;
const newDesktopNav = `<div className="nav-dropdown">
            <span className="nav-dropdown-trigger">Company <ChevronDown size={14} style={{display: 'inline', marginLeft: '2px', position: 'relative', top: '1px'}} /></span>
            <div className="nav-dropdown-content">
              <a href="#about">About Prestonwood</a>
              <a href="#media">Media</a>
              <a href="#contact">Contact</a>
              <a href="#career">Career</a>
            </div>
          </div>`;

if (jsx.includes(oldDesktopNav)) {
  jsx = jsx.replace(oldDesktopNav, newDesktopNav);
}

// Replace mobile nav Contact link
const oldMobileNav = `<a href="#contact" onClick={() => setMobileNavOpen(false)}>
            Contact
          </a>`;
const newMobileNav = `<div className="mobile-nav-group">
            <span className="mobile-nav-header">Company</span>
            <a href="#about" onClick={() => setMobileNavOpen(false)}>About Prestonwood</a>
            <a href="#media" onClick={() => setMobileNavOpen(false)}>Media</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
            <a href="#career" onClick={() => setMobileNavOpen(false)}>Career</a>
          </div>`;

if (jsx.includes(oldMobileNav)) {
  jsx = jsx.replace(oldMobileNav, newMobileNav);
} else if (jsx.includes('<a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>')) {
  jsx = jsx.replace('<a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>', newMobileNav);
}

// Write JSX
fs.writeFileSync('src/main.jsx', jsx, 'utf8');
console.log('Updated main.jsx navigation.');

// 2. Add CSS
let css = fs.readFileSync('src/styles.css', 'utf8');

const navCSS = `
/* --- Dropdown Navigation --- */
.nav-dropdown {
  position: relative;
  display: inline-block;
  padding: 0.4rem 0;
}

.nav-dropdown-trigger {
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.nav-dropdown:hover .nav-dropdown-trigger {
  color: var(--saffron);
}

.nav-dropdown-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--paper);
  min-width: 220px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  z-index: 50;
}

.nav-dropdown:hover .nav-dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nav-dropdown-content a {
  padding: 0.75rem 1.25rem !important;
  color: var(--ink) !important;
  font-size: 0.9rem;
  text-align: left;
}

.nav-dropdown-content a::after {
  display: none !important; /* Hide underline animation */
}

.nav-dropdown-content a:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--saffron) !important;
}

/* Mobile Nav Group */
.mobile-nav-group {
  display: flex;
  flex-direction: column;
}
.mobile-nav-header {
  padding: 1.2rem 0 0.4rem 0;
  color: var(--ink-soft);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}
.mobile-nav-group a {
  padding: 0.75rem 0 0.75rem 1rem !important;
  border-bottom: 1px solid rgba(255,255,255,0.06) !important;
  font-weight: 500 !important;
  font-size: 0.95rem;
}
`;

if (!css.includes('.nav-dropdown {')) {
  fs.writeFileSync('src/styles.css', css + navCSS, 'utf8');
  console.log('Added nav CSS to styles.css.');
}
