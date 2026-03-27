import { test, expect } from '@playwright/test';
import loginData from './loginData.json';

test.describe.parallel('Login Tests', () => {
  for (const { username, password } of loginData) {
    test(`Login test for ${username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');

      if (username === 'standard_user') {
        // Successful login
        await expect(page.locator('.title')).toHaveText('Products');
      } else {
        // Login failure
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});