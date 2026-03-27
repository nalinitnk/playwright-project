// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 900000 })
  //await page.waitForTimeout(120_000);

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Facebook - log in or sign up/);
 await page.getByPlaceholder("Username").fill('Admin')
 await page.getByPlaceholder("password").fill('admin123')
 //await page.getByRole('button', { type:'submit' }).dblclick()
 await page.getByRole('button', { name:'login' }).dblclick()
 await page.waitForTimeout(120_000);
 
});

 

