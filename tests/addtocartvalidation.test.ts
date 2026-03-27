import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  // Click first product
  await page.locator('.card-title a').first().click();

  // Add to cart
  await page.click('a:has-text("Add to cart")');

  // Handle alert
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
});