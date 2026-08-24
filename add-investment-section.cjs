const fs = require('fs');

let code = fs.readFileSync('src/main.jsx', 'utf8');

// 1. Add investmentServices array
const importServicesCode = `const importServices = [
  {
    icon: PackageCheck,
    title: 'Relief Distribution Intake',
    text: 'Dedicated supply chains for rapid deployment of incoming relief items.',
  },
  {
    icon: ShieldCheck,
    title: 'Trade Finance & Clearance',
    text: 'Comprehensive support for import letters of credit and customs documentation.',
  },
];`;

const investmentServicesCode = `${importServicesCode}

const investmentServices = [
  {
    icon: CircleDollarSign,
    title: 'Trade Lane Financing',
    text: 'Invest in high-yield supply chain operations and global logistics routes.',
  },
  {
    icon: TrendingUp,
    title: 'Commodity Futures',
    text: 'Secure equity in bulk agricultural and relief commodity stockpiles.',
  },
];`;

if (!code.includes('investmentServices')) {
  code = code.replace(importServicesCode, investmentServicesCode);
}

// 2. Add nav links
// Desktop nav
code = code.replace(
  `<a href="#import">Import desk</a>\n          <a href="#marketplace">Marketplace</a>`,
  `<a href="#import">Import desk</a>\n          <a href="#investment">Investment</a>\n          <a href="#marketplace">Marketplace</a>`
);
// Mobile nav
code = code.replace(
  `<a href="#import" onClick={() => setMobileNavOpen(false)}>\n            Import desk\n          </a>\n          <a href="#marketplace" onClick={() => setMobileNavOpen(false)}>\n            Marketplace\n          </a>`,
  `<a href="#import" onClick={() => setMobileNavOpen(false)}>\n            Import desk\n          </a>\n          <a href="#investment" onClick={() => setMobileNavOpen(false)}>\n            Investment\n          </a>\n          <a href="#marketplace" onClick={() => setMobileNavOpen(false)}>\n            Marketplace\n          </a>`
);
// Footer nav
code = code.replace(
  `<a href="#import">Import desk</a>\n            <a href="#risk">Risk control</a>`,
  `<a href="#import">Import desk</a>\n            <a href="#investment">Investment</a>\n            <a href="#risk">Risk control</a>`
);

// 3. Add the section itself after the Import section
const importSectionCode = `<section id="import" className="section centralized-desk">
          <div className="section-heading flex-shrink-0">
            <p className="eyebrow">Import Desk</p>
            <h2>Seamless Intake & Distribution</h2>
            <p className="section-subtext">Optimized supply chains for rapid deployment of relief items and essential imports.</p>
          </div>
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {importServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>`;

const investmentSectionCode = `${importSectionCode}

        <section id="investment" className="section centralized-desk">
          <div className="section-heading flex-shrink-0">
            <p className="eyebrow">Investment Desk</p>
            <h2>Grow with Global Commerce</h2>
            <p className="section-subtext">Participate in high-yield trade lanes and commodity financing opportunities.</p>
          </div>
          <div className="service-grid grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {investmentServices.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>`;

if (!code.includes('id="investment"')) {
  code = code.replace(importSectionCode, investmentSectionCode);
}

fs.writeFileSync('src/main.jsx', code, 'utf8');
console.log('Investment section added successfully');
