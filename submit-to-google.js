const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'google-credentials.json'), 'utf8')
);

// URLs to submit
const urls = [
  'https://richardtice.co/',
  'https://richardtice.co/net-worth',
  'https://richardtice.co/wife',
  'https://richardtice.co/reform-uk',
  'https://richardtice.co/brexit',
];

async function submitUrls() {
  // Create JWT client with explicit auth
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  console.log('🚀 Submitting URLs to Google Indexing API...\n');
  console.log(`Using service account: ${credentials.client_email}\n`);

  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ ${url}`);
      console.log(`   Response: ${JSON.stringify(response.data)}\n`);
    } catch (error) {
      console.log(`❌ ${url}`);
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Error: ${JSON.stringify(error.response.data)}\n`);
      } else {
        console.log(`   Error: ${error.message}\n`);
      }
    }
  }

  console.log('Done!');
}

submitUrls();
