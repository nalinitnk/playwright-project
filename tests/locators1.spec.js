const { test, expect } = require('@playwright/test');

test('multiselect dropdown', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
      await page.locator("id=login2").click
 console.log("login page opened")
});
