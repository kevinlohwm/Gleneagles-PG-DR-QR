const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  let browser;
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--single-process'] });
    const page = await browser.newPage();
    let verificationResults = {
      indexPage: { doctorCardsDisplayed: false, doctorCardCount: 0, screenshot: '' },
      detailPage: { nameDisplayed: false, specialityDisplayed: false, qualificationsDisplayed: false, screenshot: '' }
    };

    // 1. Load index.html
    const indexHtmlPath = `file://${path.resolve(__dirname, 'index.html')}`;
    console.log(`Navigating to ${indexHtmlPath}...`);
    await page.goto(indexHtmlPath, { waitUntil: 'networkidle0' });

    // 2. Verify doctor cards on index.html
    console.log('Verifying doctor cards on index.html...');
    const doctorCards = await page.$$('div#doctor-cards-container div.doctor-card');
    verificationResults.indexPage.doctorCardCount = doctorCards.length;
    if (doctorCards.length > 0) {
      verificationResults.indexPage.doctorCardsDisplayed = true;
      console.log(`Found ${doctorCards.length} doctor cards.`);
    } else {
      console.log('No doctor cards found on index.html.');
    }

    // 3. Capture screenshot of index.html
    const indexScreenshotPath = 'index_page_screenshot.png';
    await page.screenshot({ path: indexScreenshotPath });
    verificationResults.indexPage.screenshot = indexScreenshotPath;
    console.log(`Screenshot of index.html saved to ${indexScreenshotPath}`);

    // 4. Navigate to a doctor detail page
    if (doctorCards.length > 0) {
      console.log('Clicking "View Profile" on the first doctor card...');
      const firstViewProfileButton = await page.$('div.doctor-card button.view-profile-btn');
      if (firstViewProfileButton) {
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle0' }),
          firstViewProfileButton.click()
        ]);
        console.log('Navigated to doctor_detail.html.');

        // 5. Verify doctor details on doctor_detail.html
        console.log('Verifying doctor details on doctor_detail.html...');
        const doctorName = await page.$eval('h2#doctor-detail-name', el => el.textContent.trim());
        const doctorSpeciality = await page.$eval('span#doctor-detail-speciality', el => el.textContent.trim());
        const doctorQualifications = await page.$eval('p#doctor-detail-qualifications', el => el.textContent.trim());

        if (doctorName && doctorName !== 'Dr. Sample Name' && doctorName !== 'Minimal Script Detail Page') { // Ensure it's not placeholder/default
          verificationResults.detailPage.nameDisplayed = true;
          console.log(`Doctor Name: ${doctorName}`);
        } else {
          console.log('Doctor name not displayed or is placeholder.');
        }

        if (doctorSpeciality && doctorSpeciality !== 'Sample Speciality') { // Ensure it's not placeholder/default
          verificationResults.detailPage.specialityDisplayed = true;
          console.log(`Doctor Speciality: ${doctorSpeciality}`);
        } else {
          console.log('Doctor speciality not displayed or is placeholder.');
        }
        
        if (doctorQualifications && doctorQualifications !== 'MBBS, MRCS, FRCS') { // Ensure it's not placeholder/default
          verificationResults.detailPage.qualificationsDisplayed = true;
          console.log(`Doctor Qualifications: ${doctorQualifications}`);
        } else {
          console.log('Doctor qualifications not displayed or are placeholder.');
        }

        // 6. Capture screenshot of doctor_detail.html
        const detailScreenshotPath = 'doctor_detail_page_screenshot.png';
        await page.screenshot({ path: detailScreenshotPath });
        verificationResults.detailPage.screenshot = detailScreenshotPath;
        console.log(`Screenshot of doctor_detail.html saved to ${detailScreenshotPath}`);

      } else {
        console.log('Could not find "View Profile" button on the first doctor card.');
      }
    } else {
      console.log('Skipping navigation to detail page as no doctor cards were found.');
    }

    // Output results
    console.log('\n--- Verification Summary ---');
    console.log(`Index Page: Doctor cards displayed: ${verificationResults.indexPage.doctorCardsDisplayed} (Count: ${verificationResults.indexPage.doctorCardCount}), Screenshot: ${verificationResults.indexPage.screenshot}`);
    console.log(`Detail Page: Name displayed: ${verificationResults.detailPage.nameDisplayed}, Speciality displayed: ${verificationResults.detailPage.specialityDisplayed}, Qualifications displayed: ${verificationResults.detailPage.qualificationsDisplayed}, Screenshot: ${verificationResults.detailPage.screenshot}`);
    console.log('--------------------------');

  } catch (error) {
    console.error('Error during verification:', error);
  } finally {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }
  }
})();
