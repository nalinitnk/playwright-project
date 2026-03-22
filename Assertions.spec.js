const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {
   await page.goto('https://demo.nopcommerce.com/register');
  
  //await page.waitForTimeout(120_000);

  // page should have the url
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  console.log("page has url")
 
});
