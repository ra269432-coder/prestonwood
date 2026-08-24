const fs = require('fs');

let css = fs.readFileSync('src/styles.css', 'utf8');

// Append override styles at the end of the file to fix visibility issues
const overrideCss = `

/* --- Visibility Fixes for Premium Blue Theme --- */

/* Fix tags to be visible on blue cards */
.tag-list span {
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  color: #FFFFFF !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

/* Fix availability strip color to stand out */
.availability-strip {
  color: #FFDF00 !important; /* Gold */
}

/* Fix Add to Cart / Request Quote button */
.add-button {
  background: #FFFFFF !important;
  color: #0078C1 !important;
  font-weight: 700 !important;
  border: none !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15) !important;
}

.add-button:hover {
  background: #F0F0F0 !important;
  transform: translateY(-2px) !important;
}
`;

fs.writeFileSync('src/styles.css', css + overrideCss, 'utf8');
console.log('Visibility overrides appended to styles.css');
