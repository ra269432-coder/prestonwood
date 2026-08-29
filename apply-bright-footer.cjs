const fs = require('fs');
let content = fs.readFileSync('src/main.jsx', 'utf8');

function replaceStr(str, replacements) {
    let newStr = str;
    for (const [from, to] of replacements) {
        newStr = newStr.split(from).join(to);
    }
    return newStr;
}

// Update Navbar
let navStart = content.indexOf(`const Navbar = () => {`);
let navEnd = content.indexOf(`\n};`, navStart);
if (navEnd === -1) navEnd = content.length;
else navEnd += 3;

let navBlock = content.substring(navStart, navEnd);
navBlock = replaceStr(navBlock, [
    ['className="text-slate-800 text-sm font-bold hover:text-[#059669] transition-colors"', 'className="font-nav text-slate-800 text-[15px] font-black uppercase tracking-widest hover:text-[#059669] transition-colors"'],
    ['className="text-slate-800 text-lg font-bold"', 'className="font-nav text-slate-800 text-lg font-black uppercase tracking-widest"'],
    ['className="text-[#059669] text-lg font-bold"', 'className="font-nav text-[#059669] text-lg font-black uppercase tracking-widest"']
]);
content = content.substring(0, navStart) + navBlock + content.substring(navEnd);

// Update Footer
let footerStart = content.indexOf(`const Footer = () => {`);
let footerEnd = content.indexOf(`\n};`, footerStart);
if (footerEnd === -1) footerEnd = content.length;
else footerEnd += 3;

let footerBlock = content.substring(footerStart, footerEnd);
footerBlock = replaceStr(footerBlock, [
    ['bg-[#020617]', 'bg-[#F8FAFC]'],
    ['text-[#9CA3AF]', 'text-[#475569]'], // this changes all the text-slate-400 equivalent colors to slate-600
    ['text-[#FFFFFF]', 'text-[#11392B]'], // the logo text and scroll-to-top button icon (if it has text-[#FFFFFF], it will become text-[#11392B] which is good)
    ['border-slate-800/50', 'border-slate-200'],
    ['border-slate-800', 'border-slate-200']
]);
content = content.substring(0, footerStart) + footerBlock + content.substring(footerEnd);

fs.writeFileSync('src/main.jsx', content, 'utf8');
console.log("Navbar and Footer updated successfully!");
