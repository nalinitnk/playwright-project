import { test, expect } from '@playwright/test';

test('google search test', async ({ page }) => {

  await page.goto('https://www.google.com/');

  // Accept cookies if popup appears (optional)
  // await page.getByRole('button', { name: /accept/i }).click();

  // Type into Google search box
  await page.locator('textarea[name="q"]').fill('deals');

  // Press Enter to search
  await page.keyboard.press('Enter');

  // Verify results page loads
  await expect(page).toHaveTitle(/deals/i);
});