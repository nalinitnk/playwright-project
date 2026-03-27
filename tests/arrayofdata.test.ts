import { test, expect } from '@playwright/test';

const searchData = ['laptop', 'mobile', 'headphones'];

for (const item of searchData) {
  test(`Search for ${item} on Amazon`, async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    await page.fill('#twotabsearchtextbox', item);
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/s/);
  });
}