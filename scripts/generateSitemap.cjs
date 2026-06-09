const fs = require('fs');
const path = require('path');

// Source of truth - list of category IDs from src/data/index.ts
// Keep this list in sync when adding/removing categories
const categoryIds = [
  'artificial-intelligence',
  'hosting-cloud',
  'business-payments',
  'reading',
  'adblock',
  'downloading',
  'streaming',
  'gaming',
  'music'
];

// Base URL (update if domain changes)
const baseUrl = 'https://algdevs.marwan-naili.me';
const today = new Date().toISOString().split('T')[0];

// Generate sitemap
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

categoryIds.forEach(id => {
  sitemap += `  <url>
    <loc>${baseUrl}/#${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Write to public (included in GitHub Pages deploy)
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`Sitemap generated with ${categoryIds.length} categories + homepage at ${outputPath}`);