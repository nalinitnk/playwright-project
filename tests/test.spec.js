const { chromium } = require('playwright');

(async () => {
  // Launch a browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('www.google.com');

  // Take a screenshot
  await page.screenshot({ path: 'example.png' });
  await console.log("hi test");

  // Close the browser
  await browser.close();
})();