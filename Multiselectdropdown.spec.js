const { test, expect } = require('@playwright/test');

test('multiselect dropdown', async ({ page }) => {
   await page.goto('https://testautomationpractice.blogspot.com');
  


 await page.selectOption('#colors',['Red','Blue','Yellow'])
 await page.waitForTimeout(10000)
 console.log("Multiselect dropdown selected")
});
