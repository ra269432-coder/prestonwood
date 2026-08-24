const fs = require('fs');

// 1. Update main.jsx to add the class
let jsx = fs.readFileSync('src/main.jsx', 'utf8');

if (jsx.includes('<h1>Prestonwood Trading Limited</h1>')) {
  jsx = jsx.replace('<h1>Prestonwood Trading Limited</h1>', '<h1 className="animated-title">PRESTONWOOD TRADING LIMITED</h1>');
  fs.writeFileSync('src/main.jsx', jsx, 'utf8');
  console.log('Added animated-title class to main.jsx');
} else if (jsx.includes('<h1 className="animated-title">')) {
  console.log('animated-title class already exists in main.jsx');
} else {
  console.log('Could not find <h1> tag in main.jsx. Found instead:');
  console.log(jsx.substring(jsx.indexOf('<h1>') - 20, jsx.indexOf('<h1>') + 50));
}

// 2. Add animation to styles.css
let css = fs.readFileSync('src/styles.css', 'utf8');

const titleCSS = `

/* --- Premium Title Animation --- */
.animated-title {
  background: linear-gradient(
    to right,
    #FFFFFF 20%,
    #FFDF00 50%,
    #FFFFFF 80%
  );
  background-size: 200% auto;
  color: transparent !important; /* Fallback */
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  animation: shine 4s linear infinite;
  display: inline-block;
}

@keyframes shine {
  to {
    background-position: -200% center;
  }
}

`;

if (!css.includes('.animated-title {')) {
  fs.writeFileSync('src/styles.css', css + titleCSS, 'utf8');
  console.log('Added .animated-title to styles.css');
} else {
  console.log('.animated-title already exists in styles.css');
}
