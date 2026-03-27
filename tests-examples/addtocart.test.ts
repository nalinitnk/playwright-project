import { test, expect } from '@playwright/test';

test('Amazon search and cart validation', async ({ page }) => {

  // Step 1: Go to Amazon
  await page.goto('https://www.amazon.com/');

  // Step 2: Search for a product
  await page.locator('#twotabsearchtextbox').fill('laptop');
  await page.locator('#nav-search-submit-button').click();

  // Step 3: Click first product in search results
  const firstProduct = page.locator('div.s-main-slot div[data-component-type="s-search-result"]').first();
 
  await firstProduct.locator('h2 a').click();

  // Step 4: Add to cart
  await page.locator('#add-to-cart-button').click();

  // Optional: Handle protection popup (e.g., warranty popups)
  try {
    await page.locator('#attachSiNoCoverage').click({ timeout: 2000 });
  } catch {}

  // Step 5: Validate cart count badge
  await expect(page.locator('#nav-cart-count')).toHaveText(/1|2|3/); // at least 1 item

  console.log('Cart updated successfully!');
});

