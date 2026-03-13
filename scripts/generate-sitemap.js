#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Get all page directories
const pages = fs.readdirSync(APP_DIR)
  .filter(f => {
    const fullPath = path.join(APP_DIR, f);
    return fs.statSync(fullPath).isDirectory() && 
           fs.existsSync(path.join(fullPath, 'page.tsx'));
  });

const baseUrl = 'https://richardtice.co';
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

pages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += '</urlset>';

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
console.log(`✅ Generated sitemap with ${pages.length + 1} URLs`);
