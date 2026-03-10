const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'google-credentials.json'), 'utf8')
);

async function checkIndexStatus() {
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const authClient = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: authClient });

  const urls = [
    'https://richardtice.co/',
    'https://richardtice.co/net-worth',
    'https://richardtice.co/wife',
    'https://richardtice.co/reform-uk',
    'https://richardtice.co/brexit',
  ];

  console.log('📊 Checking indexing status...\n');

  for (const url of urls) {
    try {
      const response = await indexing.urlNotifications.getMetadata({
        url: url,
      });
      console.log(`${url}`);
      console.log(`   Last notified: ${response.data.latestUpdate?.notifyTime || 'N/A'}`);
      console.log(`   Type: ${response.data.latestUpdate?.type || 'N/A'}\n`);
    } catch (error) {
      console.log(`${url}`);
      console.log(`   Status: Not found or error\n`);
    }
  }
}

checkIndexStatus();
