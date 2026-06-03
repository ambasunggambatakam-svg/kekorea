const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('revisi.html', 'utf8');
const $ = cheerio.load(html);

// 1. Extract styles
const styles = $('style').html();
if (styles) {
    fs.writeFileSync('app/globals.css', `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n${styles}`);
    console.log('Styles written to app/globals.css');
}

// 2. Extract script
let scriptContent = '';
$('script').each((i, el) => {
    scriptContent += $(el).html() + '\n';
    $(el).remove();
});

// 3. Extract body content
let bodyHtml = $('body').html();

// Basic React conversions
bodyHtml = bodyHtml.replace(/class=/g, 'className=');
bodyHtml = bodyHtml.replace(/for=/g, 'htmlFor=');
bodyHtml = bodyHtml.replace(/stroke-width=/g, 'strokeWidth=');
bodyHtml = bodyHtml.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyHtml = bodyHtml.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
bodyHtml = bodyHtml.replace(/fill-rule=/g, 'fillRule=');
bodyHtml = bodyHtml.replace(/clip-rule=/g, 'clipRule=');
bodyHtml = bodyHtml.replace(/clip-path=/g, 'clipPath=');
bodyHtml = bodyHtml.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
bodyHtml = bodyHtml.replace(/style="([^"]+)"/g, (match, p1) => {
    const rules = p1.split(';').filter(r => r.trim() !== '');
    let styleObj = '';
    rules.forEach(rule => {
        const parts = rule.split(':');
        if(parts.length === 2) {
            let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            let val = parts[1].trim().replace(/'/g, "\\'");
            // preserve css variables
            if(parts[0].trim().startsWith('--')) {
                key = `'${parts[0].trim()}'`;
            }
            styleObj += `${key}: '${val}', `;
        }
    });
    return `style={{${styleObj}}}`;
});
// Remove HTML comments inside JSX
bodyHtml = bodyHtml.replace(/<!--[\s\S]*?-->/g, '');

const pageContent = `'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Inject extracted scripts here
    try {
      ${scriptContent.split('\n').map(line => `      ${line}`).join('\n')}
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="landing-page">
      <div dangerouslySetInnerHTML={{ __html: \`${bodyHtml.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} />
    </div>
  );
}
`;

// In Next.js, using dangerouslySetInnerHTML requires a wrapper div, but the class= replacement won't affect dangerouslySetInnerHTML because it parses pure HTML!
// If I use dangerouslySetInnerHTML, I DON'T need to convert class= to className=, stroke-width, etc!!
// This is even better! I just pass the pure raw HTML string to dangerouslySetInnerHTML.

const pureHtml = $('body').html();

const purePageContent = `// @ts-nocheck
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    try {
      ${scriptContent.split('\n').map(line => `      ${line}`).join('\n')}
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <main dangerouslySetInnerHTML={{ __html: \`${pureHtml.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\` }} />
  );
}
`;

fs.writeFileSync('app/page.tsx', purePageContent);
console.log('Written to app/page.tsx');
