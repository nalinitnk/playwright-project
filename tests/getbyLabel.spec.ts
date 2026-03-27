import { test, expect } from '@playwright/test';

test('Login test example', async ({ page }) => {
  
  // Open website
  await page.goto('https://the-internet.herokuapp.com/login');

  // Enter username
  await page.fill('#username', 'tomsmith');

  // Enter password
  await page.fill('#password', 'SuperSecretPassword!');

  // Click login button
  await page.click('button[type="submit"]');

  // Assertion - check success message
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});