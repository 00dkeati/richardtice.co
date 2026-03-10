const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'google-credentials.json'), 'utf8')
);

const urls = [
  'https://richardtice.co/',
  'https://richardtice.co/net-worth',
  'https://richardtice.co/wife',
  'https://richardtice.co/reform-uk',
  'https://richardtice.co/brexit',
  'https://richardtice.co/is-richard-tice-married',
  'https://richardtice.co/how-old-is-richard-tice',
  'https://richardtice.co/richard-tice-immigration',
  'https://richardtice.co/richard-tice-net-zero',
  'https://richardtice.co/richard-tice-vs-nigel-farage',
  'https://richardtice.co/where-does-richard-tice-live',
  'https://richardtice.co/does-richard-tice-have-children',
  'https://richardtice.co/richard-tice-tax',
  'https://richardtice.co/richard-tice-boston-skegness',
  'https://richardtice.co/what-party-is-richard-tice',
  'https://richardtice.co/richard-tice-nhs',
  'https://richardtice.co/how-tall-is-richard-tice',
  'https://richardtice.co/richard-tice-education',
];

async function submitUrls() {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  console.log('🚀 Submitting URLs to Google Indexing API...\n');

  let success = 0, failed = 0;

  for (const url of urls) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: { url, type: 'URL_UPDATED' },
      });
      console.log(`✅ ${url}`);
      success++;
    } catch (error) {
      console.log(`❌ ${url}`);
      failed++;
    }
  }

  console.log(`\n📊 Results: ${success} submitted, ${failed} failed`);
}

submitUrls();
