const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'google-credentials.json'), 'utf8')
);

async function submitSitemap() {
  // Create auth client
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/webmasters'],
  });

  const authClient = await auth.getClient();
  const searchconsole = google.searchconsole({ version: 'v1', auth: authClient });

  const siteUrl = 'sc-domain:richardtice.co';
  const sitemapUrl = 'https://richardtice.co/sitemap.xml';

  console.log('📤 Submitting sitemap to Google Search Console...\n');
  console.log(`Site: ${siteUrl}`);
  console.log(`Sitemap: ${sitemapUrl}\n`);

  try {
    await searchconsole.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });
    console.log('✅ Sitemap submitted successfully!');
  } catch (error) {
    if (error.response) {
      console.log(`❌ Error: ${error.response.status}`);
      console.log(JSON.stringify(error.response.data, null, 2));
    } else {
      console.log(`❌ Error: ${error.message}`);
    }
    
    // Try with https:// prefix instead
    console.log('\nTrying with https:// prefix...');
    try {
      await searchconsole.sitemaps.submit({
        siteUrl: 'https://richardtice.co/',
        feedpath: sitemapUrl,
      });
      console.log('✅ Sitemap submitted successfully!');
    } catch (error2) {
      if (error2.response) {
        console.log(`❌ Error: ${error2.response.status}`);
        console.log(JSON.stringify(error2.response.data, null, 2));
      } else {
        console.log(`❌ Error: ${error2.message}`);
      }
    }
  }
}

submitSitemap();
