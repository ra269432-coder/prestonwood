const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'main.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Hero
content = content.replace('bg-[#0a1f18]', 'bg-indigo-950');
content = content.replace('bg-gradient-to-r from-[#0a1f18] via-[#0f2e24]/90', 'bg-gradient-to-r from-indigo-950 via-indigo-900/90');

// 2. About
content = content.replace('<section id="about" className="py-24 bg-white relative overflow-hidden">', '<section id="about" className="py-24 bg-yellow-50 relative overflow-hidden">');

// 3. WhatWeDo
content = content.replace('<section id="what-we-do" className="py-24 bg-slate-900 text-white relative overflow-hidden">', '<section id="what-we-do" className="py-24 bg-purple-900 text-white relative overflow-hidden">');

// 4. Investment
content = content.replace('<section id="investment" className="py-24 bg-slate-950 text-white relative overflow-hidden">', '<section id="investment" className="py-24 bg-emerald-900 text-white relative overflow-hidden">');

// 5. Features/Business
content = content.replace('<section id="business" className="py-20 bg-amber-900 relative overflow-hidden">', '<section id="business" className="py-20 bg-rose-900 relative overflow-hidden">');
content = content.replace('from-amber-900/90 to-amber-950/90', 'from-rose-900/90 to-rose-950/90');

// 6. Products
content = content.replace('<section id="products" className="py-24 bg-blue-50">', '<section id="products" className="py-24 bg-teal-50">');

// 7. Services
content = content.replace('<section id="services" className="relative py-24 bg-slate-50">', '<section id="services" className="relative py-24 bg-pink-50">');

// 8. Contact
content = content.replace('<section id="contact" className="py-24 bg-rose-50">', '<section id="contact" className="py-24 bg-cyan-50">');
content = content.replace('lg:p-16 bg-slate-900 text-white', 'lg:p-16 bg-cyan-950 text-white'); // Make form box match cyan

// 9. Process
content = content.replace('<section className="py-24 bg-zinc-950 text-white overflow-hidden">', '<section className="py-24 bg-blue-900 text-white overflow-hidden">');

// 10. Testimonial
content = content.replace('<section className="py-24 bg-stone-100 overflow-hidden">', '<section className="py-24 bg-violet-100 overflow-hidden">');

// 11. Footer
content = content.replace('<footer className="relative bg-black text-white pt-20 pb-12 overflow-hidden border-t-4 border-[#c59c38]">', '<footer className="relative bg-neutral-900 text-white pt-20 pb-12 overflow-hidden border-t-4 border-neutral-500">');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Rainbow theme applied!');
