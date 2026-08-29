const fs = require('fs');

let content = fs.readFileSync('src/main.jsx', 'utf8');

function replaceStr(str, replacements) {
    let newStr = str;
    for (const [from, to] of replacements) {
        newStr = newStr.split(from).join(to);
    }
    return newStr;
}

const comps = ['Hero', 'About', 'Investment', 'Features', 'Products', 'Services', 'Process', 'Testimonial', 'Contact', 'Footer', 'WhatWeDo'];

for (const comp of comps) {
    const startIndex = content.indexOf(`const ${comp} = () => {`);
    if (startIndex === -1) {
        console.log("Not found:", comp);
        continue;
    }
    let endIndex = content.indexOf(`\n};`, startIndex);
    if (endIndex === -1) endIndex = content.length;
    else endIndex += 3;
    
    let block = content.substring(startIndex, endIndex);
    
    if (comp === 'Hero') {
        block = replaceStr(block, [
            ['bg-[#0a1f18]', 'bg-[#064E3B]'],
            ['from-[#0a1f18]', 'from-[#064E3B]'],
            ['via-[#0f2e24]/90', 'via-[#064E3B]/90']
        ]);
    } else if (comp === 'About') {
        block = replaceStr(block, [
            ['bg-white', 'bg-[#F3F4F6]'],
            ['bg-slate-50', 'bg-[#E5E7EB]'],
            ['text-slate-900', 'text-[#1F2937]'],
            ['text-slate-600', 'text-[#1F2937]'],
        ]);
    } else if (comp === 'WhatWeDo') {
        block = replaceStr(block, [
            ['bg-slate-50', 'bg-[#0F172A]'],
            ['bg-white', 'bg-[#1E293B]'],
            ['bg-slate-100', 'bg-[#0F172A]'],
            ['text-slate-900', 'text-[#FFFFFF]'],
            ['text-slate-600', 'text-slate-300'],
            ['text-[#11392B]', 'text-[#D4AF37]'],
            ['border-slate-200', 'border-slate-800'],
        ]);
    } else if (comp === 'Investment') {
        block = replaceStr(block, [
            ['bg-[#11392B]', 'bg-[#4C0519]'],
            ['bg-[#1a4f3d]', 'bg-[#700b27]'],
            ['bg-[#0c2a20]', 'bg-[#2a030d]'],
        ]);
    } else if (comp === 'Features') {
        block = replaceStr(block, [
            ['bg-white', 'bg-[#E7E5E4]'],
            ['bg-slate-50', 'bg-[#F5F5F4]'],
            ['bg-slate-100', 'bg-slate-200'],
            ['text-slate-900', 'text-[#1F2937]'],
            ['text-slate-600', 'text-[#1F2937]'],
            ['border-slate-100', 'border-[#D6D3D1]'],
            ['border-slate-200', 'border-[#D6D3D1]'],
        ]);
    } else if (comp === 'Products') {
        block = replaceStr(block, [
            ['bg-slate-50', 'bg-[#FFFFFF]'],
            ['text-slate-900', 'text-[#1F2937]'],
            ['text-slate-600', 'text-[#1F2937]'],
        ]);
    } else if (comp === 'Services') {
        block = replaceStr(block, [
            ['bg-white', 'bg-[#1E293B]'],
            ['bg-slate-50', 'bg-[#1E293B]'],
            ['bg-slate-100', 'bg-slate-800'],
            ['text-slate-900', 'text-[#FFFFFF]'],
            ['text-slate-600', 'text-slate-300'],
            ['text-[#11392B]', 'text-[#D4AF37]'],
            ['border-slate-200', 'border-slate-800'],
        ]);
    } else if (comp === 'Process') {
        block = replaceStr(block, [
            ['bg-[#11392B]', 'bg-[#27272A]'],
            ['bg-[#0c2a20]', 'bg-[#3f3f46]'],
            ['border-[#1a4f3d]', 'border-[#52525b]'],
        ]);
    } else if (comp === 'Testimonial') {
        block = replaceStr(block, [
            ['bg-slate-50', 'bg-[#F0F9FF]'],
            ['text-slate-900', 'text-[#1F2937]'],
            ['text-[#11392B]', 'text-[#D4AF37]'],
        ]);
    } else if (comp === 'Contact') {
        block = replaceStr(block, [
            ['bg-[#11392B] relative', 'bg-[#134E4A] relative'],
            ['bg-white rounded-2xl', 'bg-transparent rounded-2xl'],
            ['bg-white text-slate-900', 'bg-[#134E4A] text-[#FFFFFF]'],
            ['text-slate-900 placeholder-slate-400', 'text-[#1F2937] placeholder-slate-400'],
            ['bg-slate-50 border', 'bg-[#F9FAFB] border'],
            ['text-slate-900', 'text-[#FFFFFF]'],
        ]);
    } else if (comp === 'Footer') {
        block = replaceStr(block, [
            ['bg-[#0a221a]', 'bg-[#020617]'],
            ['border-[#1a4f3d]', 'border-slate-800'],
            ['text-slate-100', 'text-[#9CA3AF]'],
            ['text-white', 'text-[#9CA3AF]'],
            ['bg-white p-3', 'bg-transparent p-0'],
            ['text-[#11392B]', 'text-[#FFFFFF]'],
        ]);
    }
    
    content = content.substring(0, startIndex) + block + content.substring(endIndex);
}

fs.writeFileSync('src/main.jsx', content, 'utf8');
console.log("Colors applied successfully!");
