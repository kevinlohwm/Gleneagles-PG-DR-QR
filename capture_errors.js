const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureConsoleErrors(filePath) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const errors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  page.on('pageerror', pageError => {
    errors.push(pageError.message);
  });

  page.on('requestfailed', request => {
    errors.push(`Failed to load resource: ${request.url()} - ${request.failure().errorText}`);
  });

  // Ensure the filePath is absolute or correctly relative to the script's execution directory
  const absoluteFilePath = path.resolve(__dirname, filePath);
  await page.goto(`file://${absoluteFilePath}`, { waitUntil: 'networkidle0' });
  
  await browser.close();
  return errors;
}

(async () => {
  const filesToTest = ['index.html', 'doctor_detail.html'];
  const allErrors = {};

  for (const file of filesToTest) {
    if (fs.existsSync(file)) {
      console.log(`Testing ${file}...`);
      const errors = await captureConsoleErrors(file);
      allErrors[file] = errors;
    } else {
      console.log(`File ${file} not found. Skipping.`);
      allErrors[file] = ['File not found'];
    }
  }

  console.log('\n--- Error Report ---');
  for (const file in allErrors) {
    if (allErrors[file].length > 0) {
      console.log(`Errors in ${file}:`);
      allErrors[file].forEach(error => console.log(`- ${error}`));
    } else {
      console.log(`No errors in ${file}.`);
    }
  }
  console.log('--------------------');
})();
